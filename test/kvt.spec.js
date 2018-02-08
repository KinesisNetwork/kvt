const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')
const MultiSigTransfer = artifacts.require('MultiSigTransfer')
const expect = require('chai').expect

contract('KinesisVelocityToken', function(accounts) {
  // The truffle test framework creates the contract from the first account in
  // the contract array
  const owner = accounts[0]
  const investorOne = accounts[1]
  const investorTwo = accounts[2]
  const approver = accounts[3]
  const trustAccount = accounts[4]
  const revertMessage = 'VM Exception while processing transaction: revert'
	let instance
  const tokenSupply = 1000000

  const approveTransferToAddress = async (toAddress, quantity) => {
    await instance.adminTransfer(toAddress, quantity, {from: owner})
    const transferList = await instance.getTransfers()
    const transfer = transferList[0]
    await instance.approveTransfer(transfer, {from: approver})
  }

  const setTransferable = async () => {
    await instance.setTransferable(true, {from: owner})
    await instance.approveTransferableToggle({from: approver})
  }

	beforeEach(async () => {
    instance = await KinesisVelocityToken.new()
    await instance.setApprover(approver, {from: owner})
    await instance.setTrustAccount(trustAccount, {from: owner})
  })

  describe('setting special accounts', () => {
    it('does not allow to change approver', async () => {
      await instance.setApprover(investorOne, {from: owner})
      const isInvestorApprover = await instance.isApprover({from: investorOne})
      expect(isInvestorApprover).to.eql(false)
    })

    it('does not allow to change trustAccount', async () => {
      await instance.setTrustAccount(investorOne, {from: owner})
      const isInvestorTrustAccount = await instance.isTrustAccount({from: investorOne})
      expect(isInvestorTrustAccount).to.eql(false)
    })
  })

  describe('adminTransfers', () => {
    it('correctly moves funds from owner to investor1 after approval', async () => {
      const ownerBalance = (await instance.balanceOf(owner)).toNumber()
      const investorBalance = (await instance.balanceOf(investorOne)).toNumber()

      await instance.adminTransfer(investorOne, 100, {from: owner})
      const ownerBalancePreApproval = await instance.balanceOf(owner)
      const investorBalancePreApproval = await instance.balanceOf(investorOne)
      expect(ownerBalancePreApproval.toNumber()).to.eql(ownerBalance)
      expect(investorBalancePreApproval.toNumber()).to.eql(investorBalance)

      const transferList = await instance.getTransfers()
      const transfer = transferList[0]

      const transferInstance = await MultiSigTransfer.at(transfer)
      let quant = await transferInstance.getQuantity()
      expect(quant.toNumber()).to.eql(100)
      let isPending = await transferInstance.isPending()
      expect(isPending).to.eql(true)

      await instance.approveTransfer(transfer, {from: approver})
      isPending = await transferInstance.isPending()
      expect(isPending).to.eql(false)

      const ownerBalancePostApproval = await instance.balanceOf(owner)
      const investorBalancePostApproval = await instance.balanceOf(investorOne)
      expect(ownerBalancePostApproval.toNumber()).to.eql(ownerBalance - 100)
      expect(investorBalancePostApproval.toNumber()).to.eql(investorBalance + 100)
    })

    it('fails when not set approver tries to approveTransfer', async () => {
      const ownerBalance = (await instance.balanceOf(owner)).toNumber()
      const investorBalance = (await instance.balanceOf(investorOne)).toNumber()
      await instance.adminTransfer(investorOne, 100, {from: owner})

      const transferList = await instance.getTransfers()
      const transfer = transferList[0]
      await instance.approveTransfer(transfer, {from: owner})

      const ownerBalancePostApproval = await instance.balanceOf(owner)
      const investorBalancePostApproval = await instance.balanceOf(investorOne)
      expect(ownerBalancePostApproval.toNumber()).to.eql(ownerBalance)
      expect(investorBalancePostApproval.toNumber()).to.eql(investorBalance)
    })

    it('only allows owner to make adminTransfers', async () => {
      await instance.adminTransfer(investorOne, 100, {from: approver})
      const transferList = await instance.getTransfers()
      expect(transferList.length).to.eql(0)
    })

    it('can\'t approve a transfer which has already been approved', async () => {
      const investorBalance = (await instance.balanceOf(investorOne)).toNumber()
      await approveTransferToAddress(investorOne, 100)
      const postTransferBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(postTransferBalance).to.eql(investorBalance + 100)
      const transfer = (await instance.getTransfers())[0]
      await instance.approveTransfer(transfer, {from: approver})
      const secondTransferBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(secondTransferBalance).to.eql(postTransferBalance)
    })
  })

  describe('KinesisVelocityToken -- Constructor', () => {
    it('correctly sets the total supply to owner on contract initialisation', async () => {
      let newToken = await KinesisVelocityToken.new()

      let totalSupply = await newToken.getTotalSupply()
      let ownerQty = await newToken.balanceOf(owner)

      expect(totalSupply.toNumber()).to.eql(ownerQty.toNumber())
    })
  })

  describe('transferFrom', () => {
    it('correctly transfers from owner to investor', async () => {
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

      await instance.transfer(investorTwo, 50, {from: investorOne})

      let newInvestorOneQty = await instance.balanceOf(investorOne)
      let newInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(newInvestorOneQty.toNumber()).to.eql(100)
      expect(newInvestorTwoQty.toNumber()).to.eql(0)
    })

    it('transfers from investor1 to investor2 if contract is transferable', async () => {
      await setTransferable()
      await approveTransferToAddress(investorOne, 100)

      let originalInvestorOneQty = await instance.balanceOf(investorOne)
      let originalInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(originalInvestorOneQty.toNumber()).to.eql(100)
      expect(originalInvestorTwoQty.toNumber()).to.eql(0)

      await instance.transfer(investorTwo, 50, {from: investorOne})

      let newInvestorOneQty = await instance.balanceOf(investorOne)
      let newInvestorTwoQty = await instance.balanceOf(investorTwo)
      expect(newInvestorOneQty.toNumber()).to.eql(50)
      expect(newInvestorTwoQty.toNumber()).to.eql(50)
    })

    it('doesn\'t allow owner to make basic transfers even when token set to transferable', async () => {
      await setTransferable()

      let originalOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let originalInvestorQty = (await instance.balanceOf(investorOne)).toNumber()

      await instance.transfer(investorOne, 100, {from: owner})

      let newOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let newInvestorQty = (await instance.balanceOf(investorOne)).toNumber()
      expect(newOwnerQty).to.eql(originalOwnerQty)
      expect(newInvestorQty).to.eql(originalInvestorQty)
    })

    it('allows people to transfer back to owner at any time', async () => {
      await approveTransferToAddress(investorOne, 100)

      const initialOwnerBalance = (await instance.balanceOf(owner)).toNumber()
      const initialInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(initialOwnerBalance).to.eql(tokenSupply - 100)
      expect(initialInvestorBalance).to.eql(100)

      await instance.transfer(owner, 50, {from: investorOne})

      const postTransferOwnerBalance = (await instance.balanceOf(owner)).toNumber()
      const postTransferInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(postTransferOwnerBalance).to.eql(tokenSupply - 100 + 50)
      expect(postTransferInvestorBalance).to.eql(50)
    })
  })

  describe('buy Token', () => {
    it('correctly transfers from owner to investor on purchase', async () => {
      let originalOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let originalInvestorOneQty = (await instance.balanceOf(investorOne)).toNumber()
      expect(originalOwnerQty).to.eql(tokenSupply)
      expect(originalInvestorOneQty).to.eql(0)

      await instance.buyToken(100, {from: investorOne, value: 100 * (await instance.getPrice()).toNumber()})

      let newOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let newInvestorOneQty = (await instance.balanceOf(investorOne)).toNumber()
      expect(newOwnerQty).to.eql(originalOwnerQty - 100)
      expect(newInvestorOneQty).to.eql(originalInvestorOneQty + 100)
    })
  })

  describe('isOwner', () => {
    it('returns true for the owner', async function () {
      const isOwner = await instance.isOwner({from: owner})
			expect(isOwner).to.eql(true)
    })

    it('returns false for the anyone who is not the owner', async function () {
      const isOwner = await instance.isOwner({from: investorOne})
			expect(isOwner).to.eql(false)
    })
  })

  describe('burning tokens', () => {
    describe('owner burn methods', () => {
      it('sets burn to pending', async () => {
        await instance.startBurn({from: owner})
        const isBurnPending = await instance.isBurnPending()
        expect(isBurnPending).to.eql(true)
      })

      it('only allows burn pending state for owner', async () => {
        await instance.startBurn({from: approver})
        const isBurnPending = await instance.isBurnPending()
        expect(isBurnPending).to.eql(false)
      })

      it('can cancel a pending burn', async () => {
        await instance.startBurn({from: owner})
        await instance.cancelBurn({from: owner})
        const isBurnPending = await instance.isBurnPending()
        expect(isBurnPending).to.eql(false)
      })

      it('either approver or owner can cancel a pending burn', async () => {
        await instance.startBurn({from: owner})

        await instance.cancelBurn({from: investorOne})
        const isBurnPendingAfterInvestorCancel = await instance.isBurnPending()
        expect(isBurnPendingAfterInvestorCancel).to.eql(true)

        await instance.cancelBurn({from: approver})
        const isBurnPending = await instance.isBurnPending()
        expect(isBurnPending).to.eql(false)
      })
    })
    describe('burn on approval', () => {
      it('only allows approver to approve the burn', async () => {
        const ownerBalancePreBurn = (await instance.balanceOf(owner)).toNumber()
        await instance.startBurn({from: owner})
        await instance.approveBurn({from: owner})
        const ownerBalancePostBurn = (await instance.balanceOf(owner)).toNumber()
        expect(ownerBalancePostBurn).to.eql(ownerBalancePreBurn)
      })
      it('approves the burn and burns the owners balance while reducing the totalSupply', async () => {
        const ownerBalancePreBurn = (await instance.balanceOf(owner)).toNumber()
        expect(ownerBalancePreBurn).to.not.eql(0)
        await instance.startBurn({from: owner})
        await instance.approveBurn({from: approver})
        const ownerBalancePostBurn = (await instance.balanceOf(owner)).toNumber()
        expect(ownerBalancePostBurn).to.eql(0)
        const newTotalSupply = (await instance.getTotalSupply()).toNumber()
        expect(newTotalSupply).to.eql(tokenSupply - ownerBalancePreBurn)
      })
      it('removes the pendingBurn status after a burn is complete', async () => {
        await instance.startBurn({from: owner})
        await instance.approveBurn({from: approver})
        const isBurnPending = await instance.isBurnPending()
        expect(isBurnPending).to.eql(false)
      })
      it('does not do anything if burn is not pending', async () => {
        const isBurnPending = await instance.isBurnPending()
        expect(isBurnPending).to.eql(false)

        const ownerBalancePreBurn = (await instance.balanceOf(owner)).toNumber()
        expect(ownerBalancePreBurn).to.not.eql(0)
        await instance.approveBurn({from: approver})

        const ownerBalancePostBurn = (await instance.balanceOf(owner)).toNumber()
        expect(ownerBalancePostBurn).to.eql(ownerBalancePreBurn)
        const newTotalSupply = (await instance.getTotalSupply()).toNumber()
        expect(newTotalSupply).to.eql(tokenSupply)
      })
    })
  })

  describe('isTransferable changes', () => {
    it('initially is not transferable', async () => {
      const isTransferable = await instance.getTransferableState()
      expect(isTransferable).to.eql(false)
    })

    it('correctly creates a toggle request', async () => {
      await instance.setTransferable(true, {from: owner})
      const isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(true)
      const isTransferable = await instance.getTransferableState()
      expect(isTransferable).to.eql(false)
    })

    it('will not create a toggle request for non-owner', async () => {
      await instance.setTransferable(true, {from: investorOne})
      const isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(false)
    })

    it('will not create a toggle request for no state change', async () => {
      await instance.setTransferable(false, {from: owner})
      const isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(false)
    })

    it('approves a toggle request', async () => {
      await instance.setTransferable(true, {from: owner})
      await instance.approveTransferableToggle({from: approver})
      const isPending = await instance.isToggleTransferablePending()
      const isTransferable = await instance.getTransferableState()
      expect(isPending).to.eql(false)
      expect(isTransferable).to.eql(true)
    })

    it('only approver can approve change', async () => {
      await instance.setTransferable(true, {from: owner})
      await instance.approveTransferableToggle({from: owner})
      const isPending = await instance.isToggleTransferablePending()
      const isTransferable = await instance.getTransferableState()
      expect(isPending).to.eql(true)
      expect(isTransferable).to.eql(false)
    })

    it('only toggles when a toggle is requested', async () => {
      await instance.approveTransferableToggle({from: approver})
      const isPending = await instance.isToggleTransferablePending()
      const isTransferable = await instance.getTransferableState()
      expect(isPending).to.eql(false)
      expect(isTransferable).to.eql(false)
    })

    it('can toggle back to not transferable after', async () => {
      let isPending, isTransferable
      await instance.setTransferable(true, {from: owner})
      await instance.approveTransferableToggle({from: approver})
      isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(false)
      isTransferable = await instance.getTransferableState()
      expect(isTransferable).to.eql(true)

      await instance.setTransferable(true, {from: owner})
      isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(false)
      await instance.approveTransferableToggle({from: approver})
      isTransferable = await instance.getTransferableState()
      expect(isTransferable).to.eql(true)

      await instance.setTransferable(false, {from: owner})
      isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(true)
      await instance.approveTransferableToggle({from: approver})
      isTransferable = await instance.getTransferableState()
      expect(isTransferable).to.eql(false)
      isPending = await instance.isToggleTransferablePending()
      expect(isPending).to.eql(false)
    })
  })

  describe('setting price', () => {
    it('full price change test', async () => {
      const currentPrice = (await instance.getPrice()).toNumber()
      /* Approval before any request doesn't change anything */
      await instance.approvePriceChange({from: approver})
      const preRequestApprovalPrice = (await instance.getPrice()).toNumber()
      expect(preRequestApprovalPrice).to.eql(currentPrice)

      /* Only owner can request a price change */
      const priceChange = 0.5 * 1e18
      await instance.requestPriceChange(priceChange, {from: approver})
      const approverRequestedPriceChange = (await instance.getPendingPriceChange()).toNumber()
      expect(approverRequestedPriceChange).to.eql(0)
      const afterApproverRequestPrice = (await instance.getPrice()).toNumber()
      expect(afterApproverRequestPrice).to.eql(currentPrice)

      await instance.requestPriceChange(priceChange, {from: owner})
      const requestedPriceChange = (await instance.getPendingPriceChange()).toNumber()
      expect(requestedPriceChange).to.eql(priceChange)
      const afterRequestPrice = (await instance.getPrice()).toNumber()
      expect(afterRequestPrice).to.eql(currentPrice)

      /* Second price request overwrites the first one */
      const secondPriceChange = 1 * 1e18
      await instance.requestPriceChange(secondPriceChange, {from: owner})
      const secondRequestedPriceChange = (await instance.getPendingPriceChange()).toNumber()
      expect(secondRequestedPriceChange).to.eql(secondPriceChange)
      const afterSecondRequestPrice = (await instance.getPrice()).toNumber()
      expect(afterSecondRequestPrice).to.eql(currentPrice)

      /* Owner can't approve */
      await instance.approvePriceChange({from: owner})
      const postOwnerApprovalRequestPrice = (await instance.getPendingPriceChange()).toNumber()
      expect(postOwnerApprovalRequestPrice).to.eql(secondPriceChange)
      const postOwnerApprovalPrice = (await instance.getPrice()).toNumber()
      expect(postOwnerApprovalPrice).to.eql(currentPrice)

      /* Only approver can approve */
      await instance.approvePriceChange({from: investorOne})
      const postInvestorApprovalRequestPrice = (await instance.getPendingPriceChange()).toNumber()
      expect(postInvestorApprovalRequestPrice).to.eql(secondPriceChange)
      const postInvestorApprovalPrice = (await instance.getPrice()).toNumber()
      expect(postInvestorApprovalPrice).to.eql(currentPrice)

      /* Approver approves and price changes */
      await instance.approvePriceChange({from: approver})
      const postApprovalRequestPrice = (await instance.getPendingPriceChange()).toNumber()
      expect(postApprovalRequestPrice).to.eql(0)
      const postApprovalPrice = (await instance.getPrice()).toNumber()
      expect(postApprovalPrice).to.eql(secondPriceChange)

      await instance.approvePriceChange({from: approver})
      const secondApprovalPrice = (await instance.getPrice()).toNumber()
      expect(secondApprovalPrice).to.eql(postApprovalPrice)
    })
  })

  describe('trust transfers are multisig', () => {
    it('does not allow trust account to make normal transfers', async () => {
      await approveTransferToAddress(trustAccount, 500)
      const trustBalance = (await instance.balanceOf(trustAccount)).toNumber()
      expect(trustBalance).to.eql(500)

      await instance.transfer(investorOne, 250, {from: trustAccount})
      const newTrustBalance = (await instance.balanceOf(trustAccount)).toNumber()
      expect(newTrustBalance).to.eql(500)
      const newInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(newInvestorBalance).to.eql(0)
    })

    it('sets a transfer from the trust account to be approved', async () => {
      await approveTransferToAddress(trustAccount, 500)
      await instance.trustTransfer(investorOne, 250, {from: trustAccount})

      const preApprovalTrustBalance = (await instance.balanceOf(trustAccount)).toNumber()
      expect(preApprovalTrustBalance).to.eql(500)
      const preApprovalInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(preApprovalInvestorBalance).to.eql(0)

      /* Since a transfer has already occurred */
      const transfer = (await instance.getTransfers())[1]
      await instance.approveTransfer(transfer, {from: approver})

      const postApprovalTrustBalance = (await instance.balanceOf(trustAccount)).toNumber()
      expect(postApprovalTrustBalance).to.eql(250)
      const postApprovalInvestorBalance = (await instance.balanceOf(investorOne)).toNumber()
      expect(postApprovalInvestorBalance).to.eql(250)
    })
  })
})
