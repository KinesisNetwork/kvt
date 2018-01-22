import * as React from 'react'
import { Wallet } from './Wallet'
import { convertWeiToEther, convertEtherToWei } from '../../helpers/ethConversions'

export class AdminForm extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      successMessage: '',
      errorMessage: '',
      warningMessage: '',
      targetAddress: '',
      amount: 0,
      currentSellPriceInWei: 0,
      currentSellPriceInEther: 0,
      newSellPriceInWei: 0,
      newSellPriceInEther: 0
    }
  }

  async componentWillMount () {
    const currentSellPriceInWei = (await this.props.abxTokenInstance.getPrice()).toNumber()
    this.setState({currentSellPriceInWei, currentSellPriceInEther: convertWeiToEther(currentSellPriceInWei)})
  }

  async transferToAddress(address, amount) {
    try {
      await this.props.abxTokenInstance.transfer(address, amount, {from: this.props.address})
      this.setState({successMessage: `
        Transfer successful. It will take >10 minutes for the balance change to reflect
        You can inspect your address (${this.props.address}) at https://etherscan.io/
      `})
    } catch (e) {
      if (e.message === `new BigNumber() not a number: ${address}`) {
        this.setState({errorMessage: 'Invalid target address'})
      } else {
        this.setState({errorMessage: e.message})
      }
    }
  }

  async updateSellPrice() {
    try {
      await this.props.abxTokenInstance.setPriceInWei(this.state.newSellPriceInWei, {from: this.props.address})
      this.setState({successMessage: `
        ABXT price update successful. It will take >10 minutes for this to be reflected
      `})
    } catch (e) {
      this.setState({errorMessage: e.message})
    }
  }

  handleAddressChange(event) {
    this.setState({targetAddress: event.target.value})
  }

  handleAmountChange(event) {
    this.setState({amount: event.target.value})
  }

  handlePriceChange(event) {
    this.setState({newSellPriceInEther: event.target.value, newSellPriceInWei: convertEtherToWei(event.target.value)})
  }

  handleAdminTransfer(event) {
    event.preventDefault()
    this.setState({warningMessage: ''})
    this.setState({successMessage: ''})
    this.setState({errorMessage: ''})

    if (!this.state.targetAddress || !this.state.amount) {
      this.setState({warningMessage: 'Both a target address and amount are required'})
      return
    }

    this.transferToAddress(this.state.targetAddress, this.state.amount)
  }

  handlePriceSubmit(event) {
    event.preventDefault()
    this.setState({warningMessage: ''})
    this.setState({successMessage: ''})
    this.setState({errorMessage: ''})

    if (!this.state.newSellPriceInWei) {
      this.setState({warningMessage: 'The sell price must be bigger than 0'})
      return
    }

    this.updateSellPrice()
  }

  render() {
    return (
      <div>
        <Wallet {...this.props} />
        <div className='row'>
          <div className='col-sm-6 col-sm-push-3 col-md-4 col-md-push-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Administrative Transfers</h3>
              </div>
              <div className='panel-body'>
                <form onSubmit={(ev) => this.handleAdminTransfer(ev)}>
                  <input type='text' className='form-control' value={this.state.targetAddress} onChange={(ev) => this.handleAddressChange(ev)} placeholder='Address'/>
                  <input type='number' className='form-control' value={this.state.amount} onChange={(ev) => this.handleAmountChange(ev)} placeholder='Amount'/>
                  <input className='btn btn-primary' type='submit' value='Transfer' />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-sm-push-3 col-md-4 col-md-push-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>ABXT Price</h3>
              </div>
              <div className='panel-body'>
                <h4>Current Price (ETH)</h4>
                <p><strong>{this.state.currentSellPriceInEther}</strong></p>
                <form onSubmit={(ev) => this.handlePriceSubmit(ev)}>
                  <input type='number' className='form-control' value={this.state.newSellPriceInEther} onChange={(ev) => this.handlePriceChange(ev)} placeholder='Sell Price'/>
                  <input className='btn btn-primary' type='submit' value='Update' />
                </form>
              </div>
            </div>
          </div>
        </div>
        {this.state.successMessage && <div className='alert alert-success' role='alert'>{this.state.successMessage}</div>}
        {this.state.errorMessage && <div className='alert alert-danger' role='alert'>{this.state.errorMessage}</div>}
        {this.state.warningMessage && <div className='alert alert-warning' role='alert'>{this.state.warningMessage}</div>}
      </div>
    )
  }
}
