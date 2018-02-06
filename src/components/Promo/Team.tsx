import * as React from 'react'

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
                    <img src='images/team/1.jpg' alt='team' className='img-responsive' />
                    <div className='overlay'>
                      <ul className='social list-inline mt-5 mb-0'>
                        <li><a href='#'><i className='fa fa-facebook' /></a></li>
                        <li><a href='#'><i className='fa fa-twitter' /></a></li>
                        <li><a href='#'><i className='fa fa-linkedin' /></a></li>
                      </ul>
                    </div>
                    <h3 className='team_info wow fadeInUp'>
                      steve martin
                      <span>founder &amp; ceo</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/2.jpg' alt='team' className='img-responsive' />
                    <div className='overlay'>
                      <ul className='social list-inline mt-5 mb-0'>
                        <li><a href='#'><i className='fa fa-facebook' /></a></li>
                        <li><a href='#'><i className='fa fa-twitter' /></a></li>
                        <li><a href='#'><i className='fa fa-linkedin' /></a></li>
                      </ul>
                    </div>
                    <h3 className='team_info wow fadeInUp'>
                      sarah samanta
                      <span>UI Designer</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/3.jpg' alt='team' className='img-responsive' />
                    <div className='overlay'>
                      <ul className='social list-inline mt-5 mb-0'>
                        <li><a href='#'><i className='fa fa-facebook' /></a></li>
                        <li><a href='#'><i className='fa fa-twitter' /></a></li>
                        <li><a href='#'><i className='fa fa-linkedin' /></a></li>
                      </ul>
                    </div>
                    <h3 className='team_info wow fadeInUp'>
                      john doe
                      <span>web designer</span>
                    </h3>
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
