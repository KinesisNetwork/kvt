import * as React from 'react'
const Script = require('react-load-script')

export class IndividualSignUp extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <Script
        url='https://form.jotform.co/jsform/80518149574867'
      />
    )
  }
}
