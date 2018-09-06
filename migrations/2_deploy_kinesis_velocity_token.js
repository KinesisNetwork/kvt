const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(KinesisVelocityToken)
}
