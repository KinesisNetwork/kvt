import * as React from 'react'
import { convertWeiToEther } from '../../helpers/ethConversions'

export class Wallet extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      kvt: 0,
      eth: 0,
      kvtTotalSupply: 0
    }
  }

  async componentWillMount() {
    if (this.props.kinesisVelocityTokenInstance) {
      const kvt = await this.props.kinesisVelocityTokenInstance.balanceOf(this.props.address)
      const kvtTotalSupply = await this.props.kinesisVelocityTokenInstance.getTotalSupply()

      this.props.web3.eth.getBalance(this.props.address, (err, eth) => {
        if (err) {
          console.log(err)
          return
        }

        this.setState({kvt: kvt.toNumber(), kvtTotalSupply: kvtTotalSupply.toNumber(), eth: convertWeiToEther(eth.toNumber())})
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Wallet</h3>
        <p><strong>ETH</strong>: {this.state.eth}</p>
        <p><strong>KVT</strong>: {this.state.kvt}</p>
        <p><strong>KVT Total Supply</strong>: {this.state.kvtTotalSupply}</p>
        <p><strong>KVT As A Percentage Of Total Supply</strong>: {(this.state.kvt / this.state.kvtTotalSupply * 100).toFixed(2)} %</p>
      </div>
    )
  }
}
