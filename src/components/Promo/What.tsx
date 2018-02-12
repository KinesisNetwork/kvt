import * as React from 'react'

export class What extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='services pt-80 pb-80' style={{color: 'white'}} id='about'>
          <div className='container'>
            <div className='section_title text-center mb-60'>
              <h2>What is Kinesis</h2>
              <p>Kinesis is a revolutionary digital currency, secured by physical bullion, made dynamic by a crypto banking system, supercharged by transactional velocity, and for the first time in history, providing a mutli-faceted yield system for those who utilise it.</p>
              <p>Kinesis is a unique concept giving users direct access to a unique multifaceted yield system, empowering users to be financially rewarded based on the global use of this currency. This concept will change the way the world views digital currencies and enforces the security a currency should provide.</p>
            </div>
            {/* End of .section_title */}
          </div>
        </section>
      </div>
    )
  }
}
