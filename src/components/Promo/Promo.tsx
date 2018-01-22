import * as React from 'react'
const Scroll: any = require('react-scroll')
const ScrollLink = Scroll.Link
const loadTemplateJs = require('../../vendor/js/main.js')

import { Home } from './Home'
import { Intro } from './Intro'
import { About } from './About'
import { Ico } from './Ico'
import { Team } from './Team'
import { Roadmap } from './Roadmap'
import { Blog } from './Blog'
import { Faq } from './Faq'
import { Contact } from './Contact'
import { Token } from '../AbxToken/Token'

export class Promo extends React.Component<null, null> {
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
            <nav className='navbar navbar-default pt-10'>
              <div className='container-fluid pl-30 pr-30'>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#my_nav' aria-expanded='false'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                  <a className='navbar-brand' href='#'>
                    <img src='images/white_logo.svg' style={{width: '62px', marginTop:'-7px', marginBottom: '-7px'}} alt='brand logo' className='img-responsive main_logo default-logo' />
                  </a>
                </div>
                <div className='collapse navbar-collapse' id='my_nav'>
                    <ul className='nav navbar-nav navbar-right'>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='home' spy={true} smooth={true} offset={0} duration={500}>home</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='about' spy={true} smooth={true} offset={0} duration={500}>about</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='ico' spy={true} smooth={true} offset={0} duration={500}>ico</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='roadmap' spy={true} smooth={true} offset={0} duration={500}>roadmap</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='team' spy={true} smooth={true} offset={0} duration={500}>team</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='faq' spy={true} smooth={true} offset={0} duration={500}>faq</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='blog' spy={true} smooth={true} offset={0} duration={500}>blog</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='contact' spy={true} smooth={true} offset={0} duration={500}>contact</ScrollLink></li>
                    </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <Home />
        <Intro />
        <About />
        <Ico />
        <Roadmap />
        <Team />
        <Faq />
        <Blog />
        <Contact />
        <Token />
        <footer>
          <div className='footer_bottom bg-off pt-30 pb-10'>
            <div className='container'>
              <p className='mb-20 pull-left'>© 2017. Kairos. All rights reserved.</p>
              <ul className='list-inline pull-right mb-20'>
                <li><a href='#'><i className='fa fa-facebook' /></a></li>
                <li><a href='#'><i className='fa fa-twitter' /></a></li>
                <li><a href='#'><i className='fa fa-behance' /></a></li>
                <li><a href='#'><i className='fa fa-google-plus' /></a></li>
                <li><a href='#'><i className='fa fa-linkedin' /></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
