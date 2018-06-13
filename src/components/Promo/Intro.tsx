import * as React from 'react'

export const Intro: React.SFC = () => {
  return (
    <div>
      <section className='startup pt-40 pb-40' id='whitepaper'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <h4 style={{ color: 'black', lineHeight: '50px' }}><strong>Why Kinesis?</strong> Read our blueprint to find out more.</h4>
            </div>
            <div className='col-sm-2'>
              <a href='/documents/whitepaper.pdf' target='_blank' className='btn wow fadeInRight' style={{ marginBottom: 0, border: '2px solid black', backgroundColor: 'transparent' }}>Whitepaper</a>
            </div>
            <div className='col-sm-2'>
              <a href='/documents/whitepaper-summary.pdf' target='_blank' className='btn wow fadeInRight' style={{ marginBottom: 0, border: '2px solid black', backgroundColor: 'transparent' }}>Summary</a>
            </div>
            <div className='col-sm-2'>
              <a href='/documents/kinesis-blueprint.pdf' target='_blank' className='btn wow fadeInRight' style={{ marginBottom: 0, border: '2px solid black', backgroundColor: 'transparent' }}>Blueprint</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
