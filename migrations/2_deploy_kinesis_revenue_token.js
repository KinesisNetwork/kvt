const KinesisRevenueToken = artifacts.require('KinesisRevenueToken')

module.exports = function(deployer) {
  deployer.deploy(KinesisRevenueToken)
}
