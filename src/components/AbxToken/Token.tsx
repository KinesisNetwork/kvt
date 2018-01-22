import * as React from 'react'

const TruffleContract = require('truffle-contract')
const Web3 = require('web3')
const abxTokenDefinition = require('../../../build/contracts/AbxToken.json')

import {NoWeb3} from './NoWeb3'
import {NoAddress} from './NoAddress'
import {AdminForm} from './AdminForm'
import {ClientForm} from './ClientForm'

export class Token extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      web3Provider: null,
      web3: null,
      abxTokenInstance: null,
      noWeb3: false,
      noAddress: false,
      address: null,
      isAdmin: false
    }
  }

  public componentWillMount() {
    const w: any = window
    if (typeof w.web3 !== 'undefined') {
      const web3 = new Web3(w.web3.currentProvider)
      w.web3 = web3
      this.setState({web3Provider: w.web3.currentProvider, web3})

      web3.eth.getAccounts(async (error, accounts) => {
        if (error) {
          console.log(error);
        }

        const account = accounts[0]
        if (!account) {
          this.setState({noAddress: true})
          return
        }

        const abxToken = TruffleContract(abxTokenDefinition)
        abxToken.setProvider(this.state.web3Provider)

        const tokenInstance = await abxToken.deployed()
        const isAdmin = await tokenInstance.isOwner({from: account})

        this.setState({isAdmin, abxTokenInstance: tokenInstance, address: account})
      })
    } else {
      this.setState({noWeb3: true})
    }
  }

  public render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-8 col-sm-push-2'>
              <h1 className='text-center'>ABX Token</h1>
              <hr/>
              <br/>
            </div>
          </div>
          <div className='row'>
            {this.state.noWeb3 && <NoWeb3/>}
            {this.state.noAddress && <NoAddress/>}
            {this.state.isAdmin && <AdminForm abxTokenInstance={this.state.abxTokenInstance} address={this.state.address} web3={this.state.web3} />}
            {!this.state.isAdmin && this.state.address && <ClientForm abxTokenInstance={this.state.abxTokenInstance} address={this.state.address} web3={this.state.web3} />}
          </div>
        </div>
      </div>
    )
  }
}
