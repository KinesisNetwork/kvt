import * as React from 'react'
import { DisplayMore } from '../DisplayMore';

export class Ico extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='video ptb-100 bg-off' id='ico'>
          <div className='container'>
            <div className='row is-table-row'>
              <div className='col-sm-6'>
                <div className='section_title mb-50 text-left'>
                  <h2>Kinesis Currency</h2>
                  <p>The Kinesis Currencies will be launched in May 2018.  This suite of currencies will be brought to life, minted and emitted from a unique wholesale marketplace developed and managed by Allocated Bullion Exchange (ABX), where buyers of the wholesale blocks of Kinesis Coins enjoy a lifetime yield on the transaction fees of the coins they mint.</p>
                  <DisplayMore style={{}}>
                    <p>Each Kinesis coin represents physical precious metal on a 1:1 basis, meaning bullion is purchased simultaneously on minting and you are directly allocated title to it at the exact moment of purchase. Always and forever is every Kinesis coin directly connected to allocated physical precious metals.</p>
                  </DisplayMore>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight' style={{ position: 'relative', height: '100%', verticalAlign: 'top' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src='images/website-assets/kinesis-coin.png' style={{ maxHeight: '380px' }} />
                </div>
              </div>
            </div>
            <div className='row is-table-row'>
              <div className='col-sm-6'>
                <div className='section_title mb-50 text-left'>
                  <h2>Kinesis Debit Card</h2>
                  <p>The Kinesis suite of currencies have been designed for use in the real world, by everyday people. We believe the Kinesis suit of currencies will become a common global medium of exchange. For this to occur, there must be an easy and efficient way to utilize this medium of exchange. The Kinesis Debit card will enable those who holding Kinesis to spend this precious metal backed currency with ease.</p>
                  <DisplayMore style={{}}>
                    <p>Kinesis holders may also exchange Kinesis for other Fiat currency at will. Kinesis is taking digital currency and making it accessible to the common man. Couple this with the historically proven benefits of gold as a store of value and now add a yield, and you have a game changing digital currency available to the masses.</p>
                  </DisplayMore>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight' style={{ position: 'relative', height: '100%', verticalAlign: 'top' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src='images/website-assets/CreditCard.png' style={{ maxHeight: '350px' }} />
                </div>
              </div>
            </div>
            <div className='row is-table-row'>
              <div className='col-sm-12'>
                <div className='section_title mb-50 text-center'>
                  <h2>What Makes Kinesis Unique?</h2>
                  <div className='row m-0 roadmap-sections'>
                    <div className='col-sm-4'>
                      <h3><img style={{margin: '10px', filter: 'brightness(0)'}} src='images/website-assets/roadmap-icons/01.png' />  <span style={{color: 'black'}}>Value</span></h3>
                      <p>Gold has long been known as an incredible store of value. Kinesis brings this security and stability to the world of digital currencies.</p>
                    </div>
                    <div className='col-sm-4'>
                      <h3><img style={{margin: '10px', filter: 'brightness(0)'}} src='images/website-assets/roadmap-icons/02.png' />  <span style={{color: 'black'}}>Yield</span></h3>
                      <p>Without a yield, physical precious metals are incomparable to other financial products. Kinesis solves this age old problem by achieving something long sought after: a yield on physical precious metals. Kinesis attaches a highly unique multi-faceted yield system incomparable to anything available in the precious metals market.</p>
                    </div>
                    <div className='col-sm-4'>
                      <h3><img style={{margin: '10px', filter: 'brightness(0)'}} src='images/website-assets/roadmap-icons/03.png' />  <span style={{color: 'black'}}>Velocity</span></h3>
                      <p>The Kinesis suite of digital currencies have been developed for ongoing use in everyday life. A higher velocity means a higher yield for all who participate in this currency system.</p>
                    </div>
                  </div>
                  <div className='row text-center m-0 roadmap-sections'>
                    <div className='col-sm-4'>
                      <h3><img style={{margin: '10px', filter: 'brightness(0)'}} src='images/website-assets/roadmap-icons/04.png' />  <span style={{color: 'black'}}>Kinesis Velocity Token</span></h3>
                      <p>A token with yield attached directly to the transactions of an entire global currency presents a unique opportunity for investment.  The earning potential provided by such a unique token is unequivocal.</p>
                    </div>
                    <div className='col-sm-4'>
                      <h3><img style={{margin: '10px', filter: 'brightness(0)'}} src='images/website-assets/roadmap-icons/06.png' />  <span style={{color: 'black'}}>Referral Opportunity</span></h3>
                      <p>Kinesis offers the public a referral opportunity with integrity. Recruiters will receive a perpetual revenue share on all blockchain network transaction fees charged to the eWallets they recruit.</p>
                    </div>
                    <div className='col-sm-4'>
                      <h3><img style={{margin: '10px', filter: 'brightness(0)'}} src='images/website-assets/roadmap-icons/05.png' />  <span style={{color: 'black'}}>Debit Card</span></h3>
                      <p>The Kinesis suit of currencies can be spent in tangible purchases with partner merchants accepting this digital currency. Kinesis can also be spent as the debit card will allow for instant conversion to the native fiat currency of a merchant.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
