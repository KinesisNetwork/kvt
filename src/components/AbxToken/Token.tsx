import * as React from 'react'

const TruffleContract = require('truffle-contract')
const Web3 = require('web3')
const abxTokenDefinition = require('../../../build/contracts/AbxToken.json')

import {NoWeb3} from './NoWeb3'
import {NoAddress} from './NoAddress'
import {AdminForm} from './AdminForm'
import {ApproverForm} from './ApproverForm'
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
      isAdmin: false,
      isApprover: false,
    }
  }

  public componentWillMount() {
    const w: any = window
    if (typeof w.web3 !== 'undefined') {
      const web3 = new Web3(w.web3.currentProvider)
      this.setState({web3Provider: w.web3.currentProvider, web3})
      this.refreshEthState()
    } else {
      this.setState({noWeb3: true})
    }

    setInterval(() => {
      try {
        this.refreshEthState()
      } catch (e) {
        console.log(e)
      }
    }, 2000)
  }

  public refreshEthState () {
    const w: any = window
    w.web3.eth.getAccounts(async (error, accounts) => {
      if (error) {
        console.log(error)
      }

      if (this.state.address !== accounts[0]) {
        const account = accounts[0]
        if (!account) {
          this.setState({noAddress: true})
          return
        }

        const abxToken = TruffleContract(abxTokenDefinition)
        abxToken.setProvider(this.state.web3Provider)

        const tokenInstance = await abxToken.deployed()
        const isAdmin = await tokenInstance.isOwner({from: account})
        const isApprover = await tokenInstance.isApprover({from: account})

        this.setState({isAdmin, isApprover, abxTokenInstance: tokenInstance, address: account})
      }
    })
  }


  public render() {
    return (
      <div className='container'>
        <section className='contact pt-80 pb-50' id='token'>
          <div className='section_title mb-70 text-center'>
            <h2>ABX Token Offering</h2>
            <p>Buy ABX tokens now for some garuntee of future value.</p>
          </div>
          <div className='row'>
            {this.state.noWeb3 && <NoWeb3/>}
            {this.state.noAddress && <NoAddress/>}
            {this.state.isAdmin && <AdminForm abxTokenInstance={this.state.abxTokenInstance} address={this.state.address} web3={this.state.web3} web3Provider={this.state.web3Provider} />}
            {this.state.isApprover && <ApproverForm abxTokenInstance={this.state.abxTokenInstance} address={this.state.address} web3={this.state.web3} web3Provider={this.state.web3Provider} />}
            {!this.state.isAdmin && !this.state.isApprover && this.state.address && <ClientForm abxTokenInstance={this.state.abxTokenInstance} address={this.state.address} web3={this.state.web3} web3Provider={this.state.web3Provider} />}
          </div>
        </section>
      </div>
    )
  }
}
