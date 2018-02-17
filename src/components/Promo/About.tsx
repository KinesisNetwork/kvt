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
              <h2>Our Three Pillars</h2>
            </div>
            {/* End of .section_title */}
            <div className='row text-center m-0'>
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <img src='images/website-assets/01Security.png' />
                  <h3>Security</h3>
                  <p>Employing the highest standards of digital security across blockchain networks and data storage technologies, along with well-established ABX precious metal vaulting operations and secure exchange platforms, the Kinesis system provides users with an institutional grade solution with minimized risk.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <img src='images/website-assets/02Integration.png' />
                  <h3>Effeciency</h3>
                  <p>Utilising the Stellar blockchain network with capabilities of +3,000 transactions per second and transaction confirmation times of 3-5 seconds, including complete ease of currency utilisation through extensive banking, payment and debit card facilities. </p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4'>
                <div className='content'>
                  <img src='images/website-assets/03Backed.png' />
                  <h3>Reward</h3>
                  <p>Offering a completely unique, multifaceted yield system, providing passive and active rewards for everyone who participates in the revolutionary Kinesis Monetary System of shared economic wealth.</p>
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
