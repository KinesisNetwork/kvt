import * as React from 'react'
const loadTemplateJs = require('../../vendor/js/main.js')

import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { Home } from '../Promo/Home';
import { Token } from './Token';

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
            <Navigation hideNavigation={true}/>
          </div>
        </header>
        <Home />
        <Token /> 
        <Footer />
      </div>
    )
  }
}

        // <div>
        //   <section className='banner pt-80 style_2' data-stellar-background-ratio='.7' id='home'>
        //     <div className='overlay' />
        //     <div className='container' style={{textAlign: 'center'}}>
        //     </div>
        //   </section>
        // </div>
