const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')
const MultiSigTransfer = artifacts.require('MultiSigTransfer')
const KVTCrowdsale = artifacts.require('KVTCrowdsale')
const expect = require('chai').expect

contract('KVTCrowdsale', function(accounts) {
  const owner = accounts[0]
  const investorOne = accounts[1]
  const investorTwo = accounts[2]
  const approverOne = accounts[3]
  const approverTwo = accounts[4]
  const revertMessage = 'VM Exception while processing transaction: revert'
  let kvtInstance
  let crowdsaleInstance
  const initSaleRate = 2000000000000000000

  const tokenSupply = 300000

  const approveTransferToAddress = async (toAddress, quantity) => {
    await kvtInstance.adminTransfer(toAddress, quantity, {
      from: approverOne
    })
    const transferList = await kvtInstance.getTransfers()
    const transfer = transferList[0]
    await kvtInstance.approveTransfer(transfer, {
      from: approverTwo
    })
  }

  beforeEach(async () => {
    kvtInstance = await KinesisVelocityToken.new()
    await kvtInstance.setAdmin(approverOne, {
      from: owner
    })
    await kvtInstance.setAdmin(approverTwo, {
      from: owner
    })

    crowdsaleInstance = await KVTCrowdsale.new(initSaleRate, owner, kvtInstance.address)
    await crowdsaleInstance.setAdmin(approverOne, {
      from: owner
    })
    await crowdsaleInstance.setAdmin(approverTwo, {
      from: owner
    })

    await kvtInstance.setCrowdsaleAddress(crowdsaleInstance.address)
  })

  describe('KVTCrowdsale -- Constructor', () => {
    it('correctly sets the rate, payment account and ERC20 token address', async () => {
      const rate = await crowdsaleInstance.rate()
      const wallet = await crowdsaleInstance.wallet()
      const token = await crowdsaleInstance.token()

      expect(rate.toNumber()).to.eql(initSaleRate)
      expect(wallet).to.eql(owner)
      expect(token).to.eql(kvtInstance.address)
    })
  })

  describe('buy Token', () => {
    it('correctly transfers from owner to investor on purchase if they are on the whitelist', async () => {
      // Transfer some tokens from the owner to the crowdsale
      await approveTransferToAddress(crowdsaleInstance.address, 1000)

      await crowdsaleInstance.setPurchaser(investorOne, {
        from: owner
      })

      let originalOwnerQty = (await kvtInstance.balanceOf(owner)).toNumber()
      let originalCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()
      let originalInvestorOneQty = (await kvtInstance.balanceOf(investorOne)).toNumber()

      expect(originalOwnerQty).to.eql(tokenSupply - 1000)
      expect(originalCrowdsaleQty).to.eql(1000)
      expect(originalInvestorOneQty).to.eql(0)

      const originalOwnerBalance = (await web3.eth.getBalance(owner)).toNumber()

      const crowdsaleRate = (await crowdsaleInstance.rate()).toNumber()
      await crowdsaleInstance.buyTokens(investorOne, {
        from: investorOne,
        value: 2 * crowdsaleRate
      })

      let newOwnerQty = (await kvtInstance.balanceOf(owner)).toNumber()
      let newCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()
      let newInvestorOneQty = (await kvtInstance.balanceOf(investorOne)).toNumber()
      const finalOwnerBalance = (await web3.eth.getBalance(owner)).toNumber()

      expect(newOwnerQty).to.eql(originalOwnerQty)
      expect(newCrowdsaleQty).to.eql(originalCrowdsaleQty - 2)
      expect(newInvestorOneQty).to.eql(originalInvestorOneQty + 2)
      expect(finalOwnerBalance).to.eql(2 * crowdsaleRate + originalOwnerBalance)
    })

    it('doest not transfer from owner to investor if the investor is not on the whitelist', async () => {
      const incorrectError = 'Wrong Error'

      try {
        // Transfer some tokens from the owner to the crowdsale
        await approveTransferToAddress(crowdsaleInstance.address, 1000)

        const crowdsaleRate = (await crowdsaleInstance.rate()).toNumber()
        await crowdsaleInstance.buyTokens(investorOne, {
          from: investorOne,
          value: 2 * crowdsaleRate
        })

        throw new Error(incorrectError)
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
      }
    })

    it('allows an investor to transfer straight to the contract', async () => {
      // Transfer some tokens from the owner to the crowdsale
      await approveTransferToAddress(crowdsaleInstance.address, 1000)

      await crowdsaleInstance.setPurchaser(investorOne, {
        from: owner
      })

      let originalOwnerQty = (await kvtInstance.balanceOf(owner)).toNumber()
      let originalCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()
      let originalInvestorOneQty = (await kvtInstance.balanceOf(investorOne)).toNumber()

      expect(originalOwnerQty).to.eql(tokenSupply - 1000)
      expect(originalCrowdsaleQty).to.eql(1000)
      expect(originalInvestorOneQty).to.eql(0)

      const originalOwnerBalance = (await web3.eth.getBalance(owner)).toNumber()

      const crowdsaleRate = (await crowdsaleInstance.rate()).toNumber()
      await web3.eth.sendTransaction({
        to: crowdsaleInstance.address,
        from: investorOne,
        value: 5 * crowdsaleRate
      })

      let newOwnerQty = (await kvtInstance.balanceOf(owner)).toNumber()
      let newCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()
      let newInvestorOneQty = (await kvtInstance.balanceOf(investorOne)).toNumber()
      const finalOwnerBalance = (await web3.eth.getBalance(owner)).toNumber()

      expect(newOwnerQty).to.eql(originalOwnerQty)
      expect(newCrowdsaleQty).to.eql(originalCrowdsaleQty - 5)
      expect(newInvestorOneQty).to.eql(originalInvestorOneQty + 5)
      expect(finalOwnerBalance).to.eql(5 * crowdsaleRate + originalOwnerBalance)
    })
  })

  describe('isAdmin', () => {
    it('returns true for an admin', async function() {
      const isOwner = await crowdsaleInstance.isAdmin(approverOne)
      expect(isOwner).to.eql(true)
    })

    it('returns false for the anyone who is not an admin', async function() {
      const isOwner = await crowdsaleInstance.isAdmin(investorOne)
      expect(isOwner).to.eql(false)
    })
  })

  describe('setting price', () => {
    it('full price change test', async () => {
      const currentPrice = (await crowdsaleInstance.rate()).toNumber()

      /* Approval before any request doesn't change anything */
      try {
        await crowdsaleInstance.approvePriceChange({
          from: approverOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const preRequestApprovalPrice = (await crowdsaleInstance.rate()).toNumber()
        expect(preRequestApprovalPrice).to.eql(currentPrice)
      }

      /* Only owner can request a price change */
      const priceChange = 0.5 * 1e18
      try {
        await crowdsaleInstance.requestPriceChange(priceChange, {
          from: investorOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const approverRequestedPriceChange = (await crowdsaleInstance.pendingPriceChange()).toNumber()
        expect(approverRequestedPriceChange).to.eql(0)
        const afterApproverRequestPrice = (await crowdsaleInstance.rate()).toNumber()
        expect(afterApproverRequestPrice).to.eql(currentPrice)
      }

      await crowdsaleInstance.requestPriceChange(priceChange, {
        from: owner
      })
      const requestedPriceChange = (await crowdsaleInstance.pendingPriceChange()).toNumber()
      expect(requestedPriceChange).to.eql(priceChange)
      const afterRequestPrice = (await crowdsaleInstance.rate()).toNumber()
      expect(afterRequestPrice).to.eql(currentPrice)

      /* Second price request overwrites the first one */
      const secondPriceChange = 1 * 1e18
      await crowdsaleInstance.requestPriceChange(secondPriceChange, {
        from: owner
      })
      const secondRequestedPriceChange = (await crowdsaleInstance.pendingPriceChange()).toNumber()
      expect(secondRequestedPriceChange).to.eql(secondPriceChange)
      const afterSecondRequestPrice = (await crowdsaleInstance.rate()).toNumber()
      expect(afterSecondRequestPrice).to.eql(currentPrice)

      /* Owner can't approve if the created the request */
      try {
        await crowdsaleInstance.approvePriceChange({
          from: owner
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const postOwnerApprovalRequestPrice = (await crowdsaleInstance.pendingPriceChange()).toNumber()
        expect(postOwnerApprovalRequestPrice).to.eql(secondPriceChange)
        const postOwnerApprovalPrice = (await crowdsaleInstance.rate()).toNumber()
        expect(postOwnerApprovalPrice).to.eql(currentPrice)
      }

      /* Only admin can approve */
      try {
        await crowdsaleInstance.approvePriceChange({
          from: investorOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const postInvestorApprovalRequestPrice = (await crowdsaleInstance.pendingPriceChange()).toNumber()
        expect(postInvestorApprovalRequestPrice).to.eql(secondPriceChange)
        const postInvestorApprovalPrice = (await crowdsaleInstance.rate()).toNumber()
        expect(postInvestorApprovalPrice).to.eql(currentPrice)
      }

      /* Admin approves and price changes */
      await crowdsaleInstance.approvePriceChange({
        from: approverOne
      })
      const postApprovalRequestPrice = (await crowdsaleInstance.pendingPriceChange()).toNumber()
      expect(postApprovalRequestPrice).to.eql(0)
      const postApprovalPrice = (await crowdsaleInstance.rate()).toNumber()
      expect(postApprovalPrice).to.eql(secondPriceChange)
    })
  })

  describe('finalising the crowdsale', () => {
    it('full workflow', async () => {
      await approveTransferToAddress(crowdsaleInstance.address, 1000)

      const originalOwnerQty = (await kvtInstance.balanceOf(owner)).toNumber()
      const originalCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()

      /* Approval before any request doesn't change anything */
      try {
        await crowdsaleInstance.approvePriceChange({
          from: approverOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
        const preApprovalCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()
        expect(preApprovalCrowdsaleQty).to.eql(originalCrowdsaleQty)
      }

      /* Only admin can request finalisation */
      try {
        await crowdsaleInstance.requestFinalize({
          from: investorOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
      }

      await crowdsaleInstance.requestFinalize({
        from: owner
      })

      const pendingFinalization = await crowdsaleInstance.pendingFinalization()
      expect(pendingFinalization).to.eql(true)

      /* Owner can't approve if the created the request */
      try {
        await crowdsaleInstance.approveFinalize({
          from: owner
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
      }

      /* Only admin can approve */
      try {
        await crowdsaleInstance.approveFinalize({
          from: investorOne
        })

        throw new Error('wrong error')
      } catch (e) {
        expect(e.message).to.eql(revertMessage)
      }

      /* Admin approves crowdsale ends */
      await crowdsaleInstance.approveFinalize({
        from: approverOne
      })

      const finalOwnerQty = (await kvtInstance.balanceOf(owner)).toNumber()
      const finalCrowdsaleQty = (await kvtInstance.balanceOf(crowdsaleInstance.address)).toNumber()

      expect(finalOwnerQty).to.eql(originalOwnerQty + 1000)
      expect(finalCrowdsaleQty).to.eql(0)
    })
  })
})
