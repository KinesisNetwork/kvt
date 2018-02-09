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
              <p>Imagine this: a multifaceted yield system, empowering users to be financially rewarded based on their participation and the overall velocity (rate that money changes hands) of the Kinesis currencies. This concept will change the way the world views physical precious metals. It’s a revolutionary idea giving users a unique yield, derived purely from economic output rather than debt like fiat currency with fractional banking.</p>
              <p>To take maximum advantage of the Kinesis potential for return, you must register for the Kinesis Velocity Token sale. Only holders of the Kinesis Velocity Token will be eligible to share in transaction fees associated with all Kinesis Currencies.</p>
            </div>
            {/* End of .section_title */}
            <div className='row text-center m-0'>
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <img src='images/website-assets/01Security.png' />
                  <h3>Security</h3>
                  <p>Kinesis has been built on tried and tested, industry leading blockchain platforms. Using the Ethereum network for the Kinesis Velocity Token and Stellar for the Kinesis Currency, coupled with an industry leading exchange platform and firmly established world-class vaulting and independent auditing networks, the Kinesis Suite of Products have been designed with security and trust in mind.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <img src='images/website-assets/03Backed.png' />
                  <h3>Initial Token Offering</h3>
                  <p>The Kinesis Velocity Token (KVT) is an ERC20 Token. This Token enables the holders to share in transaction fees associated with the Kinesis suite of currencies. It goes without saying how attractive a substantial share in the transactional fees of a high velocity currency, backed by physical precious metals could be.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4'>
                <div className='content'>
                  <img src='images/website-assets/02Integration.png' />
                  <h3>Physically Backed</h3>
                  <p>The Kinesis suite of currencies are backed by 100% physical precious metals. The first of the digital currencies to launch will be Kinesis Gold whereby each and every digital coin will be backed by 1g of physical gold bullion with a fineness of 9999. Stay tuned for additional details about the Kinesis Silver coin. The metals held in legally binding trust, undergo a comprehensive bi-annual independent audit, so you know your precious metals are the highest in quality, are beneficially owned by Kinesis coin holders and are 100% genuine.</p>
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
