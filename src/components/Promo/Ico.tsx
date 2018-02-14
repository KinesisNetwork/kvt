import * as React from 'react'
import { DisplayMore } from '../DisplayMore';

export class Ico extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='video ptb-100 bg-off' id='ico'>
          <div className='container'>
          <div className='row is-table-row'>
              <div className='col-sm-6'>
                <div className='section_title mb-50 text-left'>
                  <h2>Kinesis VISA Card</h2>
                      <p>The Kinesis suite of currencies have been designed for use in the real world, by everyday people. It may sound ambitious, but we believe the Kinesis suit of currencies will become a common global medium of exchange. For this to occur, there must be an easy and efficient way to utilize this medium of exchange. The Kinesis VISA card will enable those who holding Kinesis to spend this precious metal backed currency with ease.</p>
                  <DisplayMore style={{}}>
                    <p>Kinesis holders may also exchange Kinesis for other Fiat currency at will. Kinesis is taking digital currency and making it accessible to the common man. Couple this with the historically proven benefits of gold as a store of value and now add a yield, and you have a game changing digital currency available to the masses.</p>
                  </DisplayMore>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight'>
                <div className='embed-responsive embed-responsive-16by9'>
                  <img src='images/website-assets/CreditCard.png' />
                </div>
              </div>
            </div>
            <div className='row is-table-row'>
              <div className='col-sm-6'>
                <div className='section_title mb-50 text-left'>
                  <h2>Initial Coin Offering</h2>
                  <p>The Kinesis suite of currencies are minted and emitted from a wholesale primary marketplace, where buyers of the wholesale lots of Kinesis Coins, the precious metal backed currency, may on-sell to retail buyers in a secondary marketplace. Each coin is backed by physical precious metal on a 1:1 ratio, meaning bullion must be purchased and allocated at the exact moment a Kinesis coin is created in the Primary Marketplace. It is for this reason that each and every coin must be ‘pre-mined’ prior to sale in the primary wholesale marketplace.</p>
                  <DisplayMore style={{}}>
                    <p>The number of Kinesis coins of offer are limited to the amount of pure bullion there is in the world. The scarcity of bullion and the cosmic events required to create said precious metals, control the supply of Kinesis just as these forces control the supply of all precious physical metals. No derivatives, no futures, no paper: just 100% real, physical precious metals backed digital currency.</p>
                    <p>This physical backing creates stability in a marketplace plagued by uncertainty and volatility. Theoretically, the price of a Kinesis coin should not drop below the spot price of its underlying physical precious metal, for if it should, arbitrage opportunity would present itself, causing the currency to correct back to the value of the metal. The price though should generally trade much higher than the spot price of the underlying; not only because of the efficiency of trade added, but also because of the tremendous yield potential which has for the first time in history now been added to physical precious metals. Click here to view the yield matrix to learn more.</p>
                  </DisplayMore>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight' style={{position: 'relative', height: '100%', verticalAlign: 'top'}}>
                <div className='embed-responsive embed-responsive-16by9'>
                  <iframe width={560} height={315} src='https://www.youtube.com/embed/2o8hGkicgjI' frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
