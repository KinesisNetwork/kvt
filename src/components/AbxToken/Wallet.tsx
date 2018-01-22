import React from 'react'
import { convertWeiToEther } from '../../helpers/ethConversions'

export class Wallet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      abxt: 0,
      eth: 0,
      abxtTotalSupply: 0
    }
  }

  async componentWillMount() {
    if (this.props.abxTokenInstance) {
      const abxt = await this.props.abxTokenInstance.balanceOf(this.props.address)
      const abxtTotalSupply = await this.props.abxTokenInstance.getTotalSupply()

      this.props.web3.eth.getBalance(this.props.address, (err, eth) => {
        if (err) {
          console.log(err)
          return
        }

        this.setState({abxt: abxt.toNumber(), abxtTotalSupply: abxtTotalSupply.toNumber(), eth: convertWeiToEther(eth.toNumber())})
      })
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-6 col-sm-push-3 col-md-4 col-md-push-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>My Wallet</h3>
            </div>
            <div className='panel-body'>
              <h4>Balance</h4>
              <p><strong>ETH</strong>: {this.state.eth}</p>
              <p><strong>ABXT</strong>: {this.state.abxt}</p>
              <p><strong>ABXT Total Supply</strong>: {this.state.abxtTotalSupply}</p>
              <p><strong>ABXT As A Percentage Of Total Supply</strong>: {(this.state.abxt / this.state.abxtTotalSupply * 100).toFixed(2)} %</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
