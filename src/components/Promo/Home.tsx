import * as React from 'react'

export const Home: React.SFC = () => {
  return (
    <div>
      <section className='banner pt-80 style_2' data-stellar-background-ratio='.7' id='home'>
        <div className='overlay' />
        <div className='container'>
          <h2 className='mb-10 light_color'>A Revolutionary Cryptocurrency</h2>
          <h2 className='mb-10 light_color' style={{ fontWeight: 'bold', marginTop: '-28px' }}>where each coin</h2>
          <h2 className='mb-10 light_color' style={{ fontWeight: 'bold', marginTop: '-28px' }}>is backed by <span className='primary_color'>physical gold</span></h2>
          <a href='#' style={{ paddingLeft: '12px', paddingRight: '12px' }} className='ml-5 mr-5 mb-20 btn prehighlight '>Open Trading Account</a>
          <a href='#' style={{ paddingLeft: '12px', paddingRight: '12px' }} className='ml-5 mr-5 mb-20 btn'>Open Demo Account</a>
        </div>
      </section>
    </div>
  )
}
