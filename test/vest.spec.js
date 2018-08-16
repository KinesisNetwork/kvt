const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')
const KVTVest = artifacts.require('TokenVesting')
const expect = require('chai').expect

contract('KVTVest', function (accounts) {
  const owner = accounts[0]
  const admin = accounts[1]
  const beneficiary = accounts[2]

  let kvtInstance
  let vestingInstance

  const approveTransferToAddress = async (toAddress, quantity) => {
    await kvtInstance.adminTransfer(toAddress, quantity, {
      from: admin
    })

    const transferList = await kvtInstance.getTransfers()
    const transfer = transferList[0]

    await kvtInstance.approveTransfer(transfer, {
      from: owner
    })

  }

  beforeEach(async () => {
    kvtInstance = await KinesisVelocityToken.new()
    await kvtInstance.setAdmin(admin, {
      from: owner
    })

    // Start in 1 second
    const startTime = Math.floor(Date.now() / 1000) + 1

    // Cliff in 5 seconds
    const cliff = 5

    // Duration
    const duration = 10

    // Be able to prematurely end vest
    const endVest = false

    vestingInstance = await KVTVest.new(beneficiary, startTime, cliff, duration, endVest)

    // We know that our cliff in reality will be 1 year. So we know that
    // by the time we go to actually vest, the token will be transferable
    await kvtInstance.setTransferable(true, {
      from: owner
    })
    await kvtInstance.approveTransferableToggle({
      from: admin
    })
  })

  describe('vesting', () => {
    this.timeout = 20000

    it('releases the tokens to the beneficiary over the expected timeline', async () => {
      let originalBeneficiayQty = (await kvtInstance.balanceOf(beneficiary)).toNumber()
      expect(originalBeneficiayQty).to.eql(0)

      await approveTransferToAddress(vestingInstance.address, 1000)

      await new Promise(res => setTimeout(res, 8000))
      await vestingInstance.release(kvtInstance.address)

      let midBeneficiayQty = (await kvtInstance.balanceOf(beneficiary)).toNumber()
      expect(midBeneficiayQty > 0).to.eql(true)
      expect(midBeneficiayQty < 1000).to.eql(true)

      await new Promise(res => setTimeout(res, 6000))
      await vestingInstance.release(kvtInstance.address)

      let finalBeneficiayQty = (await kvtInstance.balanceOf(beneficiary)).toNumber()
      expect(finalBeneficiayQty).to.eql(1000)
    })
  })
})
