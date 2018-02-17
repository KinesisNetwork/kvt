import * as React from 'react'
import { DisplayMore } from '../DisplayMore';
import { BuyingToken } from './BuyingToken'
import { MoreKvtInfo } from './MoreKvtInfo'
const Scroll: any = require('react-scroll')
const ScrollLink = Scroll.Link

export class TokenOffering extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='services pt-80 pb-80' style={{color: 'white'}} id='token'>
          <div className='container'>
            <div className='section_title text-center'>
              <h2>Kinesis Velocity Token Offering</h2>

              <p><strong>The Kinesis Velocity Token (KVT) offers an investor a one time only opportunity to: </strong></p>

              <p>
                <ul style={{listStyleType: 'circle', marginLeft: '40px'}}>
                  <li>Benefit from sharing in 20% of all aggregated Kinesis cryptocurrency suite transaction fees and commercial centre commission;</li>
                  <li>Benefit from potentially very significant capital gains in the KVTs; </li>
                  <li>Access the extraordinary pre-ICO benefits on offer for the Kinesis cryptocurrency suite. </li>
                </ul>
              </p>

              <p>These tokens are strictly limited in supply and being offered sequentially at phased discounted rates until reaching the full price and could sell out at anytime! The earlier an investor subscribes to the KVTs the greater the benefit they will receive. <ScrollLink to='roadmap' spy={true} smooth={true} offset={0} duration={500}><span className='primary_color' style={{cursor: 'pointer'}}>Please see KVT Schedule below.</span></ScrollLink></p>

              <p>If you believe that Kinesis has great potential and could be the monetary system of the future then KVTs provide the greatest exposure to Kinesis’ future success and they are only being offered once.</p>

              <p>Stake your claim to the economic benefits of the monetary system of the future.</p>

              <ScrollLink style={{ paddingLeft: '12px', paddingRight: '12px', marginBottom: '40px'}} className='ml-5 mr-5 mb-20 btn prehighlight' to='contact' spy={true} smooth={true} offset={0} duration={500}>Register Your Interest</ScrollLink>
              <div className='container faq' style={{backgroundColor: 'rgba(0,0,0,0)', marginTop: '10px', maxWidth: '1000px' }}>
                <div className='row'>
                  <div style={{width: '100%', marginLeft: '5px'}}>
                    <div>
                      <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                        <div className='panel panel-default'>
                          <div className='panel-heading' role='tab' id='headingMoreKvtInfo'>
                            <h4 className='panel-title'>
                              <a role='button' className='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapseMoreKvtInfo' aria-expanded='false' aria-controls='collapseMoreKvtInfo'>
                                More KVT Details<i className='fa fa-caret-up' />
                              </a>
                            </h4>
                          </div>
                          {/* End of .panel-heading */}
                          <div id='collapseMoreKvtInfo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingMoreKvtInfo'>
                            <div className='panel-body'>
                              <MoreKvtInfo />
                            </div>
                            {/* End of .panel-body */}
                          </div>
                          {/* End of .panel-collapse */}
                        </div>
                        {/* End of .panel */}
                      </div>
                      <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                        <div className='panel panel-default'>
                          <div className='panel-heading' role='tab' id='headingBuyKvt'>
                            <h4 className='panel-title'>
                              <a role='button' className='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapseBuyKvt' aria-expanded='false' aria-controls='collapseBuyKvt'>
                                How To Buy KVT?<i className='fa fa-caret-up' />
                              </a>
                            </h4>
                          </div>
                          {/* End of .panel-heading */}
                          <div id='collapseBuyKvt' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingBuyKvt'>
                            <div className='panel-body'>
                              <BuyingToken />
                            </div>
                            {/* End of .panel-body */}
                          </div>
                          {/* End of .panel-collapse */}
                        </div>
                        {/* End of .panel */}
                      </div>
                      {/* End of .panel-group */}
                    </div>
                    {/* End of .content */}
                  </div>
                  {/* End of .col-sm-8 */}
                </div>
                {/* End of .row */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
