const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')
const MultiSigTransfer = artifacts.require('MultiSigTransfer')
const expect = require('chai').expect

contract('KinesisVelocityToken', function (accounts) {
  // The truffle test framework creates the contract from the first account in
  // the contract array
  const owner = accounts[0]
  const investorOne = accounts[1]
  const investorTwo = accounts[2]
  const approverOne = accounts[3]
  const approverTwo = accounts[4]
  const trustAccount = '0x0000000000000000000000000000000000000000'
  const revertMessage = 'VM Exception while processing transaction: revert'
  let instance
  const tokenSupply = 300000

  const approveTransferToAddress = async (toAddress, quantity) => {
    await instance.adminTransfer(toAddress, quantity, {
      from: approverOne
    })
    const transferList = await instance.getTransfers()
    const transfer = transferList[0]
    await instance.approveTransfer(transfer, {
      from: approverTwo
    })
  }

  const setTransferable = async () => {
    await instance.setTransferable(true, {
      from: owner
    })
    await instance.approveTransferableToggle({
      from: approverOne
    })
  }

  beforeEach(async () => {
    instance = await KinesisVelocityToken.new()
    await instance.setAdmin(approverOne, {
      from: owner
    })
    await instance.setAdmin(approverTwo, {
      from: owner
    })
  })

  describe('adminTransfers', () => {
    it('correctly moves funds from owner to investor1 after approval', async () => {
      const ownerBalance = (await instance.balanceOf(owner)).toNumber()
      const investorBalance = (await instance.balanceOf(investorOne)).toNumber()

      await instance.adminTransfer(investorOne, 100, {
        from: owner
      })

      const ownerBalancePreApproval = await instance.balanceOf(owner)
      const investorBalancePreApproval = await instance.balanceOf(investorOne)
      expect(ownerBalancePreApproval.toNumber()).to.eql(ownerBalance)
      expect(investorBalancePreApproval.toNumber()).to.eql(investorBalance)

      const transferList = await instance.getTransfers()
      const transfer = transferList[0]

      const transferInstance = await MultiSigTransfer.at(transfer)
      let quant = await transferInstance.quantity()
      expect(quant.toNumber()).to.eql(100)
      let isPending = await transferInstance.isPending()
      expect(isPending).to.eql(true)

      await instance.approveTransfer(transfer, {
        from: approverOne
      })
      isPending = await transferInstance.isPending()
      expect(isPending).to.eql(false)

      const ownerBalancePostApproval = await instance.balanceOf(owner)
      const investorBalancePostApproval = await instance.balanceOf(investorOne)
      expect(ownerBalancePostApproval.toNumber()).to.eql(ownerBalance - 100)
      expect(investorBalancePostApproval.toNumber()).to.eql(investorBalance + 100)
    })

    it('fails when the requester tries to approve the approveTransfer', async () => {
      const ownerBalance = (await instance.balanceOf(owner)).toNumber()
      const investorBalance = (await instance.balanceOf(investorOne)).toNumber()

      try {
        await instance.adminTransfer(investorOne, 100, {
          from: approverOne
        })

        const transferList = await instance.getTransfers()
        const transfer = transferList[0]
        await instance.approveTransfer(transfer, {
          from: approverOne
        })

        throw new Error('Wrong Error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const ownerBalancePostApproval = await instance.balanceOf(owner)
        const investorBalancePostApproval = await instance.balanceOf(investorOne)
        expect(ownerBalancePostApproval.toNumber()).to.eql(ownerBalance)
        expect(investorBalancePostApproval.toNumber()).to.eql(investorBalance)
      }
    })

    it('only allows admins to make adminTransfers', async () => {
      try {
        await instance.adminTransfer(investorOne, 100, {
          from: investorTwo
        })

        throw new Error('Wrong Error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const transferList = await instance.getTransfers()
        expect(transferList.length).to.eql(0)
      }
    })

    it('can\'t approve a transfer which has already been approved', async () => {
      const investorBalance = (await instance.balanceOf(investorOne)).toNumber()
      await approveTransferToAddress(investorOne, 100)
      const postTransferBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(postTransferBalance).to.eql(investorBalance + 100)
      const transfer = (await instance.getTransfers())[0]

      try {
        await instance.approveTransfer(transfer, {
          from: approverOne
        })
        throw new Error('Wrong Error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const secondTransferBalance = (await instance.balanceOf(investorOne)).toNumber()
        expect(secondTransferBalance).to.eql(postTransferBalance)
      }
    })
  })

  describe('KinesisVelocityToken -- Constructor', () => {
    it('correctly sets the total supply to owner on contract initialisation', async () => {
      let newToken = await KinesisVelocityToken.new()

      let totalSupply = await newToken.totalSupply()
      let ownerQty = await newToken.balanceOf(owner)

      expect(totalSupply.toNumber()).to.eql(ownerQty.toNumber())
    })
  })

  describe('transferFrom', () => {
    it('correctly getTransfers from owner to investor', async () => {
      let originalOwnerQty = await instance.balanceOf(owner)
      let originalInvestorOneQty = await instance.balanceOf(investorOne)
      expect(originalOwnerQty.toNumber()).to.eql(tokenSupply)
      expect(originalInvestorOneQty.toNumber()).to.eql(0)

      await approveTransferToAddress(investorOne, 100)

      let newOwnerQty = await instance.balanceOf(owner)
      let newInvestorOneQty = await instance.balanceOf(investorOne)
      expect(newOwnerQty.toNumber()).to.eql(tokenSupply - 100)
      expect(newInvestorOneQty.toNumber()).to.eql(100)
    })

    it('fails to transfer from investor1 to investor2 if contract is not transferable', async () => {
      await approveTransferToAddress(investorOne, 100)
      let originalInvestorOneQty = await instance.balanceOf(investorOne)
      let originalInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(originalInvestorOneQty.toNumber()).to.eql(100)
      expect(originalInvestorTwoQty.toNumber()).to.eql(0)

      try {
        await instance.transfer(investorTwo, 50, {
          from: investorOne
        })

        throw new Error('Wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        let newInvestorOneQty = await instance.balanceOf(investorOne)
        let newInvestorTwoQty = await instance.balanceOf(investorTwo)
        expect(newInvestorOneQty.toNumber()).to.eql(100)
        expect(newInvestorTwoQty.toNumber()).to.eql(0)
      }
    })

    it('getTransfers from investor1 to investor2 if contract is transferable', async () => {
      await setTransferable()
      await approveTransferToAddress(investorOne, 100)

      let originalInvestorOneQty = await instance.balanceOf(investorOne)
      let originalInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(originalInvestorOneQty.toNumber()).to.eql(100)
      expect(originalInvestorTwoQty.toNumber()).to.eql(0)

      await instance.transfer(investorTwo, 50, {
        from: investorOne
      })

      let newInvestorOneQty = await instance.balanceOf(investorOne)
      let newInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(newInvestorOneQty.toNumber()).to.eql(50)
      expect(newInvestorTwoQty.toNumber()).to.eql(50)
    })

    it('an investor cannot transfer to the zero address', async () => {
      await setTransferable()
      await approveTransferToAddress(investorOne, 100)

      let originalInvestorOneQty = await instance.balanceOf(investorOne)
      let originalInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(originalInvestorOneQty.toNumber()).to.eql(100)
      expect(originalInvestorTwoQty.toNumber()).to.eql(0)

      try {
        await instance.transfer(trustAccount, 50, {
          from: investorOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        let newInvestorOneQty = await instance.balanceOf(investorOne)
        expect(newInvestorOneQty.toNumber()).to.eql(100)
      }
    })

    it('doesn\'t allow owner to make basic getTransfers even when token set to transferable', async () => {
      await setTransferable()

      let originalOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let originalInvestorQty = (await instance.balanceOf(investorOne)).toNumber()

      try {
        await instance.transfer(investorOne, 100, {
          from: owner
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        let newOwnerQty = (await instance.balanceOf(owner)).toNumber()
        let newInvestorQty = (await instance.balanceOf(investorOne)).toNumber()
        expect(newOwnerQty).to.eql(originalOwnerQty)
        expect(newInvestorQty).to.eql(originalInvestorQty)
      }
    })

    it('allows people to transfer back to owner at any time', async () => {
      await approveTransferToAddress(investorOne, 100)

      const initialOwnerBalance = (await instance.balanceOf(owner)).toNumber()
      const initialInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(initialOwnerBalance).to.eql(tokenSupply - 100)
      expect(initialInvestorBalance).to.eql(100)

      await instance.transfer(owner, 50, {
        from: investorOne
      })

      const postTransferOwnerBalance = (await instance.balanceOf(owner)).toNumber()
      const postTransferInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(postTransferOwnerBalance).to.eql(tokenSupply - 100 + 50)
      expect(postTransferInvestorBalance).to.eql(50)
    })
  })

  describe('isOwner', () => {
    it('returns true for the owner', async function () {
      const isOwner = await instance.isOwner(owner)
      expect(isOwner).to.eql(true)
    })

    it('returns false for the anyone who is not the owner', async function () {
      const isOwner = await instance.isOwner(investorOne)
      expect(isOwner).to.eql(false)
    })
  })

  describe('isAdmin', () => {
    it('returns true for an admin', async function () {
      const isOwner = await instance.isAdmin(approverOne)
      expect(isOwner).to.eql(true)
    })

    it('returns false for the anyone who is not an admin', async function () {
      const isOwner = await instance.isAdmin(investorOne)
      expect(isOwner).to.eql(false)
    })
  })

  describe('isTransferable changes', () => {
    it('initially is not transferable', async () => {
      const isTransferable = await instance.isTransferable()
      expect(isTransferable).to.eql(false)
    })

    it('correctly creates a toggle request', async () => {
      await instance.setTransferable(true, {
        from: owner
      })
      const isPending = await instance.toggleTransferablePending()
      expect(isPending).to.eql(true)
      const isTransferable = await instance.isTransferable()
      expect(isTransferable).to.eql(false)
    })

    it('will not create a toggle request for non-owner', async () => {
      try {
        await instance.setTransferable(true, {
          from: investorOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const isPending = await instance.toggleTransferablePending()
        expect(isPending).to.eql(false)
      }
    })

    it('will not create a toggle request for no state change', async () => {
      try {
        await instance.setTransferable(false, {
          from: owner
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const isPending = await instance.toggleTransferablePending()
        expect(isPending).to.eql(false)
      }
    })

    it('approves a toggle request', async () => {
      await instance.setTransferable(true, {
        from: owner
      })
      await instance.approveTransferableToggle({
        from: approverOne
      })
      const isPending = await instance.toggleTransferablePending()
      const isTransferable = await instance.isTransferable()
      expect(isPending).to.eql(false)
      expect(isTransferable).to.eql(true)
    })

    it('the same user who requested the toggle cannot approve it', async () => {
      await instance.setTransferable(true, {
        from: owner
      })

      try {
        await instance.approveTransferableToggle({
          from: owner
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const isPending = await instance.toggleTransferablePending()
        const isTransferable = await instance.isTransferable()
        expect(isPending).to.eql(true)
        expect(isTransferable).to.eql(false)
      }
    })

    it('only toggles when a toggle is requested', async () => {
      try {
        await instance.approveTransferableToggle({
          from: approverOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const isPending = await instance.toggleTransferablePending()
        const isTransferable = await instance.isTransferable()
        expect(isPending).to.eql(false)
        expect(isTransferable).to.eql(false)
      }
    })

    it('can toggle back to not transferable after', async () => {
      let isPending, isTransferable
      await instance.setTransferable(true, {
        from: owner
      })
      await instance.approveTransferableToggle({
        from: approverOne
      })
      isPending = await instance.toggleTransferablePending()
      expect(isPending).to.eql(false)
      isTransferable = await instance.isTransferable()
      expect(isTransferable).to.eql(true)

      await instance.setTransferable(false, {
        from: owner
      })
      isPending = await instance.toggleTransferablePending()
      expect(isPending).to.eql(true)
      await instance.approveTransferableToggle({
        from: approverOne
      })
      isTransferable = await instance.isTransferable()
      expect(isTransferable).to.eql(false)
      isPending = await instance.toggleTransferablePending()
      expect(isPending).to.eql(false)
    })
  })
})
