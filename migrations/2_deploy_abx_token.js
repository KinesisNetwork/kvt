const AbxToken = artifacts.require('AbxToken')

module.exports = function(deployer) {
  deployer.deploy(AbxToken)
}
