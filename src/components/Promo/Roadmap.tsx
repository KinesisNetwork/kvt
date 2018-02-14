import * as React from 'react'

export class Roadmap extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div className='roadmap-bg'>
        <section className='pt-80 pb-80' id='about'>
          <div className='container roadmap-container'>
            <div className='section_title text-center mb-60'>
              <h2>Roadmap</h2>
              { /* <div className='progress'>
                <div className='progress-bar' role='progressbar' style={{width: '25%', backgroundColor: '#ffd700'}} aria-valuenow="25" aria-valuemin='0' aria-valuemax='100'></div>
              </div> */ }
              <ul style={{listStyleType: 'none', textAlign: 'left', color: 'white'}}>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>2016:</span> Conceptualizing the ways humanity could return to the Gold Standard.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Early 2017:</span> Investigating smart-contract capabilities across multiple leading cryptocurrencies.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Mid 2017:</span> The build and completion of the proprietary Primary Marketplace environment.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Late 2017:</span> Development of both the unique and revolutionary Kinesis Currencies and Kinesis Velocity Token.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Early-Mid 2018:</span> Launching the Kinesis Velocity Token.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Mid 2018:</span> The Launch of the first of the Kinesis Currencies, whereby each coin is backed 1:1 by 1g of 99.99% pure physical gold.</li>
              </ul>
            </div>
            {/* End of .section_title */}
            <div className='row text-center m-0 roadmap-sections'>
              <div className='col-sm-4'>
                <h3><img style={{margin: '10px'}} src='images/website-assets/roadmap-icons/01.png' />  <span className='primary_color'>Value</span></h3>
                <p>Gold has long been known as an incredible store of value. Kinesis brings this security and stability to the world of digital currencies.</p>
              </div>
              <div className='col-sm-4'>
                <h3><img style={{margin: '10px'}} src='images/website-assets/roadmap-icons/02.png' />  <span className='primary_color'>Yield</span></h3>
                <p>Without a yield, physical precious metals are incomparable to other financial products. Kinesis solves this age old problem by achieving something long sort after: a yield on physical precious metals.</p>
              </div>
              <div className='col-sm-4'>
                <h3><img style={{margin: '10px'}} src='images/website-assets/roadmap-icons/03.png' />  <span className='primary_color'>Velocity</span></h3>
                <p>The Kinesis suite of digital currencies have been developed for future use in everyday life. A higher velocity means a higher yield.</p>
              </div>
            </div>
            <div className='row text-center m-0 roadmap-sections'>
              <div className='col-sm-4'>
                <h3><img style={{margin: '10px'}} src='images/website-assets/roadmap-icons/04.png' />  <span className='primary_color'>Kinesis Velocity Token</span></h3>
                <p>The earning potential of such an attractive and unique coin is unequivocal. The Kinesis Velocity Token gives buyers a share of this awesome earning potential. Register your interest here.</p>
              </div>
              <div className='col-sm-4'>
                <h3><img style={{margin: '10px'}} src='images/website-assets/roadmap-icons/06.png' />  <span className='primary_color'>Referral Opportunity</span></h3>
                <p>Kinesis offers the public a referral opportunity with integrity. Recruiters will receive a perpetual revenue share on all transaction fees on the eWallets they recruit. Learn more here.</p>
              </div>
              <div className='col-sm-4'>
                <h3><img style={{margin: '10px'}} src='images/website-assets/roadmap-icons/05.png' />  <span className='primary_color'>Debit Card</span></h3>
                <p>The Kinesis suit of currencies can be spent in the real world with merchants accepting this digital currency of the future. Kinesis can also be spent as the card allows for instant conversion to your native fiat currency.</p>
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
