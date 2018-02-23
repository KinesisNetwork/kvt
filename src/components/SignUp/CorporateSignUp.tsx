import * as React from 'react'
import Script from 'react-load-script'

export class CorporateSignUp extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <Script
        url='https://form.jotform.co/jsform/80511286474861'
      />
    )
  }
}
