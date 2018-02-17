const Scroll: any = require('react-scroll')
const ScrollLink = Scroll.Link
import * as React from 'react'

export class Navigation extends React.Component<{hideNavigation?: boolean}, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <nav className='navbar navbar-default pt-10'>
        <div className='container-fluid pl-30 pr-30'>
          <div className='navbar-header'>
          {(!this.props.hideNavigation) && (
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#my_nav' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          )}
            <a className='navbar-brand' href='#'>
              <img src='images/white_logo.svg' style={{width: '62px', marginTop:'-7px', marginBottom: '-7px'}} alt='brand logo' className='img-responsive main_logo default-logo' />
            </a>
          </div>
          {(!this.props.hideNavigation) && (
          <div className='collapse navbar-collapse' id='my_nav'>
            <ul className='nav navbar-nav navbar-right'>
              <li style={{cursor: 'pointer'}}><ScrollLink to='home' spy={true} smooth={true} offset={0} duration={500}>home</ScrollLink></li>
              <li style={{cursor: 'pointer'}}><ScrollLink to='about' spy={true} smooth={true} offset={0} duration={500}>about</ScrollLink></li>
              <li style={{cursor: 'pointer'}}><ScrollLink to='ico' spy={true} smooth={true} offset={0} duration={500}>currency</ScrollLink></li>
              <li style={{cursor: 'pointer'}}><ScrollLink to='token' spy={true} smooth={true} offset={0} duration={500}>Token Offering</ScrollLink></li>
              <li style={{cursor: 'pointer'}}><ScrollLink to='roadmap' spy={true} smooth={true} offset={0} duration={500}>roadmap</ScrollLink></li>
              <li style={{cursor: 'pointer'}}><ScrollLink to='team' spy={true} smooth={true} offset={0} duration={500}>team</ScrollLink></li>
              <li style={{cursor: 'pointer'}}><ScrollLink to='faq' spy={true} smooth={true} offset={0} duration={500}>faq</ScrollLink></li>
              { /*  <li style={{cursor: 'pointer'}}><ScrollLink to='blog' spy={true} smooth={true} offset={0} duration={500}>blog</ScrollLink></li> */ }
              <li style={{cursor: 'pointer'}}><ScrollLink to='contact' spy={true} smooth={true} offset={0} duration={500}>Register</ScrollLink></li>
            </ul>
          </div>
          )}
        </div>
      </nav>
    )
  }
}
