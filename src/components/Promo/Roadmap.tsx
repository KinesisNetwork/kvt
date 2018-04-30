import * as React from 'react'

export class Roadmap extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div className='roadmap-bg'>
        <section className='pt-80 pb-80' id='roadmap'>
          <div className='container roadmap-container'>
            <div className='section_title text-center mb-60'>
              <h2>Roadmap</h2>

              <ul style={{ listStyleType: 'none', textAlign: 'left', color: 'white' }}>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>2016:</span> Conceptualizing the ways humanity could return to the Gold Standard.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Early 2017:</span> Investigating smart-contract capabilities across multiple leading cryptocurrencies.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Mid 2017:</span> The build and completion of the proprietary Primary Marketplace environment.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Late 2017:</span> Development of both the unique and revolutionary Kinesis Currencies and Kinesis Velocity Token.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Early-Mid 2018:</span> Launching the Kinesis Velocity Token.</li>
                <li className='roadmap-entries'><span className='primary_color roadmap-year'>Mid 2018:</span> The Launch of the first of the Kinesis Currencies, whereby each coin is backed 1:1 by 1g of 99.99% pure physical gold.</li>
              </ul>
              <h2 style={{marginTop: '80px'}}>KVT & ICO Release Schedule</h2>
              <ul className="timeline">
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">KVT Pre-Sale Opens</span>
                      <span className="time-wrapper"><span className="time">14 Feb 2018</span></span>
                    </div>
                    <div className="desc">(25% Discount)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">KVT Pre-Sale Phase 2</span>
                      <span className="time-wrapper"><span className="time">15 March 2018</span></span>
                    </div>
                    <div className="desc">(15% Discount)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">KVT Pre-Sale Phase 3</span>
                      <span className="time-wrapper"><span className="time">1 April 2018</span></span>
                    </div>
                    <div className="desc">(10% Discount)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">KVT Pre-Sale Phase 4</span>
                      <span className="time-wrapper"><span className="time">15 April 2018</span></span>
                    </div>
                    <div className="desc">(5% Discount)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">KVT Pre-Sale Phase 5</span>
                      <span className="time-wrapper"><span className="time">1 May 2018</span></span>
                    </div>
                    <div className="desc">(2.5% Discount)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">KVT Public Sale</span>
                      <span className="time-wrapper"><span className="time">1 July 2018</span></span>
                    </div>
                    <div className="desc">(Full Price)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">Kinesis Currency ICO Launch</span>
                      <span className="time-wrapper"><span className="time">1 September 2018</span></span>
                    </div>
                    <div className="desc">(Pre-ICO Yield Rates)</div>
                  </div>
                </li>

                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Kinesis Currency Trade Begins</span>
                      <span className="time-wrapper"><span className="time">1 October 2018</span></span>
                    </div>
                    <div className="desc">(Post ICO Yield Rates)</div>
                  </div>
                </li>

              </ul>
            </div>
            {/* End of .section_title */}
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
      </div>
    )
  }
}
