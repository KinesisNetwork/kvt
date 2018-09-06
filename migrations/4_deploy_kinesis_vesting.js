const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')
const KVTVest = artifacts.require('TokenVesting')

module.exports = async function(deployer, network, accounts) {
  // Get the address of the newly deployed contract
  const kvtAddress = KinesisVelocityToken.address

  // Start time in unix time (now)
  const startTime = Math.floor(Date.now() / 1000) + 120

  let oneYearInSeconds
  let twoYearsInSeconds

  if (network === 'development' || network === 'kovan' || network === 'ropsten') {
    // Cliff (5 minutes)
    oneYearInSeconds = 60 * 5
    // Duration (10 minutes)
    twoYearsInSeconds = oneYearInSeconds * 2
  } else {
    // Cliff
    oneYearInSeconds = 60 * 60 * 24 * 366
    // Duration
    twoYearsInSeconds = oneYearInSeconds * 2
  }

  // Be able to prematurely end vest.
  const endVest = true

  // TODO: Determine the actual beneficiary
  await deployer.deploy(KVTVest, accounts[0], startTime, oneYearInSeconds, twoYearsInSeconds, endVest)
}
