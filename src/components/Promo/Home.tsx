import * as React from 'react'

const Scroll: any = require('react-scroll')
const ScrollLink = Scroll.Link

export const Home: React.SFC = () => {
  return (
    <div>
      <section className='banner pt-80 style_2' data-stellar-background-ratio='.7' id='home'>
        <div className='overlay' />
        <div className='container' style={{textAlign: 'center'}}>
          <h1 className='mb-10 light_color' style={{fontWeight: 'bold'}}>Kinesis</h1>
          <h2 className='hero-text mb-10 light_color'>More than a revolutionary crypto currency</h2>
          <h2 className='hero-text mb-10 light_color'>More than a <span className='primary_color'>gold backed</span> coin</h2>
          <h2 className='hero-text mb-10 light_color'>Kinesis is the future of money</h2>
          <div style={{paddingTop: '30px'}}>
          <ScrollLink style={{ paddingLeft: '12px', paddingRight: '12px'}} className='ml-5 mr-5 mb-20 btn prehighlight' to='contact' spy={true} smooth={true} offset={0} duration={500}>Register Your Interest</ScrollLink>
          </div>
        </div>
      </section>
    </div>
  )
}
