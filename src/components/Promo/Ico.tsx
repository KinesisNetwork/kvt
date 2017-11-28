import * as React from 'react'

export class Ico extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='video ptb-100 bg-off' id='ico'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='section_title mb-50 text-left'>
                  <h2>Initial Coin Offering</h2>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna.</p>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor
                    incididunt.
                  </p>
                  <a href='#' className='btn mt-10 '>read more</a>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight'>
                <div className='embed-responsive embed-responsive-16by9'>
                  <iframe width={560} height={315} src='https://www.youtube.com/embed/nrJtHemSPW4' frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
