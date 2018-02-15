import * as React from 'react'
import { DisplayMore } from '../DisplayMore';

export class About extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='services pt-80 pb-80' style={{color: 'white'}} id='about'>
          <div className='container'>
            <div className='section_title text-center mb-60'>
              <h2>What does Kinesis offer?</h2>
            </div>
            {/* End of .section_title */}
            <div className='row text-center m-0'>
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <img src='images/website-assets/01Security.png' />
                  <h3>Security</h3>
                  <p>Block chain technology, combined with our industry leading precious metals exchange and a firmly established global vaulting network ensures security in the Kinesis suite.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <img src='images/website-assets/03Backed.png' />
                  <h3>Stability</h3>
                  <p>
                    Kinesis Inherently integrates the highest regarded store of value - gold, with the trust of blockchain technology, and the foresight of the digital currency revolution.  This physical backing creates stability in a marketplace plagued by uncertainty and volatility.
                  </p>
                  <DisplayMore style={{}}>
                    <p style={{marginTop: '20px'}}>
                      Theoretically, the price of a Kinesis coin should not drop below the spot price of its underlying physical precious metal, for if it should, arbitrage opportunity would present itself, causing the currency to correct back to the value of the metal. The price though should generally trade much higher than the spot price of the underlying; not only because of the efficiency of trade added to the underlying metal, but also the returns built into the currency model.
                    </p>
                  </DisplayMore>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4'>
                <div className='content'>
                  <img src='images/website-assets/02Integration.png' />
                  <h3>Scarcity</h3>
                  <p>The number of Kinesis coins on offer are limited to the amount of pure bullion there is in the world.</p>
                </div>
                {/* End of .content */}
              </div>
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
      </div>
    )
  }
}
