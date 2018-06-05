import * as React from 'react'
import { Spinner } from './Spinner'
const transferDefinition = require('../../../build/contracts/MultiSigTransfer.json')
const TruffleContract = require('truffle-contract')

export interface Transfer {
  targetAddress: string
  quantity: number
  pending: boolean
  denied: boolean
  contractAddress: string
}

const wellOverwride = {
  backgroundColor: 'rgb(85, 85, 85)',
  color: 'white',
  border: 0
}

export class Transfers extends React.Component<any, { transfers: Transfer[], loading: boolean }> {
  constructor(props) {
    super(props)
    this.state = { transfers: [], loading: false }
  }

  public async componentDidMount() {
    await this.loadTransfers()
  }

  public async loadTransfers() {
    const inst = this.props.kinesisVelocityTokenInstance
    if (inst) {
      const transferAddresses = (await inst.getTransfers()).reverse()
      const transferPromises: Promise<Transfer>[] = transferAddresses.map(async (ta: string): Promise<Transfer> => {
        const w: any = window
        const transferContract = TruffleContract(transferDefinition)
        transferContract.setProvider(this.props.web3Provider)
        const transferInstance = await transferContract.at(ta)

        const [targetAddress, quantity, pending, denied] = await Promise.all([
          transferInstance.getTargetAddress(),
          transferInstance.getQuantity(),
          transferInstance.isPending(),
          transferInstance.denied(),
        ])

        return { targetAddress, quantity: quantity.toNumber(), pending, denied, contractAddress: ta } as Transfer
      })

      const transfers = await Promise.all(transferPromises)

      this.setState({transfers})
    }
  }

  public async approveTransfer(contractAddress: string) {
    try {
      this.setState({loading: true})
      await this.props.kinesisVelocityTokenInstance.approveTransfer(contractAddress, {from: this.props.address})
      await this.loadTransfers()
      this.setState({loading: false})
    } catch (e) {
      this.setState({loading: false})
    }
  }

  public async denyTransfer(contractAddress: string) {
    try {
      this.setState({loading: true})
      await this.props.kinesisVelocityTokenInstance.denyTransfer(contractAddress, {from: this.props.address})
      await this.loadTransfers()
      this.setState({loading: false})
    } catch (e) {
      this.setState({loading: false})
    }
  }

  public renderTransfers() {
    return this.state.transfers.map((t: Transfer) => {
      return (
        <div className='well' style={wellOverwride}>
          <strong>Target Address: </strong>{t.targetAddress}&nbsp;
          <strong>KVT: </strong>{t.quantity}&nbsp;
          { t.pending && !t.denied && !this.props.isApprover && <span className='label label-info pull-right'>Pending</span> }
          { t.denied && <span className='label label-danger pull-right'>Denied</span> }
          { t.pending && !t.denied && this.props.isApprover &&
            <div>
              <span onClick={() => this.approveTransfer(t.contractAddress)} className='label label-primary pull-right' style={{cursor: 'pointer'}}>Approve</span>
              <span onClick={() => this.denyTransfer(t.contractAddress)} className='label label-warning pull-right' style={{cursor: 'pointer'}}>Deny</span>
            </div>
          }
          { !t.pending && !t.denied && <span className='label label-success pull-right'>Complete</span> }
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        { this.state.transfers.length > 0 &&
          <div>
            <h3>Transfers</h3>
            { this.renderTransfers() }
            { this.state.loading && <Spinner /> }
          </div>
        }
      </div>
    )
  }
}
