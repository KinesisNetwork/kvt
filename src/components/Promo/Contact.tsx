import * as React from 'react'

export class Contact extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='contact pt-80 pb-50' id='contact'>
          <div className='container'>
            <div className='section_title mb-70 text-center'>
              <h2>contact us</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-8'>
                  <form className='quform' method='post' encType='multipart/form-data'>
                    <div className='row quform-elements'>
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>First Name</label>
                        <input type='text' className='form-control' name='fname' defaultValue='' placeholder='First Name *' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>Last Name</label>
                        <input type='text' className='form-control' name='lname' defaultValue='' placeholder='Last Name *' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>Email</label>
                        <input type='email' className='form-control' name='email' defaultValue='' placeholder='Email Address *' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>Subject</label>
                        <input type='text' className='form-control' name='subj' defaultValue='' placeholder='Subject' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input textarea form-group col-sm-12'>
                        <label className='sr-only'>Message</label>
                        <textarea name='message' className='form-control' placeholder='Enter Your Message *' defaultValue={''} />
                      </div>
                      {/* End of .col-sm-12 */}
                      <div className='col-sm-12 mt-20 mb-20'>
                        <button type='submit' className='btn '>Send Message</button>
                      </div>
                      {/* End of .col-sm-12 */}
                    </div>
                    {/* End of .row */}
                  </form>
                </div>
                {/* End of .content */}
              {/* End of .col-sm-8 */}
              <div className='col-sm-4'>
                <div className='widget text-left mb-40 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>head office</h5>
                  </div>
                  <address>
                    <p><span>address:</span> 1600 Amphitheatre Parkway, Mountain View, CA, 94043</p>
                    <p><span>phone:</span> (+000) 1252 000522</p>
                    <p><span>email:</span> index@email.com</p>
                  </address>
                </div>
              </div>
              </div>
              </div>
              {/* End of .col-sm-4 */}
            </section>
      </div>
    )
  }
}
