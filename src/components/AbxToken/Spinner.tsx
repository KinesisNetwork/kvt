import * as React from 'react'

export class Spinner extends React.Component {
  public render () {
    return (
      <div className='loader_wrapper'>
        <div className='loader text-center'></div>
      </div>
    )
  }
}
