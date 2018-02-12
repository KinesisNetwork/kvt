import * as React from 'react'

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
                  <p>The physical backing of Kinesis by precious metal creates stability in a marketplace plagued by volatility.</p>
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
