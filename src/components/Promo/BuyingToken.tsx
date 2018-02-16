import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export const BuyingToken: React.SFC = (props) => (
  <div className='section_title text-center mb-60'>
    <div className='mt-30'>
      <div className='text-left'>
        <p>Register your interest <ScrollLink to='contact' spy={true} smooth={true} offset={0} duration={500}><span style={{cursor: 'pointer'}}>HERE</span></ScrollLink>.</p>
        <p>Be ready with your Ethereum payment to receive your Kinesis Velocity Tokens directly into your ERC20 token compatible eWallet.
        At the nominated date and time, buy your Kinesis Tokens (KVT) by following the user-friendly instructions on our website.</p>
      </div>
    </div>
    <div className='mt-30'>
      <h3>KVT Distribution</h3>
      <div className='text-left'>
        <p>Kinesis Velocity Tokens will be distributed to the eWallet address used to make your purchase. They will be displayed as “distributed/provisional” until full KYC has been performed</p>
        <p>Upon completion of KYC and assessment against the crowd-sale targets , your KVT’s will be activated.</p>
        <p>Once you have received your activated KVT’s you will be eligible to receive 20% of all transaction fees generated by all Kinesis crypto currencies in circulation. By participating in this time-limited token sale, a holder of a KVT  will gain superior ongoing returns based simply on the Kinesis crypto currency which will launch on completion of successful KVT issue.</p>
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
          <td className='col-md-8 text-left'>12 February 2018</td>
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
          <td className='col-md-8 text-left'>Fiat & Ehtereum (ETH)</td>
        </tr>
        <tr>
          <th className='col-md-4 text-right'>Token holder rights & benefits</th>
          <td className='col-md-8 text-left'>20% of all transaction fees of Kinesis cryptocurrency suite. The exclusive right to participate in the Kinesis currency ICO with pre-ICO preferential rates.</td>
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
          <td className='col-md-8 text-left'>A minimum of 5% of total transaction fees goes towards buying back token. Buy-back of tokens increased to 20% of transaction fees if token price goes 5% below listing price</td>
        </tr>
      </table>
    </div>
  </div>
)