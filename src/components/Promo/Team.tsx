import * as React from 'react'
import { DisplayMore } from '../DisplayMore';

export class Team extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='video ptb-100 bg-off' id='team'>
          <div className='container'>
            <div className='section_title mb-50 text-center'>
              <h2>A Team With a Wealth of Experience</h2>
              <p>Short leadership bios etc.</p>
            </div>
            <div className='row'>
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/1.png' alt='team' className='img-responsive' />
                    <h3 className='team_info wow fadeInUp'>
                      Thomas Coughlin  
                    </h3>
                    <span className='team_title'>Chief Executive Officer</span>
                    <p>Thomas Coughlin is the Chief Executive Officer (CEO) of Kinesis Limited as well as Allocated Bullion Exchange (ABX). He has worked in the investment, funds management and bullion industries for approximately seventeen years. His professional portfolio management career spans the foundation of the boutique investment company, TRAC Financial, to the establishment of a highly successful Absolute Return Fund.</p>
                    <DisplayMore style={{fontWeight: 'bold'}}>
                      <p>Thomas has dedicated a significant part of his career working collaboratively to build the complex systems of a cross-border international bullion market with an extensive global network of central bankers, brokers, fund managers and advisers. His experience, extensive network and broad knowledge of capital markets, enable him to deliver exceptional value and insight to all stakeholders.</p>
                    </DisplayMore>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/2.png' alt='team' className='img-responsive' />
                    <h3 className='team_info wow fadeInUp'>
                      Michael Coughlin
                    </h3>
                    <span className='team_title'>Chief Financial Officer</span>
                    <p>Michael Coughlin is the Chief Financial Officer (CFO) of Allocated Bullion Exchange (ABX). His tertiary accountancy education was completed at the University of Southern Queensland, with Post Graduate studies at the University of Queensland in Economics, and Canberra University in Taxation Law.</p>
                    <DisplayMore style={{fontWeight: 'bold'}}>
                      <p>Michael has a total of 41 years experience as a CPA in the accountancy and financial services professions. He has owned and operated a Brisbane-based public accountancy firm and financial services company since 1984. Awarded a Cadetship with the Australian Taxation Office in 1973, he worked in the assessing, business audit and investigation areas of the Australian Taxation Office, and eventually in the Interpretation and Advising Branch of the Taxation Office’s Head Office in Canberra until November 1979, at which time he commenced in public practice.</p>
                    </DisplayMore>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/3.png' alt='team' className='img-responsive' />
                    <h3 className='team_info wow fadeInUp'>
                      David Charles 
                    </h3>
                    <span className='team_title'>Non-Executive Director</span>
                    <p>David Charles is a Director of the Allocated Bullion Exchange. A lawyer by trade, David has protected and advanced the interests of some of the largest and most prominent entities in the world, across four continents.</p>
                    <DisplayMore style={{fontWeight: 'bold'}}>
                      <p>David’s experience spans corporate structuring, domestic and cross-border mergers & acquisitions, capital markets and private equity, insurance, intellectual property and planning & environment law. David holds a Bachelor of Laws (Commercial Law) from the University of Queensland and a Graduate Diploma of Legal Practice. He is admitted/registered in several jurisdictions worldwide.</p>

                    </DisplayMore>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
