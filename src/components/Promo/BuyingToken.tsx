import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export const BuyingToken: React.SFC = (props) => (
  <div className='section_title text-center mb-60'>
    <div className='mt-30'>
      <div className='text-left'>
        <p>Register your interest <ScrollLink to='contact' spy={true} smooth={true} offset={0} duration={500}><span className='primary_color' style={{cursor: 'pointer'}}>HERE</span></ScrollLink>.</p>
        <p>Send either Ethereum or fiat as payment to receive your Kinesis Velocity Tokens directly into your ERC20 token compatible eWallet.
        Before it’s too late, buy your Kinesis Tokens (KVT) following the user-friendly instructions on our website.</p>
      </div>
    </div>
    <div className='mt-30'>
      <h3>KVT Distribution</h3>
      <div className='text-left'>
        <p>Kinesis Velocity Tokens will be distributed to the eWallet address used to make your purchase. They will be displayed as “distributed/provisional” until full KYC has been performed [LC3]</p>
        <p>Upon completion of KYC and assessment your KVT’s will be activated at the very latest by 1 May 2018.</p>
        <p>
          Once your KVT’s are activated you will enjoy the benefits of sharing in 20% of the aggregated transaction fees generated by all Kinesis cryptocurrencies in circulation and 20% of the Kinesis Commercial Centre commissions, along with being exposed to any price movements of the KVTs.
          Further, by owning at least one KVT you will be able to enjoy the pre-ICO benefits for the Kinesis cryptocurrency suite opening on 1 May 2018.
        </p>
      </div>
    </div>
  </div>
)
