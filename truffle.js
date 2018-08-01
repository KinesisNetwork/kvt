// Ropsten MetaMask nmonic
const ropstenNmonic = 'obtain wasp medal case display tail fiscal scrap case must eagle lucky'

// https://github.com/trufflesuite/truffle-hdwallet-provider
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(ropstenNmonic, 'https://ropsten.infura.io/'),
      network_id: 3,
      gas: 5900000,
      gasPrice: 2
    }
  }
};
