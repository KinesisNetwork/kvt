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
      pendingPriceChange: 0,
      pendingMakeTransferable: false,
      pendingBurn: false,
      loading: false
    }
  }

  public async componentDidMount() {
    const pendingBurn = await this.props.abxTokenInstance.isBurnPending()
    this.setState({pendingBurn})
  }

  public async endCrowdsale() {
    try {
      this.emptyBanners()
      this.setState({loading: true})

      await this.props.abxTokenInstance.approveBurn({from: this.props.address})
      this.setState({
        successMessage: `ABXT crowdsale complete`,
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

      await this.props.abxTokenInstance.cancelBurn({from: this.props.address})
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
            <h3>Make ABXT Transferable</h3>
            { this.state.pendingMakeTransferable ? (
              <div>
                <p style={{marginTop: '10px'}}>This allows holders of ABXT to transfer them to each other. Proceed with caution.</p>
                <button className='btn btn-primary' style={{marginTop: '10px'}}>Enable</button>
              </div>
            ) : (
              <p style={{marginTop: '10px'}}>The ABXT Owner has not yet requested this.</p>
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
              <p style={{marginTop: '10px'}}>The ABXT Owner has not yet requested this</p>
            ) }
          </div>
          <div className='col-sm-3'>
            <h3>Approve Price Change</h3>
            { this.state.pendingPriceChange !== 0 ? (
              <div>
                <p style={{marginTop: '10px'}}>The pending price change is {this.state.pendingPriceChange}</p>
                <button className='btn btn-primary' style={{marginTop: '10px'}}>End Crowdsale</button>
              </div>
            ) : (
              <p style={{marginTop: '10px'}}>The ABXT Owner has no price change pending.</p>
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
