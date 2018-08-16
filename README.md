# Kinesis Velocity Token

To facilitate the Kinesis Velocity Token, we have developed 3 contracts:

1. Kinesis Velocity ERC20 Token
2. Whitelisted Crowdsale to facilitate public purchases
3. Vesting contract to timelock founders and partners allocation

## Local Development

1. Install MetaMask
2. Install and start Ganache
3. npm i
4. truffle compile
5. truffle migrate
6. npm run dev
7. Connect MetaMask to Ganache as a custem network
8. Use the Ganache recovery nmonic to get balaces

## Deploy to a network

1. truffle compile
1. Add network to truffle.js (Follow format of other networks)
2. Make sure you have ethereum in the account specified in truffle.js - (If Ropsten use metamask faucet)
3. `truffle migrate --network [network name]`
