import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export const MoreKvtInfo: React.SFC = (props) => (
  <div className='section_title text-center mb-60'>
    <div className='mt-30'>
      <div className='text-left'>
        <p>Kinesis velocity tokens are strictly limited in supply with no subsequent additional releases permitted.</p>
        <p>KVT are being offered sequentially in phases of incrementing price rates until reaching the full price  WIth limited supply the quantity available in each phase can not be guarantees and could sell out at anytime!   Pre-sale of KVT will be offered at up to 25% discount on maximum token price of Ether equivalent of $1000 USD.</p>
        <p>The earlier the investments in KVTs the greater the benefit to the investor as the currency comes into circulation. Please see KVT Release Schedule <ScrollLink to='roadmap' spy={true} smooth={true} offset={0} duration={500}><span className='primary_color' style={{cursor: 'pointer'}}>here</span></ScrollLink>.</p>
        <p>If you believe that Kinesis has great potential and could be the monetary system of the future then KVTs provide the greatest exposure to Kinesis’ future success and they are only being offered once.</p>
      </div>
    </div>
    <div className='mt-40'>
      <h3>Kinesis Velocity Token Fast Facts</h3>
      <ol className="velocity-fast-facts" style={{listStyleType: 'upper-roman', paddingLeft: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
        <li><p>Each Kinesis Velocity Token empowers the holder to share in a 20% share of all transaction fees associated with each Kinesis Currency.</p></li>
        <li><p>Pre-Sale firm commitments are entitled to a 25% discount. This is a limited opportunity and ends on 1st March 2018.</p></li>
        <li><p>You may purchase the Kinesis Velocity Token with Ethereum, or Fiat currency.</p></li>
        <li><p>Tokens may become tradeable on secondary marketplaces and pricing will depend on general market forces</p></li>
      </ol>
      <p>
        <i style={{fontSize: '16px'}}>
          Pre-sale discounts of up to 25% are currently on offer.
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
          <td className='col-md-8 text-left'>14 February 2018</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Public Sale Timing</th>
          <td className='col-md-8 text-left'>1 March 2018</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Pre-Sale Discount</th>
          <td className='col-md-8 text-left'>25%</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Issue price of Tokens</th>
          <td className='col-md-8 text-left'>USD$1000</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Sale Size Limits</th>
          <td className='col-md-8 text-left'>Technically and legally hard capped at 300,000 KVTs. Post 250,000 subscribed a maximum of 5 KVTs available per subscriber for this offer. KVTs not sold will be held for a subsequent issue no sooner than 1 May 2019 at the prevailing market price.</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Further Token Issuance</th>
          <td className='col-md-8 text-left'>No, there will never be any dilution to the rights of KVT holders</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Secured methods of token purchase</th>
          <td className='col-md-8 text-left'>Fiat & Ethereum (ETH)</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token holder rights & benefits</th>
          <td className='col-md-8 text-left'>20% of all transaction fees of Kinesis cryptocurrency suite. 20% of all commission received from the Kinesis Commercial Centre (KCC). The exclusive right to participate in the Kinesis currency ICO with pre-ICO preferential rates.</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Issuance date</th>
          <td className='col-md-8 text-left'>Immediately as subscribed</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Activation date</th>
          <td className='col-md-8 text-left'>Latest 1 May 2018</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token Buy-Back Program</th>
          <td className='col-md-8 text-left'>A minimum of 5% of total transaction fees goes towards buying back tokens. Buy-back of tokens increases to 20% of transaction fees if token price goes 5% below listing price</td>
        </tr>
      </table>
    </div>
  </div>
)
