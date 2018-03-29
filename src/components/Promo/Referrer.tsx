import * as React from 'react'

export class Referrer extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='services pt-80 pb-80' style={{color: 'white'}} id='referrer'>
          <div className='container'>
            <div className='section_title text-center'>
              <h2>Kinesis Velocity Token Referral Program</h2>

              <p><strong>The Kinesis Velocity Token (KVT) Pre-Sale Referral Program is now open for enrolment.</strong></p>

              <p>The KVT Pre-Sale Referral Program has been designed with simplicity in mind, making it easy for everyone to participate.</p>
              <p>By participating in this referral program, you are unlocking even more yield! Referrers earn a generous fixed 3% of the value of KVT purchased in each referred qualified transaction.</p>
              <p>Needless to say, these generous commission rates will not last and therefore, enrolment is critical in ensuring you maximise your earning potential. Each KVT earned lowers your average KVT investment cost or increases your overall stake in the yield sharing economy.Enrolment is now open with -  more information available in  the documentation within the application.</p>

              <a style={{ paddingLeft: '12px', paddingRight: '12px', marginBottom: '40px'}} href='/individual_referrer_application.html' className='ml-5 mr-5 mb-20 btn prehighlight'>Enrol Here</a>

              <p>Simply complete the online enrolment form to receive your unique URL to the KVT purchase applications and be at the forefront of introducing Kinesis to your network and the world at large!</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
