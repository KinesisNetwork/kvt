import * as React from 'react'
import { convertWeiToEther } from '../../helpers/ethConversions'

export class Wallet extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      abxt: 0,
      eth: 0,
      abxtTotalSupply: 0
    }
  }

  async componentWillMount() {
    if (this.props.kinesisRevenueTokenInstance) {
      const abxt = await this.props.kinesisRevenueTokenInstance.balanceOf(this.props.address)
      const abxtTotalSupply = await this.props.kinesisRevenueTokenInstance.getTotalSupply()

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
      <div>
        <h3>Wallet</h3>
        <p><strong>ETH</strong>: {this.state.eth}</p>
        <p><strong>KRT</strong>: {this.state.abxt}</p>
        <p><strong>KRT Total Supply</strong>: {this.state.abxtTotalSupply}</p>
        <p><strong>KRT As A Percentage Of Total Supply</strong>: {(this.state.abxt / this.state.abxtTotalSupply * 100).toFixed(2)} %</p>
      </div>
    )
  }
}
