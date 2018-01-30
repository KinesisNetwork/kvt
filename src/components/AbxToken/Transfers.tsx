import * as React from 'react'
import { Spinner } from './Spinner'
const transferDefinition = require('../../../build/contracts/MultiSigTransfer.json')
const TruffleContract = require('truffle-contract')

export interface Transfer {
  targetAddress: string
  quantity: number
  pending: boolean
  contractAddress: string
}

const wellOverwride = {
  backgroundColor: 'rgb(85, 85, 85)',
  color: 'white',
  border: 0
}

export class Transfers extends React.Component<any, { transfers: Transfer[], isApprover: boolean, loading: boolean }> {
  constructor(props) {
    super(props)
    this.state = { transfers: [], isApprover: false, loading: false }
  }

  public async componentDidMount() {
    await this.loadTransfers()
  }

  public async loadTransfers() {
    const inst = this.props.abxTokenInstance
    if (inst) {
      const isApprover = await inst.isApprover({from: this.props.address})
      const transferAddresses = await inst.getTransfers()
      const transferPromises: Promise<Transfer>[] = transferAddresses.map(async (ta: string): Promise<Transfer> => {
        const w: any = window
        const transferContract = TruffleContract(transferDefinition)
        transferContract.setProvider(this.props.web3Provider)
        const transferInstance = await transferContract.at(ta)

        const [targetAddress, quantity, pending] = await Promise.all([
          transferInstance.getTargetAddress(),
          transferInstance.getQuantity(),
          transferInstance.isPending()
        ])

        return { targetAddress, quantity: quantity.toNumber(), pending, contractAddress: ta } as Transfer
      })

      const transfers = await Promise.all(transferPromises)

      this.setState({transfers, isApprover})

      console.log(isApprover)
    }
  }

  public async approveTransfer(contractAddress: string) {
    try {
      this.setState({loading: true})
      await this.props.abxTokenInstance.approveTransfer(contractAddress, {from: this.props.address})
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
          <strong>ABXT: </strong>{t.quantity}&nbsp;
          { t.pending && !this.state.isApprover && <span className='label label-info'>Pending</span> }
          { t.pending && this.state.isApprover && <button onClick={() => this.approveTransfer(t.contractAddress)} className='btn btn-success'>Approve</button> }
          { !t.pending && <span className='label label-success'>Complete</span> }
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
