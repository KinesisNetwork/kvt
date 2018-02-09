import * as React from 'react'
import { Wallet } from './Wallet'
import { Spinner } from './Spinner'
import { Transfers } from './Transfers'
import { convertWeiToEther, convertEtherToWei } from '../../helpers/ethConversions'

export class ApproverForm extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      successMessage: '',
      errorMessage: '',
      warningMessage: '',
      pendingPriceChangeInWei: 0,
      pendingPriceChangeInEth: 0,
      pendingMakeTransferable: false,
      pendingBurn: false,
      loading: false,
      transferPending: false,
      transferable: false
    }
  }

  public async componentDidMount() {
    const pendingBurn = await this.props.kinesisVelocityTokenInstance.isBurnPending()
    const transferPending = await this.props.kinesisVelocityTokenInstance.isToggleTransferablePending()
    const transferable = await this.props.kinesisVelocityTokenInstance.getTransferableState()
    const pendingPriceChangeInWei = (await this.props.kinesisVelocityTokenInstance.getPendingPriceChange()).toNumber()
    const pendingPriceChangeInEth = convertWeiToEther(pendingPriceChangeInWei)
    this.setState({pendingBurn, transferable, transferPending, pendingPriceChangeInWei, pendingPriceChangeInEth})
  }

  public async approveTransferableToggle() {
    try {
      this.emptyBanners()
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.approveTransferableToggle({from: this.props.address})
      this.setState({
        successMessage: `Transferable state updated`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async approvePriceChange() {
    try {
      this.emptyBanners()
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.approvePriceChange({from: this.props.address})
      this.setState({
        successMessage: `KVT price updated`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async endCrowdsale() {
    try {
      this.emptyBanners()
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.approveBurn({from: this.props.address})
      this.setState({
        successMessage: `KVT crowdsale complete`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  public async cancelBurn() {
    try {
      this.emptyBanners()
      this.setState({loading: true})

      await this.props.kinesisVelocityTokenInstance.cancelBurn({from: this.props.address})
      this.setState({
        successMessage: `Burn cancelled`,
        loading: false,
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
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
            <h3>Make KVT Transferable</h3>
            <p style={{marginTop: '10px'}}>The KVT is currently <strong>{this.state.transferable ? 'transferable' : 'non-transferable'}</strong></p>
            { this.state.transferPending ? (
              <div>
                <p>The owner has requested updating the transferable status to <strong>{this.state.transferable ? 'non-transferable' : 'transferable'}</strong></p>
                <button className='btn btn-primary' style={{marginTop: '10px'}} onClick={() => this.approveTransferableToggle()}>Approve</button>
              </div>
            ) : (
              <p>No state change pending</p>
            ) }
          </div>
          <div className='col-sm-3'>
            <h3>End Crowdsale</h3>
            { this.state.pendingBurn ? (
              <div>
                <p style={{marginTop: '10px'}}>Approving this will permanently end the crowdsale. Proceed with caution.</p>
                <button className='btn btn-primary' style={{marginTop: '10px'}} onClick={() => this.endCrowdsale()}>End Crowdsale</button>
                <button className='btn btn-warning' style={{marginTop: '10px'}} onClick={() => this.cancelBurn()}>Cancel Burn</button>
              </div>
            ) : (
              <p style={{marginTop: '10px'}}>The KVT Owner has not yet requested this</p>
            ) }
          </div>
          <div className='col-sm-3'>
            <h3>Approve Price Change</h3>
            { this.state.pendingPriceChangeInWei !== 0 ? (
              <div>
                <p style={{marginTop: '10px'}}>The pending price change is {this.state.pendingPriceChangeInEth} ETH</p>
                <button className='btn btn-primary' style={{marginTop: '10px'}} onClick={() => this.approvePriceChange()}>Approve Price Change</button>
              </div>
            ) : (
              <p style={{marginTop: '10px'}}>The KVT Owner has no price change pending.</p>
            ) }
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
