import * as React from 'react'
import { DisplayMore } from '../DisplayMore';
import { BuyingToken } from './BuyingToken'
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
            <div className='section_title text-center mb-60'>
              <h2>Kinesis Velocity Token Offering</h2>
            </div>
            <div>
              <p>The Kinesis Velocity Token (KVT), named after the yield it presents to the holder, is your unique, time boxed opportunity to benefit from the boundless revenue generation potential of the future Kinesis cryptocurrency.</p>
              <p>Every Kinesis Velocity Token holder is entitled to a share of 20% of all transaction fees of the Kinesis cryptocurrency suite.</p>
              <p>With only 300,000 tokens on offer at a mere USD1000 each, this provides the astute investor with the potential for a substantial share in the transaction fees of this high velocity cryptocurrency</p>
              <p>Maximize your yield with the Kinesis Velocity Token:  Stake your claim to the massive earning potential of the digital currency of the future.</p>
              <ScrollLink style={{ paddingLeft: '12px', paddingRight: '12px'}} className='ml-5 mr-5 mb-20 btn prehighlight' to='contact' spy={true} smooth={true} offset={0} duration={500}>Register Your Interest</ScrollLink>
              <div className='container faq' style={{backgroundColor: 'rgba(0,0,0,0)', marginTop: '10px'}}>
                <div className='row'>
                  <div style={{width: '100%', marginLeft: '5px'}}>
                    <div>
                      <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                        <div className='panel panel-default'>
                          <div className='panel-heading' role='tab' id='headingBuyKvt'>
                            <h4 className='panel-title'>
                              <a role='button' className='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapseBuyKvt' aria-expanded='false' aria-controls='collapseBuyKvt'>
                                How to buy KVT?<i className='fa fa-caret-up' />
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
