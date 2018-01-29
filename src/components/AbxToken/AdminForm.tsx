import * as React from 'react'
import { Wallet } from './Wallet'
import { Spinner } from './Spinner'
import { convertWeiToEther, convertEtherToWei } from '../../helpers/ethConversions'
import { Transfers } from './Transfers'

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
      newSellPriceInEther: 0,
      loading: false
    }
  }

  public async componentWillMount () {
    const currentSellPriceInWei = (await this.props.abxTokenInstance.getPrice()).toNumber()
    this.setState({currentSellPriceInWei, currentSellPriceInEther: convertWeiToEther(currentSellPriceInWei)})
  }

  public async transferToAddress(address, amount) {
    try {
      this.setState({loading: true})

      console.log(this.props.abxTokenInstance)
      await this.props.abxTokenInstance.adminTransfer(address, amount, {from: this.props.address})

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

  public async updateSellPrice() {
    try {
      this.setState({loading: true})

      await this.props.abxTokenInstance.setPriceInWei(this.state.newSellPriceInWei, {from: this.props.address})
      this.setState({
        successMessage: `ABXT price update submitted to the approver.`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async setApprover() {
    try {
      this.setState({loading: true})

      await this.props.abxTokenInstance.setApprover(this.state.approverAddress, {from: this.props.address})
      this.setState({
        successMessage: `The approver has now been set`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
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

  handleApproverAddressChange(event) {
    this.setState({approverAddress: event.target.value})
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

  handlePriceSubmit(event) {
    event.preventDefault()
    this.emptyBanners()

    if (!this.state.newSellPriceInWei) {
      this.setState({warningMessage: 'The sell price must be bigger than 0'})
      return
    }

    this.updateSellPrice()
  }

  handleApproverSubmit(event) {
    event.preventDefault()
    this.emptyBanners()

    if (!this.state.approverAddress) {
      this.setState({warningMessage: 'An approver address is required'})
      return
    }

    this.setApprover()
  }

  public emptyBanners() {
    this.setState({warningMessage: '', successMessage: '', errorMessage: ''})
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-3'>
            <Wallet {...this.props} />
          </div>
          <div className='col-sm-3'>
            <h3>Administrative Transfers</h3>
            <form onSubmit={(ev) => this.handleAdminTransfer(ev)}>
              <label style={{marginTop: '10px'}}>Target Address</label>
              <input type='text' className='form-control' value={this.state.targetAddress} onChange={(ev) => this.handleAddressChange(ev)} placeholder='Address'/>
              <label style={{marginTop: '10px'}}>Quantity of ABXT</label>
              <input type='number' className='form-control' value={this.state.amount} onChange={(ev) => this.handleAmountChange(ev)} placeholder='Amount'/>
              <input className='btn btn-primary' type='submit' value='Transfer' style={{marginTop: '10px'}} />
            </form>
          </div>
          <div className='col-sm-3'>
            <h3>Administrative Price Update</h3>
            <form onSubmit={(ev) => this.handlePriceSubmit(ev)}>
              <label style={{marginTop: '10px'}}>Current Price (ETH)</label>
              <input type='number' className='form-control' value={this.state.currentSellPriceInEther} style={{backgroundColor: '#555555'}} disabled/>
              <label style={{marginTop: '10px'}}>New Price (ETH)</label>
              <input type='number' className='form-control' value={this.state.newSellPriceInEther} onChange={(ev) => this.handlePriceChange(ev)} placeholder='Sell Price'/>
              <input className='btn btn-primary' type='submit' value='Update' style={{marginTop: '10px'}} />
            </form>
          </div>
          <div className='col-sm-3'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3>Configure Approver</h3>
                <form onSubmit={(ev) => this.handleApproverSubmit(ev)}>
                  <label style={{marginTop: '10px'}}>Approver Address</label>
                  <input type='text' className='form-control' value={this.state.approverAddress} onChange={(ev) => this.handleApproverAddressChange(ev)} placeholder='Address'/>
                  <input className='btn btn-primary' type='submit' value='Set' style={{marginTop: '10px'}} />
                </form>
              </div>
            </div> 
            <div className='row'>
              <div className='col-sm-12'>
                <h3>End Crowdsale</h3>
                <p style={{marginTop: '10px'}}>This action will be approved prior to the remaining tokens being burnt</p>
                <button className='btn btn-primary' style={{marginTop: '10px'}}>End and Burn</button>
              </div>
            </div> 
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
