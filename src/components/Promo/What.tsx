import * as React from 'react'
import { DisplayMore } from 'components/DisplayMore'

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
              <p><strong>Kinetically Charged Asset Based Yield Bearing Monetary System of Shared Economic Wealth.</strong></p>
              <p>The Kinesis system is an revolutionary step beyond any current monetary system available in the world today. It enhances money as both a store of value and a medium of exchange, and has been developed for the benefit of all.</p>
              <p>Kinesis is a monetary system which is focused on minimising risk; maximising return; stimulating velocity.  Kinesis is designed to intrinsically promote a rapid rate of adoption.</p>
              <DisplayMore style={{maxWidth: '850px', margin: '0 auto 15px'}}>
                <p>Core to the mechanics of this monetary system is the perpetual incentive and thus ongoing stimulus for money velocity. External capital is attracted into the Kinesis system by via a highly appealing risk/return ratio and then put into highly stimulated currency movement, promoting and in turn promoted by commerce and economic activity.</p>
                <p>Aside from offering the greatest store of value (precious metals) as a currency and striving to provide the most efficient medium of exchange, Kinesis is a monetary system focused on: minimising risk; maximising return; stimulating velocity and maximising the rate of adoption.</p>
              </DisplayMore>
            </div>
            {/* End of .section_title */}
          </div>
        </section>
      </div>
    )
  }
}
