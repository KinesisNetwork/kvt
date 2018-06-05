import * as React from 'react'
import { Wallet } from './Wallet'
import { Spinner } from './Spinner'
import { convertWeiToEther, convertEtherToWei } from '../../helpers/ethConversions'
import { Transfers } from './Transfers'

const zeroAddress = '0x0000000000000000000000000000000000000000'

export class AdminForm extends React.Component<any, any> {
  constructor(props) {
    super(props)

    const baseStates = ['request', 'approve']
    const states = this.props.isOwner ? baseStates.concat(['owner']) : baseStates

    this.state = {
      successMessage: '',
      errorMessage: '',
      warningMessage: '',
      targetAddress: '',
      targetAddressFromTrust: '',
      amount: 0,
      amountToTrust: 0,
      amountFromTrust: 0,
      currentSellPriceInWei: 0,
      currentSellPriceInEther: 0,
      newSellPriceInWei: 0,
      newSellPriceInEther: 0,
      loading: false,
      transferable: false,
      transferPending: false,
      states,
      currentState: states[0],
      fundsInTrust: 0
    }
  }

  public async componentDidMount () {
    const currentSellPriceInWei = (await this.props.kinesisVelocityTokenInstance.getPrice()).toNumber()
    const transferPending = await this.props.kinesisVelocityTokenInstance.isToggleTransferablePending()
    const transferable = await this.props.kinesisVelocityTokenInstance.getTransferableState()
    const fundsInTrust = await this.props.kinesisVelocityTokenInstance.balanceOf(zeroAddress)
    this.setState({
      currentSellPriceInWei,
      currentSellPriceInEther: convertWeiToEther(currentSellPriceInWei),
      transferable,
      transferPending,
      fundsInTrust
    })
  }

  public async makeTransferable(enable: boolean) {
    try {
      this.emptyBanners()
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.setTransferable(enable, {from: this.props.address})
      this.setState({
        successMessage: `Request for transfer status change sent to the approver`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async transferToAddress(address, amount) {
    try {
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.adminTransfer(address, amount, {from: this.props.address})

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

      await this.props.kinesisVelocityTokenInstance.requestPriceChange(this.state.newSellPriceInWei, {from: this.props.address})
      this.setState({
        successMessage: `KVT price update submitted to the approver. Any further submission against this form will overwride the pending request`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async setAdmin() {
    try {
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.setAdmin(this.state.adminAddress, {from: this.props.address})
      this.setState({
        successMessage: `The admin has been added`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async removeAdmin() {
    try {
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.removeAdmin(this.state.adminAddress, {from: this.props.address})
      this.setState({
        successMessage: `The admin has been removed`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  handleAddressChange(event) {
    this.setState({targetAddress: event.target.value})
  }

  handleAddressChangeFromTrust(event) {
    this.setState({targetAddressFromTrust: event.target.value})
  }

  handleAmountChange(event) {
    this.setState({amount: event.target.value})
  }

  handleToTrustAmountChange(event) {
    this.setState({amountToTrust: event.target.value})
  }

  handleFromTrustAmountChange(event) {
    this.setState({amountFromTrust: event.target.value})
  }

  handlePriceChange(event) {
    this.setState({newSellPriceInEther: event.target.value, newSellPriceInWei: convertEtherToWei(event.target.value)})
  }

  handleAdminAddressChange(event) {
    this.setState({adminAddress: event.target.value})
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

  handleTransferToTrust(event) {
    event.preventDefault()
    this.emptyBanners()

    if (!this.state.amountToTrust) {
      this.setState({warningMessage: 'An amount larger than 0 is required to transfer to the trust account'})
      return
    }

    this.transferToAddress(zeroAddress, this.state.amountToTrust)
  }

  async handleTransferFromTrust(event) {
    event.preventDefault()
    this.emptyBanners()

    if (!this.state.amountFromTrust) {
      this.setState({warningMessage: 'An amount larger than 0 is required to transfer from the trust account'})
      return
    }

    try {
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.trustTransfer(this.state.targetAddressFromTrust, this.state.amountFromTrust, {from: this.props.address})

      this.setState({
        successMessage: `Transfer submitted to the approver.`,
        loading: false
      })
    } catch (e) {
      if (e.message === `new BigNumber() not a number: ${this.state.targetAddressFromTrust}`) {
        this.setState({errorMessage: 'Invalid target address', loading: false})
      } else {
        this.setState({errorMessage: e.message, loading: false})
      }
    }
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

  handleAdminSubmit(event, set) {
    event.preventDefault()
    this.emptyBanners()

    if (!this.state.adminAddress) {
      this.setState({warningMessage: 'An admin address is required'})
      return
    }

    if (set) {
      this.setAdmin()
    } else {
      this.removeAdmin()
    }
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
            <div className='row' style={{marginBottom: '25px'}}>
              <div className='col-sm-12'>
                <h3>Administrative Transfers</h3>
                <form onSubmit={(ev) => this.handleAdminTransfer(ev)}>
                  <label style={{marginTop: '10px'}}>Target Address</label>
                  <input type='text' className='form-control' value={this.state.targetAddress} onChange={(ev) => this.handleAddressChange(ev)} placeholder='Address'/>
                  <label style={{marginTop: '10px'}}>Quantity of KVT</label>
                  <input type='number' className='form-control' value={this.state.amount} onChange={(ev) => this.handleAmountChange(ev)} placeholder='Amount'/>
                  <input className='btn btn-primary' type='submit' value='Transfer' style={{marginTop: '10px'}} />
                </form>
              </div>
            </div>
            <div className='row' style={{marginBottom: '25px'}}>
              <div className='col-sm-12'>
                <h3>Administrative Price Update</h3>
                <form onSubmit={(ev) => this.handlePriceSubmit(ev)}>
                  <label style={{marginTop: '10px'}}>Current Price (ETH)</label>
                  <input type='number' className='form-control' value={this.state.currentSellPriceInEther} style={{backgroundColor: '#555555'}} disabled/>
                  <label style={{marginTop: '10px'}}>New Price (ETH)</label>
                  <input type='number' className='form-control' value={this.state.newSellPriceInEther} onChange={(ev) => this.handlePriceChange(ev)} placeholder='Sell Price'/>
                  <input className='btn btn-primary' type='submit' value='Update' style={{marginTop: '10px'}} />
                </form>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3>Transfer to Trust Account</h3>
                <p>Use this to move reserved KVT to the trust account</p>
                <form onSubmit={(ev) => this.handleTransferToTrust(ev)}>
                  <label style={{marginTop: '10px'}}>Quantity of KVT</label>
                  <input type='number' className='form-control' value={this.state.amountToTrust} onChange={(ev) => this.handleToTrustAmountChange(ev)} placeholder='Amount'/>
                  <input className='btn btn-primary' type='submit' value='Transfer' style={{marginTop: '10px'}} />
                </form>
              </div>
            </div> 
            <div className='row'>
              <div className='col-sm-12'>
                <h3>Transfer From Trust Account</h3>
                <p>Use this to move KVT from the trust account to a client</p>
                <form onSubmit={(ev) => this.handleTransferFromTrust(ev)}>
                  <label style={{marginTop: '10px'}}>KVT In Trust</label>
                  <input type='number' className='form-control' value={this.state.fundsInTrust} style={{backgroundColor: '#555555'}} disabled/>
                  <label style={{marginTop: '10px'}}>Target Address From Trust</label>
                  <input type='text' className='form-control' value={this.state.targetAddressFromTrust} onChange={(ev) => this.handleAddressChangeFromTrust(ev)} placeholder='Address'/>
                  <label style={{marginTop: '10px'}}>Quantity of KVT</label>
                  <input type='number' className='form-control' value={this.state.amountFromTrust} onChange={(ev) => this.handleFromTrustAmountChange(ev)} placeholder='Amount'/>
                  <input className='btn btn-primary' type='submit' value='Transfer' style={{marginTop: '10px'}} />
                </form>
              </div>
            </div> 
          </div>
          <div className='col-sm-3'>
            <div className='row' style={{marginBottom: '25px'}}>
              <div className='col-sm-12'>
                <h3>Configure Administrators</h3>
                { !this.props.isOwner ? (
                  <div>
                    <p style={{marginTop: '10px'}}>Only the owner can add and remove administrators</p>
                  </div>
                ) : (
                  <div>
                    <label style={{marginTop: '10px'}}>Admin Address</label>
                    <input type='text' className='form-control' value={this.state.adminAddress} onChange={(ev) => this.handleAdminAddressChange(ev)} placeholder='Address'/>
                    <button className='btn btn-primary' style={{marginTop: '10px', minWidth: '100px', marginRight: '10px'}} onClick={(ev) => this.handleAdminSubmit(ev, true)}>Add</button>
                    <button className='btn btn-primary' style={{marginTop: '10px', minWidth: '100px'}} onClick={(ev) => this.handleAdminSubmit(ev, false)}>Remove</button>
                  </div>
                ) }
              </div>
            </div> 
            <div className='row'>
              <div className='col-sm-12'>
                <h3>Make Transferable</h3>
                <p style={{marginTop: '10px'}}>The KVT is currently <strong>{this.state.transferable ? 'transferable' : 'non-transferable'}</strong></p>
                { this.state.transferPending ? (
                  <p>A transfer state change is currently pending</p>
                ) : (
                  <div>
                    { this.state.transferable ? (
                      <button className='btn btn-primary' style={{marginTop: '10px'}} onClick={() => this.makeTransferable(false)}>Disable</button>
                    ) : (
                      <button className='btn btn-primary' style={{marginTop: '10px'}} onClick={() => this.makeTransferable(true)}>Enable</button>
                    ) }
                  </div>
                ) }
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
          <Transfers {...this.props} isApprover={false} />
        </div>
      </div>
    )
  }
}
