import * as React from 'react'
import { Spinner } from '../KinesisVelocityToken/Spinner'
const axios = require('axios')

export class Contact extends React.Component<null, {firstName: string, lastName: string, email: string, botCheck: boolean, loading: boolean, successMessage: string, warningMessage: string}> {
  constructor (props) {
    super(props)
    this.state = {firstName: '', lastName: '', email: '', botCheck: false, loading: false, warningMessage: '', successMessage: ''}
  }

  public botFound() {
    this.setState({botCheck: true})
  }

  public async handleSubmit(e) {
    e.preventDefault()
    this.setState({warningMessage: '', successMessage: ''})

    if (this.state.botCheck) {
      console.log('Bot detected')
      return
    }

    if (!this.state.email) {
      this.setState({warningMessage: 'Please enter an email address'})
      return
    }

    this.setState({loading: true})

    try {
      await axios.post('https://kkke5k92gb.execute-api.ap-southeast-2.amazonaws.com/Production/KinesisPromoEmailer', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      })

      this.setState({successMessage: 'Thank you for registering', loading: false})
    } catch (e) {
      // Chrome still crys about CORS, but the request goes through
      this.setState({successMessage: 'Thank you for registering', loading: false})
    }
  }

  public handleField (event) {
    const key = event.target.name
    this.setState({[key]: event.target.value})
  }

  public render () {
    return (
      <div>
        { this.state.loading && <Spinner /> }
        <section className='contact-bg pt-80 pt-80' style={{color: 'white'}} id='contact'>
          <div className='container'>
            <div className='section_title mb-70 text-center'>
              <h2>Register Your Interest</h2>
              <p>Submit your information below and you'll be added to the Kinesis mailing list.</p>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <form onSubmit={(ev) => this.handleSubmit(ev)}>
                  <div className='row'>
                    <div className='form-group col-sm-12'>
                      <label className='sr-only'>First Name</label>
                      <input type='text' className='form-control' name='firstName' value={this.state.firstName} onChange={(ev) => this.handleField(ev)} placeholder='First Name *' />
                    </div>
                    {/* End of .form-group */}
                    <div className='form-group col-sm-12'>
                      <label className='sr-only'>Last Name</label>
                      <input type='text' className='form-control' name='lastName' value={this.state.lastName} onChange={(ev) => this.handleField(ev)} placeholder='Last Name *' />
                    </div>
                    {/* End of .form-group */}
                    <div className='form-group col-sm-12'>
                      <label className='sr-only'>Email</label>
                      <input type='email' className='form-control' name='email' value={this.state.email} onChange={(ev) => this.handleField(ev)} placeholder='Email Address *' required />
                    </div>
                    <input type='text' className='form-control' name='botCheck' onChange={() => this.botFound()} placeholder='you my friend are a bot'  style={{display: 'none'}}/>
                    <div className='col-sm-12 mt-20 mb-20'>
                      <button type='submit' className='btn'>Submit</button>
                    </div>
                  </div>
                  {/* End of .row */}
                </form>
              </div>
            </div>
          </div>
          <div className='container'>
            { this.state.warningMessage && <div className='alert alert-warning'>{this.state.warningMessage}</div> }
            { this.state.successMessage && <div className='alert alert-success'>{this.state.successMessage}</div> }
          </div>
          {/* End of .col-sm-4 */}
        </section>
      </div>
    )
  }
}
