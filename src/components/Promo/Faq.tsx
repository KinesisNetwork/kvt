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
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-8'>
                <div className='content mb-100'>
                  <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingOne'>
                        <h4 className='panel-title'>
                          <a role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                            How to install? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseOne' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et.
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
                            How can I change the font-size of the buttons? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwo'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
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
                            How to get a support? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseThree' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingThree'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
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
                            How to change the images? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapsefour' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingfour'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
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
                            How to change the recipient email address of the contact form? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseFive' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFive'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
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
                            How to change background colors? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseSix' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingSix'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
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
              <div className='col-sm-4'>
                <div className='widget mb-60 pl-20'>
                  <form className='form-inline' action='#'>
                    <div className='search-row clearfix'>
                      <input type='text' name='search' defaultValue='' className='form-control' placeholder='Search your question...' />
                      <button type='submit' className='search-btn' title='search'>
                        <i className='fa fa-search' />
                      </button>
                    </div>
                    {/* End of .search-row */}
                  </form>
                  {/* End of form */}
                </div>
                {/* End of .widget */}
                <div className='widget text-left mb-60 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>our history</h5>
                  </div>
                  <p className='mb-20'>Persuaded to return to the shoemaker's shop, young Edward struggled on till three years of his wretched apprenticeship had passed over.</p>
                  <a href='#' className='link btn '>Read more</a>
                </div>
                {/* End of .widget */}
                <div className='widget quote text-left mb-60 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>quote from the author</h5>
                  </div>
                  <p className='mb-20'>' Persuaded to return to the shoemaker's shop, young Edward struggled on till three years of his wretched apprenticeship had passed over. ' <span>- Kayle Anderson</span></p>
                </div>
                {/* End of .widget */}
              </div>
              {/* End of .col-sm-4 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container*/}
        </section>
      </div>
    )
  }
}
