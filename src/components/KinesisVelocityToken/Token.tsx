import * as React from 'react'

const TruffleContract = require('truffle-contract')
const Web3 = require('web3')
const kinesisVelocityTokenDefinition = require('../../../build/contracts/KinesisVelocityToken.json')

import {NoWeb3} from './NoWeb3'
import {NoAddress} from './NoAddress'
import {AdminForm} from './AdminForm'
import {ApproverForm} from './ApproverForm'
import {TrustForm} from './TrustForm'
import {ClientForm} from './ClientForm'

export class Token extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      web3Provider: null,
      web3: null,
      kinesisVelocityTokenInstance: null,
      noWeb3: false,
      noAddress: false,
      address: null,
      isAdmin: false,
      isOwner: false,
      action: 'request'
    }
  }

  public componentDidMount() {
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

        const kinesisVelocityToken = TruffleContract(kinesisVelocityTokenDefinition)
        kinesisVelocityToken.setProvider(this.state.web3Provider)

        const tokenInstance = await kinesisVelocityToken.deployed()
        const isOwner = await tokenInstance.isOwner({from: account})
        const isAdmin = await tokenInstance.isAdmin({from: account})

        this.setState({isAdmin, isOwner, kinesisVelocityTokenInstance: tokenInstance, address: account})
      }
    })
  }

  public render() {
    return (
      <div>
        <section className='ico' id='token'>
          <div className='container'>
            <div className='section_title pt-80 mb-70 text-center'>
              <h2>KVT Token Offering</h2>
              <p>Purchase Kinesis Velocity Token</p>
            </div>
            <div className='row'>
              {this.state.noWeb3 && <NoWeb3 />}
              {this.state.noAddress && <NoAddress />}
              {
                this.state.isAdmin &&
                  <div className='form-group'>
                    <label>Administrative Action</label>
                    <select className='form-control' onChange={(ev) => this.setState({action: ev.target.value})}>
                      <option value='request'>Request</option>
                      <option value='approve'>Approve</option>
                    </select>
                  </div>
              }
              {
                this.state.isAdmin && this.state.action === 'request' &&
                  <AdminForm
                    kinesisVelocityTokenInstance={this.state.kinesisVelocityTokenInstance}
                    address={this.state.address}
                    isOwner={this.state.isOwner}
                    web3={this.state.web3}
                    web3Provider={this.state.web3Provider}
                  />
              }
              {
                this.state.isAdmin && this.state.action === 'approve' &&
                  <ApproverForm
                    kinesisVelocityTokenInstance={this.state.kinesisVelocityTokenInstance}
                    address={this.state.address}
                    isOwner={this.state.isOwner}
                    web3={this.state.web3}
                    web3Provider={this.state.web3Provider}
                  />
              }
              {
                !this.state.isAdmin && this.state.address &&
                  <ClientForm
                    kinesisVelocityTokenInstance={this.state.kinesisVelocityTokenInstance}
                    address={this.state.address}
                    web3={this.state.web3}
                    web3Provider={this.state.web3Provider}
                  />
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}
