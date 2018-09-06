const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')
const KVTCrowdsale = artifacts.require('KVTCrowdsale')

module.exports = async function(deployer, network, accounts) {
  // Get the address of the newly deployed contract
  const kvtAddress = KinesisVelocityToken.address

  // Deploy the crowdsale contract, with an initial price of 2 ETH
  await deployer.deploy(KVTCrowdsale, 2000000000000000000, accounts[0], kvtAddress)
}
