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
                  <p>Kinesis will offer its initial coin offering in June, 2018.</p>
                  <p>Register your interest below to be kept up to date with the most recent information.</p>
                  <a href='#' className='btn mt-10 '>read more</a>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight'>
                <div className='embed-responsive embed-responsive-16by9'>
                  <iframe width={560} height={315} src='https://www.youtube.com/embed/2o8hGkicgjI' frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
