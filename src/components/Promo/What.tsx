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
            <div className='section_title text-center mb-60' style={{textAlign: 'left', marginBottom: '-60px'}}>
              <h2 style={{textAlign: 'center'}}>What is Kinesis</h2>
              <p><strong>Kinesis is a revolutionary digital currency, secured by physical bullion, made dynamic by a crypto banking system, supercharged by transactional velocity, and for the first time in history, providing a multi-faceted yield system for those who utilise it.</strong></p>
              <p>Kinesis is a revolutionary concept giving users direct access to a unique multifaceted yield system, empowering users to be financially rewarded based on the global use of this currency. This concept will change the way the world views digital currencies and enforces the security a currency should provide.</p>
              <p>The Kinesis gold and silver suite of currencies are backed 1 to 1 by 100% physical precious metals. Physical precious metal is brought into trust, simultaneously with coin minting, to ensure full backing 100% of the life of each coin.</p>
            </div>
            {/* End of .section_title */}
          </div>
        </section>
      </div>
    )
  }
}
