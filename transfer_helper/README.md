# Transfer Helper
Small utility to read off a CSV with format [amount, to] and generate adminTransfers for the Kinesis Velocity Token

This reads the following environment variables:
- OWNER_KEY => contract owner's private key
- CONTRACT_ADDRESS => the deployed KinesisVelocityToken address

Then simply run the command like: `npm start -- [file.csv] ['test'|'prod']`.

**NOTE:** prod still requires the provider information
