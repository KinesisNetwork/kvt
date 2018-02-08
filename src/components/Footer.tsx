import * as React from 'react'

export class Footer extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <footer>
        <div className='footer_bottom pt-30 pb-10'>
          <div className='container'>
            <p className='mb-20 pull-left'>© 2018. Kinesis. All rights reserved.</p>
            <ul className='list-inline pull-right mb-20'>
              <li><a href='#'><i className='fa fa-facebook' /></a></li>
              <li><a href='#'><i className='fa fa-twitter' /></a></li>
              <li><a href='#'><i className='fa fa-google-plus' /></a></li>
              <li><a href='#'><i className='fa fa-linkedin' /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
