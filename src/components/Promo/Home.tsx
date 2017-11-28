import * as React from 'react'

export class Home extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='banner bg_2 pt-80 style_2' data-stellar-background-ratio='.7' id='home'>
          <div className='overlay' />
          <div className='container text-center'>
            <h1 className='mb-20'>A Gold standard in cryptocurrency</h1>
            <a href='#' className='ml-5 mr-5 mb-20 btn '>get started</a>
          </div>
          {/* End of .container */}
        </section>
      </div>
    )
  }
}
