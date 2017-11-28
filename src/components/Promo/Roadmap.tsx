import * as React from 'react'

export class Roadmap extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='skills text-left pt-80 pb-80' id='roadmap'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='section_title mb-30 mt-10'>
                  <h2>Roadmap</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='progress-element mb-50'>
                  <p>Transactions</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      <span>95%</span>
                    </div>
                  </div>
                  <p>Concesus</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                      <span>80%</span>
                    </div>
                  </div>
                  <p>ICO</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                      <span>70%</span>
                    </div>
                  </div>
                  <p>Market Share</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                      <span>85%</span>
                    </div>
                  </div>
                  <p>Debit Card</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='content pt-10 pl-80'>
                  <h3>Transactions</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>Concesus</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>ICO</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>Market Share</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>Debit Card</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
