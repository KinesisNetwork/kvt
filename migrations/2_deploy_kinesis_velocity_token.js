const KinesisVelocityToken = artifacts.require('KinesisVelocityToken')

module.exports = function(deployer) {
  deployer.deploy(KinesisVelocityToken)
}
