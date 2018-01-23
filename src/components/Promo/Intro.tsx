import * as React from 'react'

export class Intro extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='startup pt-50 pb-20 bg-off'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <h3 className='mb-10'>Why Kinesis</h3>
                <p className='mb-20'>Kinesis is redefining physically backed cryptocurrencies.</p>
              </div>
              <div className='col-sm-4 text-right'>
                <a href='#' className='btn mt-10 wow fadeInRight'>Whitepaper</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
