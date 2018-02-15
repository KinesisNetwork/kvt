import * as React from 'react'
const Scroll: any = require('react-scroll')
const ScrollLink = Scroll.Link

export class Home extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    (window as any).particlesJS("particles-js", {"particles":{"number":{"value":60,"density":{"enable":true,"value_area":800}},"color":{"value":"#5a77a7"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
  }

  public render() {
    return (
      <div>
        <section className='banner pt-80 style_2' data-stellar-background-ratio='.7' id='home'>
          <div className='overlay' id='particles-js'/>
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
}
