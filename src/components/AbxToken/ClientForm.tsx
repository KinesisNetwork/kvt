import React from 'react'

import { Wallet } from './Wallet.jsx'
import { convertEtherToWei, convertWeiToEther } from '../../helpers/ethConversions'
export class ClientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      costInWei: 0,
      costInEther: 0,
      desiredQuantity: 0,
      errorMessage: '',
      warningMessage: '',
      targetAddress: '',
    }
  }

  async componentWillMount () {
    const costInWei = (await this.props.abxTokenInstance.getPrice()).toNumber()
    const costInEther = convertWeiToEther(costInWei)
    this.setState({costInWei, costInEther})
  }

  async purchase() {
    try {
      await this.props.abxTokenInstance.buyToken(this.state.desiredQuantity, {value: this.state.costInWei * this.state.desiredQuantity, from: this.props.address})
      this.setState({successMessage: `
        Purchase successful. It will take >10 minutes for the balance change to reflect
        You can inspect your address (${this.props.address}) at https://etherscan.io/
      `})
    } catch (e) {
      this.setState({errorMessage: e.message})
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
        <Wallet {...this.props} />
        <div className='row'>
          <div className='col-sm-6 col-sm-push-3 col-md-4 col-md-push-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Purchase ABXT</h3>
              </div>
              <div className='panel-body'>
                <p><strong>Cost Per ABXT (ETH)</strong>: {this.state.costInEther}</p>
                <p><strong>Cost</strong>: {this.state.costInEther * this.state.desiredQuantity}</p>
                <form onSubmit={(ev) => this.handleSubmit(ev)}>
                  <input type='number' className='form-control' value={this.state.desiredQuantity} onChange={(ev) => this.handleQuantityChange(ev)} placeholder='Address'/>
                  <input className='btn btn-primary' type='submit' value='Purchase' />
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
