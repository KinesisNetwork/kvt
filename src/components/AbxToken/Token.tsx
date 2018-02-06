import * as React from 'react'

const TruffleContract = require('truffle-contract')
const Web3 = require('web3')
const abxTokenDefinition = require('../../../build/contracts/AbxToken.json')

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
      abxTokenInstance: null,
      noWeb3: false,
      noAddress: false,
      address: null,
      isAdmin: false,
      isApprover: false,
      isTrust: false,
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

        const abxToken = TruffleContract(abxTokenDefinition)
        abxToken.setProvider(this.state.web3Provider)

        const tokenInstance = await abxToken.deployed()
        const isAdmin = await tokenInstance.isOwner({from: account})
        const isApprover = await tokenInstance.isApprover({from: account})
        const isTrust = await tokenInstance.isTrustAccount({from: account})

        this.setState({isAdmin, isApprover, isTrust, abxTokenInstance: tokenInstance, address: account})
      }
    })
  }


  public render() {
    return (
      <div>
        <section className='video' id='token'>
          <div className='container'>
            <div className='section_title pt-80 mb-70 text-center'>
              <h2>Kinesis Revenue Token</h2>
              <p>Coming Soon...</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
