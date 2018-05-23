import * as path from 'path'
import { Account, Contract } from 'web3/types'
import Web3 from 'web3'
import { EnvironmentVariables, Transfer } from './transfer'

export class Token {
  private contract: Contract
  private web3: Web3
  private account: Account

  constructor(web3: Web3, {privateKey, contractAddress}: EnvironmentVariables) {
    this.web3 = web3
    this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey)
    this.contract = new this.web3.eth.Contract(
      require(path.resolve('../build/contracts/KinesisVelocityToken.json'))['abi'],
      contractAddress,
      {
        from: this.account.address,
      },
    )
  }

  public async validateIsOwner() {
    const result = await this.contract.methods.isOwner().call()
    if (!result) {
      throw new Error('Account is not owner of KinesisVelocityToken')
    }
  }

  public async createTransfers(transfers: Transfer[]) {
    return await transfers.reduce((chain, transfer): Promise<any> => chain.then(() => this.createTransfer(transfer)), Promise.resolve())
  }

  private async createTransfer({to, amount}: Transfer) {
    return this.sendTransaction(this.contract.methods.adminTransfer(to, amount))
  }

  private async sendTransaction(method: any) {
    const transaction = {
      to: this.contract.options.address,
      data: method.encodeABI(),
      gas: await method.estimateGas(),
    }

    const signedTransaction = await this.web3.eth.accounts.signTransaction(transaction, this.account.privateKey) as any
    return this.web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
  }
}
