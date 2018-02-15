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
              <h2><span className='primary_color'>KVT FAQs</span></h2>
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
                            Why do I need to register?<i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseOne' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
                        <div className='panel-body'>
                          So that we can provide you with the information and relevant links to proceed to participate in the crowd-sale. We must also collect basic KYC (Know Your Customer) data, which we will protect and never disclose with a third party without informing you first.
                          
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
                            What currency can I buy with? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwo'>
                        <div className='panel-body'>
                          Ether of Fiat
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
                             How do I purchase KVT with Fiat
                             <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseThree' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingThree'>
                        <div className='panel-body'>
                           A Fiat Transfer into bank account provided, will be followed by a transfer of the number of KVT into your eWALLET.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingFour'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>
                            What happens to unsold tokens?  <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseFour' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFour'>
                        <div className='panel-body'>
                          Unsold Tokens will be retained to allow opportuntiies to purchase further KVT at a later date. 
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingFive'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseFive' aria-expanded='false' aria-controls='collapseFive'>
                            How many coins are available for purchase?  <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseFive' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFive'>
                        <div className='panel-body'>
                          Up to 300000 tokens, this is all that will be released.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingSix'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>
                            Can I refer my contacts?  <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseSix' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingSix'>
                        <div className='panel-body'>
                          Most Definitely. 
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingSeven'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseSeven' aria-expanded='false' aria-controls='collapseSeven'>
                            Can I buy multiple times throughout the crowd-sale?<i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseSeven' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingSeven'>
                        <div className='panel-body'>
                         Yes, but buying early on means you take advantage of preferential prices.
                        </div>
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingEight'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseEight' aria-expanded='false' aria-controls='collapseEight'>
                            How do I know if the crowd-sale was successful?  <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseEight' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingEight'>
                        <div className='panel-body'>
                          You will be advised directly as to the success of the token sale. 
                        </div>
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingNine'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseNine' aria-expanded='false' aria-controls='collapseNine'>
                            How does it link to the Kinesis, the crypto currency?  <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseNine' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingNine'>
                        <div className='panel-body'>
                          While the KVT offers ongoing share in fees on the kinesis currencies, it also offers the key to minting the kinesis coins. You will need to hold KVT in order to mint Kinesis.
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
          <div className='container'>
            <div className='section_title mb-70 text-center'>
              <h2><span className='primary_color'>Kinesis Currency FAQs</span></h2>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-12'>
                <div className='content mb-100'>
                  <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingOneKinesis'>
                        <h4 className='panel-title'>
                          <a role='button' className='collapsed' data-toggle='collapse' data-parent='#accordion' href='#collapseOneKinesis' aria-expanded='false' aria-controls='collapseOneKinesis'>
                            Are the Kinesis suite of currencies backed by anything other than real, physical precious metals? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseOneKinesis' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOneKinesis'>
                        <div className='panel-body'>
                          No, the entirety of the Kinesis currency suite are backed by either 99.99% pure gold, or 99.5% pure silver. Kinesis NEVER utilizes futures/derivatives/paper contracts to back these real, physical backed currencies.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingTwoKinesis'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseTwoKinesis' aria-expanded='false' aria-controls='collapseTwoKinesis'>
                            How do I know that bullion is actually being held 1:1 at the locations you say? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseTwoKinesis' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwoKinesis'>
                        <div className='panel-body'>
                          The bullion backing each and every Kinesis coin is independently comprehensively audited twice a year by world-renowned independent auditors. These audits are released as soon as they are completed and can easily be matched up against the blockchain ledger of each Kinesis currency.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingThreeKinesis'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseThreeKinesis' aria-expanded='false' aria-controls='collapseThreeKinesis'>
                            Where is the bullion stored? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseThreeKinesis' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingThreeKinesis'>
                        <div className='panel-body'>
                          Each Kinesis coin is backed 1:1 with physical precious metal. These physical precious metals are stored within fully insured, world-class vaulting facilities in Singapore and Dubai. Furthermore, this bullion is stored in trust, whereby legal beneficial ownership always lies with the holders of the Kinesis coins.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingFourKin'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseFourKi' aria-expanded='false' aria-controls='collapseFourKi'>
                            Can I redeem the bullion which is backing my Kinesis coin? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseFourKi' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFourKin'>
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
