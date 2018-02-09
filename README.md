# kairos-promo

To dev the repo, run npm start for compilation watches, and sh local_start.sh for docker @ port 9000

# Kinesis Velocity Token Crowdsale

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
