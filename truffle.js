// Ropsten MetaMask nmonic
const ropstenNmonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'

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
      gas: 3900000
    }
  }
};
