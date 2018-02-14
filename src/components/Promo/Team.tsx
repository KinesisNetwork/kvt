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
                    <img src='images/team/1.png' alt='team' className='img-responsive' />
                    <h3 className='team_info wow fadeInUp'>
                      Thomas Coughlin  
                    </h3>
                    <span className='team_title'>Chief Executive Officer</span>
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
