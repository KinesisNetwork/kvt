const MultiSigTransfer = artifacts.require('MultiSigTransfer')

module.exports = function(deployer) {
  deployer.deploy(MultiSigTransfer)
}
