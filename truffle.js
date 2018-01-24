// Ropsten MetaMask nmonic
const ropstenNmonic = 'top chicken finish story close feature comfort vendor regret prize brush raw'

// https://github.com/trufflesuite/truffle-hdwallet-provider
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(ropstenNmonic, 'https://ropsten.infura.io/'),
      network_id: 3,
      gas: 2900000
    }
  }
};
