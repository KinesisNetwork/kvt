import * as React from 'react'

export class Faq extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='faq pt-80 pb-50' id='faq'>
          <div className='container'>
            <div className='section_title mb-70 text-center'>
              <h2>Frequently asked questions</h2>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-12'>
                <div className='content mb-100'>
                  <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingOne'>
                        <h4 className='panel-title'>
                          <a role='button' className='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='false' aria-controls='collapseOne'>
                            Are the Kinesis suite of currencies backed by anything other than real, physical precious metals? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseOne' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
                        <div className='panel-body'>
                          No, the entirety of the Kinesis currency suite are backed by either 99.99% pure gold, or 99.5% pure silver. Kinesis NEVER utilizes futures/derivatives/paper contracts to back these real, physical backed currencies.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingTwo'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                            How do I know that bullion is actually being held 1:1 at the locations you say? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwo'>
                        <div className='panel-body'>
                          The bullion backing each and every Kinesis coin is independently comprehensively audited twice a year by world-renowned independent auditors. These audits are released as soon as they are completed and can easily be matched up against the blockchain ledger of each Kinesis currency.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingThree'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                            Where is the bullion stored? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseThree' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingThree'>
                        <div className='panel-body'>
                          Each Kinesis coin is backed 1:1 with physical precious metal. These physical precious metals are stored within fully insured, world-class vaulting facilities in Singapore and Dubai. Furthermore, this bullion is stored in trust, whereby legal beneficial ownership always lies with the holders of the Kinesis coins.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingfour'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapsefour' aria-expanded='false' aria-controls='collapsefour'>
                            Can I redeem the bullion which is backing my Kinesis coin? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapsefour' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingfour'>
                        <div className='panel-body'>
                          Yes, as a holder of Kinesis, you are entitled to withdraw the bullion backing the coin and destroying said coin. The (withdrawal procedure and terms) must be followed.
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
          {/* End of .container*/}
        </section>
      </div>
    )
  }
}
