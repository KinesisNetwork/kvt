import * as React from 'react'

import { Wallet } from './Wallet'
import { Spinner } from './Spinner'
import { convertEtherToWei, convertWeiToEther } from '../../helpers/ethConversions'
export class ClientForm extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      costInWei: 0,
      costInEther: 0,
      desiredQuantity: 0,
      errorMessage: '',
      warningMessage: '',
      targetAddress: '',
      loading: false
    }
  }

  async componentWillMount () {
    const costInWei = (await this.props.abxTokenInstance.getPrice()).toNumber()
    const costInEther = convertWeiToEther(costInWei)
    this.setState({costInWei, costInEther})
  }

  async purchase() {
    try {
      this.setState({loading: true})

      await this.props.abxTokenInstance.buyToken(this.state.desiredQuantity, {value: this.state.costInWei * this.state.desiredQuantity, from: this.props.address})

      this.setState({
        successMessage: `
          Purchase successful. It will take >10 minutes for the balance change to reflect
          You can inspect your address (${this.props.address}) at https://etherscan.io/
        `,
        loading: false
      })
    } catch (e) {
      this.setState({errorMessage: e.message, loading: false})
    }
  }

  handleQuantityChange(event) {
    this.setState({desiredQuantity: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({warningMessage: ''})
    this.setState({successMessage: ''})
    this.setState({errorMessage: ''})

    if (!this.state.desiredQuantity) {
      this.setState({warningMessage: 'Quantity must be greater than 0'})
      return
    }

    this.purchase()
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-6'>
            <Wallet {...this.props} />
          </div>
          <div className='col-sm-6'>
            <h3>Purchase ABXT</h3>
            <form onSubmit={(ev) => this.handleSubmit(ev)}>
              <label style={{marginTop: '10px'}}>Cost Per ABXT (ETH)</label>
              <input type='text' className='form-control' value={this.state.costInEther} style={{backgroundColor: '#555555'}} disabled/>
              <label style={{marginTop: '10px'}}>Purchase Quantity</label>
              <input type='number' className='form-control' value={this.state.desiredQuantity} onChange={(ev) => this.handleQuantityChange(ev)} placeholder='Address'/>
              <label style={{marginTop: '10px'}}>Total Cost (ETH)</label>
              <input type='text' className='form-control' value={this.state.costInEther * this.state.desiredQuantity} style={{backgroundColor: '#555555'}} disabled/>
              <input className='btn btn-primary' type='submit' value='Purchase' style={{marginTop: '10px'}} />
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
      </div>
    )
  }
}
