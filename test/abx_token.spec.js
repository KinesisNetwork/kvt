const AbxToken = artifacts.require('AbxToken')
const expect = require('chai').expect

contract('AbxToken', function(accounts) {
  // The truffle test framework creates the contract from the first account in
  // the contract array
  const owner = accounts[0]
  const investerOne = accounts[1]
  const investerTwo = accounts[2]
  const revertMessage = 'VM Exception while processing transaction: revert'
	let instance
  const tokenSupply = 1000000

	beforeEach(async () => {
    console.log('hello')
		instance = await AbxToken.new()
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
      let originalInvesterOneQty = await instance.balanceOf(investerOne)
      expect(originalOwnerQty.toNumber()).to.eql(tokenSupply)
      expect(originalInvesterOneQty.toNumber()).to.eql(0)

      await instance.transfer(investerOne, 100, {from: owner})

      let newOwnerQty = await instance.balanceOf(owner)
      let newInvesterOneQty = await instance.balanceOf(investerOne)
      expect(newOwnerQty.toNumber()).to.eql(tokenSupply - 100)
      expect(newInvesterOneQty.toNumber()).to.eql(100)
    })

    it('fails to transfer from investor1 to investor2 if contract is not transferable', async () => {
      await instance.transfer(investerOne, 100, {from: owner})
      let originalInvesterOneQty = await instance.balanceOf(investerOne)
      let originalInvesterTwoQty = await instance.balanceOf(investerTwo)
      expect(originalInvesterOneQty.toNumber()).to.eql(100)
      expect(originalInvesterTwoQty.toNumber()).to.eql(0)

      await instance.transfer(investerTwo, 50, {from: investerOne})
        .then(() => {
          throw new Error('Error should have thrown')
        }, () => {})

      let newInvesterOneQty = await instance.balanceOf(investerOne)
      let newInvesterTwoQty = await instance.balanceOf(investerTwo)
      expect(newInvesterOneQty.toNumber()).to.eql(100)
      expect(newInvesterTwoQty.toNumber()).to.eql(0)
    })

    it('transfers from investor1 to investor2 if contract is transferable', async () => {
      await instance.makeTransferable({from: owner})
      await instance.transfer(investerOne, 100, {from: owner})
      let originalInvesterOneQty = await instance.balanceOf(investerOne)
      let originalInvesterTwoQty = await instance.balanceOf(investerTwo)
      expect(originalInvesterOneQty.toNumber()).to.eql(100)
      expect(originalInvesterTwoQty.toNumber()).to.eql(0)

      await instance.transfer(investerTwo, 50, {from: investerOne})

      let newInvesterOneQty = await instance.balanceOf(investerOne)
      let newInvesterTwoQty = await instance.balanceOf(investerTwo)
      expect(newInvesterOneQty.toNumber()).to.eql(50)
      expect(newInvesterTwoQty.toNumber()).to.eql(50)
    })
  })

  describe.skip('buy Token', () => {
    it('correctly transfers from owner to investor on purchase', async () => {
      let originalOwnerQty = await instance.balanceOf(owner)
      let originalInvesterOneQty = await instance.balanceOf(investerOne)
      expect(originalOwnerQty.toNumber()).to.eql(tokenSupply)
      expect(originalInvesterOneQty.toNumber()).to.eql(0)

      await instance.transfer(investerOne, 100, {from: owner})

      let newOwnerQty = await instance.balanceOf(owner)
      let newInvesterOneQty = await instance.balanceOf(investerOne)
      expect(newOwnerQty.toNumber()).to.eql(tokenSupply - 100)
      expect(newInvesterOneQty.toNumber()).to.eql(100)
    })
  })

  describe('isOwner', () => {
    it('returns true for the owner', async function () {
      const isOwner = await instance.isOwner({from: owner})
			expect(isOwner).to.eql(true)
    })

    it('returns false for the anyone who is not the owner', async function () {
      const isOwner = await instance.isOwner({from: investerOne})
			expect(isOwner).to.eql(false)
    })
  })
})

