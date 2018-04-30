import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export const MoreKvtInfo: React.SFC = (props) => (
  <div className='section_title text-center mb-60'>
    <div className='mt-30'>
      <div className='text-left'>
        <p>Kinesis velocity tokens are legally and technically limited in supply to 300,000, with no further dilutional releases permitted beyond this level. Any excess tokens not subscribed for will be held by Kinesis Limited and may or may not be sold at a subsequent time no sooner than 1 May 2019 at the prevailing market rates.</p>
        <p>KVTs are being offered sequentially at incremental discount rates until reaching the full price.  With limited supply, the quantity available in each phase cannot be guaranteed and could sell out at anytime!  The pre-sale of KVTs will be offered at a 25% discount on the full token price of $1,000 USD or Ether equivalent.</p>
        <p>The earlier the investment in KVTs, the greater the discount benefit is to the investor. Please see KVT Release Schedule <ScrollLink to='roadmap' spy={true} smooth={true} offset={0} duration={500}><span className='primary_color' style={{cursor: 'pointer'}}>here</span></ScrollLink>.</p>
        <p>If you believe that Kinesis has great potential and could be the monetary system of the future then KVTs provide the greatest exposure to Kinesis’ future success.</p>
      </div>
    </div>
    <div className='mt-40'>
      <h3>Kinesis Velocity Token ITO Fast Facts</h3>
      <ol className="velocity-fast-facts" style={{listStyleType: 'upper-roman', paddingLeft: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
        <li><p>The purchase of a KVT provides exclusive access to the Kinesis digital currency pre-ICO benefits launching on 1 July 2018.</p></li>
        <li><p>Each Kinesis Velocity Token empowers the holder to share in an aggregated pool of 20% of all transaction fees associated with every Kinesis digital currency and a 20% share of commissions from KCC.</p></li>
        <li><p>Discounts are incremental and strictly time limited.</p></li>
        <li><p>Pre-Sale firm commitments are entitled to a discount. This is a limited opportunity that ends on 30th June 2018.</p></li>
        <li><p>You may purchase KVTs with Ethereum or Fiat currency.</p></li>
        <li><p>Tokens will become tradeable on secondary marketplaces and pricing will depend on general market forces.</p></li>
      </ol>
      <p>
        <i style={{fontSize: '16px'}}>
          Read our <a href='/documents/kinesis-blueprint.pdf' className='primary-link' target='_blank'>blueprint</a> for more information.
        </i>
      </p>
    </div>
    <div className='mt-30'>
      <table className='velocity-token-table'>
        <tr>
          <th className='col-md-4 text-right'>Token Name</th>
          <td className='col-md-8 text-left'><strong>Kinesis Velocity Token</strong></td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Symbol</th>
          <td className='col-md-8 text-left'>KVT</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Pre-Sale Timing</th>
          <td className='col-md-8 text-left'>14 February 2018 to 30 June 2018</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Public Sale Timing</th>
          <td className='col-md-8 text-left'>1 July 2018 to 31 August 2018</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Pre-Sale Discount</th>
          <td className='col-md-8 text-left'>2.5%-25%</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Issue price of Tokens</th>
          <td className='col-md-8 text-left'>US$1,000</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Sale Size Limits</th>
          <td className='col-md-8 text-left'>Technically and legally hard capped at 300,000 KVTs.</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Further Token Issues</th>
          <td className='col-md-8 text-left'>There will never be any dilution to the rights of KVT holders</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Secured methods of token purchase</th>
          <td className='col-md-8 text-left'>Fiat & Ethereum (ETH)</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token holder rights & benefits</th>
          <td className='col-md-8 text-left'>20% of all transaction fees of Kinesis digital currency suite. 20% of all commission received from the Kinesis Commercial Centre (KCC). The exclusive right to participate in the Kinesis currency ICO with pre-ICO preferential rates.</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Issuance date</th>
          <td className='col-md-8 text-left'>1 July 2018 and thereafter upon subscription</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Activation date</th>
          <td className='col-md-8 text-left'>Latest 31 August 2018</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Buy-Back Program</th>
          <td className='col-md-8 text-left'>A minimum of 5% of total transaction fees goes towards buying back tokens. Buy-back of tokens increases to 20% of transaction fees if token price goes 5% below listing price</td>
        </tr>
      </table>
    </div>
  </div>
)
