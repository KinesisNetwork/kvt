import * as React from 'react'

export const Contact: React.SFC = () => {
  return (
    <div>
      <section className='startup pt-80 pt-80' id='contact'>
        <div className='container'>
          <div className='section_title mb-70 text-center'>
            <h2>Register Your Interest</h2>
            <p>Submit your information below and you'll be added to the Kinesis mailing list.</p>
          </div>
          {/* End of .section_title */}
          <div className='row'>
            <div className='col-sm-6'>
              <form className='quform' method='post' encType='multipart/form-data'>
                <div className='row quform-elements'>
                  <div className='quform-input form-group col-sm-12'>
                    <label className='sr-only'>First Name</label>
                    <input type='text' className='form-control' name='fname' defaultValue='' placeholder='First Name *' required />
                  </div>
                  {/* End of .form-group */}
                  <div className='quform-input form-group col-sm-12'>
                    <label className='sr-only'>Last Name</label>
                    <input type='text' className='form-control' name='lname' defaultValue='' placeholder='Last Name *' required />
                  </div>
                  {/* End of .form-group */}
                  <div className='quform-input form-group col-sm-12'>
                    <label className='sr-only'>Email</label>
                    <input type='email' className='form-control' name='email' defaultValue='' placeholder='Email Address *' required />
                  </div>
                  <div className='col-sm-12 mt-20 mb-20'>
                    <button type='submit' className='btn '>Submit</button>
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
                  <h5 className='text-uppercase'>Head Office</h5>
                </div>
                <address>
                  <p><strong className='text-uppercase'>address:</strong> 1600 Amphitheatre Parkway, Mountain View, CA, 94043</p>
                  <p><strong className='text-uppercase'>phone:</strong> (+000) 1252 000522</p>
                  <p><strong className='text-uppercase'>email:</strong> index@email.com</p>
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
