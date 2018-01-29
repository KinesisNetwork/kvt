const AbxToken = artifacts.require('AbxToken')
const MultiSigTransfer = artifacts.require('MultiSigTransfer')
const expect = require('chai').expect

contract('AbxToken', function(accounts) {
  // The truffle test framework creates the contract from the first account in
  // the contract array
  const owner = accounts[0]
  const investorOne = accounts[1]
  const investorTwo = accounts[2]
  const approver = accounts[3]
  const revertMessage = 'VM Exception while processing transaction: revert'
	let instance
  const tokenSupply = 1000000

  const approveTransferToAddress = async (toAddress, quantity) => {
    await instance.adminTransfer(toAddress, quantity, {from: owner})
    const transferList = await instance.getTransfers()
    const transfer = transferList[0]
    await instance.approveTransfer(transfer, {from: approver})
  }

	beforeEach(async () => {
    instance = await AbxToken.new()
    await instance.setApprover(approver, {from: owner})
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

  describe('AbxToken -- Constructor', () => {
    it('correctly sets the total supply to owner on contract initialisation', async () => {
      let newToken = await AbxToken.new()

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
      await instance.makeTransferable({from: owner})
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
      await instance.makeTransferable({from: owner})

      let originalOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let originalInvestorQty = (await instance.balanceOf(investorOne)).toNumber()

      await instance.transfer(investorOne, 100, {from: owner})

      let newOwnerQty = (await instance.balanceOf(owner)).toNumber()
      let newInvestorQty = (await instance.balanceOf(investorOne)).toNumber()
      expect(newOwnerQty).to.eql(originalOwnerQty)
      expect(newInvestorQty).to.eql(originalInvestorQty)

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
})
