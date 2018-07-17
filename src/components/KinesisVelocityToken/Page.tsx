import * as React from 'react'
const loadTemplateJs = require('../../vendor/js/main.js')

import { Navigation } from '../Navigation'
import { Footer } from '../Footer'
import { Token } from './Token'

export class TokenPage extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    loadTemplateJs()
  }

  public render() {

    return (
      <div>
        <header>
          <div className='header_wrapper'>
            <Navigation hideNavigation={true} />
          </div>
        </header>
        <Token />
        <Footer />
      </div>
    )
  }
}
