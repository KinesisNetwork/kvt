import * as React from 'react'
import { Wallet } from './Wallet'
import { Spinner } from './Spinner'
import { Transfers } from './Transfers'

export class TrustForm extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      successMessage: '',
      errorMessage: '',
      warningMessage: '',
      targetAddress: '',
      amount: 0,
      loading: false,
    }
  }

  public async transferToAddress(address, amount) {
    try {
      this.setState({loading: true})

      await this.props.kinesisRevenueTokenInstance.trustTransfer(address, amount, {from: this.props.address})

      this.setState({
        successMessage: `Transfer submitted to the approver.`,
        loading: false
      })
    } catch (e) {
      if (e.message === `new BigNumber() not a number: ${address}`) {
        this.setState({errorMessage: 'Invalid target address', loading: false})
      } else {
        this.setState({errorMessage: e.message, loading: false})
      }
    }
  }

  handleAddressChange(event) {
    this.setState({targetAddress: event.target.value})
  }

  handleAmountChange(event) {
    this.setState({amount: event.target.value})
  }

  handleAdminTransfer(event) {
    event.preventDefault()
    this.emptyBanners()

    if (!this.state.targetAddress || !this.state.amount) {
      this.setState({warningMessage: 'Both a target address and amount are required'})
      return
    }

    this.transferToAddress(this.state.targetAddress, this.state.amount)
  }

  public emptyBanners() {
    this.setState({warningMessage: '', successMessage: '', errorMessage: ''})
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-6'>
            <Wallet {...this.props} />
          </div>
          <div className='col-sm-6'>
            <h3>Administrative Transfers</h3>
            <form onSubmit={(ev) => this.handleAdminTransfer(ev)}>
              <label style={{marginTop: '10px'}}>Target Address</label>
              <input type='text' className='form-control' value={this.state.targetAddress} onChange={(ev) => this.handleAddressChange(ev)} placeholder='Address'/>
              <label style={{marginTop: '10px'}}>Quantity of KRT</label>
              <input type='number' className='form-control' value={this.state.amount} onChange={(ev) => this.handleAmountChange(ev)} placeholder='Amount'/>
              <input className='btn btn-primary' type='submit' value='Transfer' style={{marginTop: '10px'}} />
            </form>
          </div>
        </div>
        <div className='row'>
          {this.state.successMessage && <div className='alert alert-success' role='alert'>{this.state.successMessage}</div>}
          {this.state.errorMessage && <div className='alert alert-danger' role='alert'>{this.state.errorMessage}</div>}
          {this.state.warningMessage && <div className='alert alert-warning' role='alert'>{this.state.warningMessage}</div>}
          {this.state.loading &&
            <Spinner />
          }
        </div>
        <div className='row'>
          <Transfers {...this.props} />
        </div>
      </div>
    )
  }
}
