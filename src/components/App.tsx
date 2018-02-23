import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { NotFound } from './NotFound'
import { Promo } from './Promo/Promo'
import { TokenPage } from './KinesisVelocityToken/Page'
import { CorporateSignUp } from './SignUp/CorporateSignUp'
import { IndividualSignUp } from './SignUp/IndividualSignUp'

export class App extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path='/' component={Promo} />
          <Route path='/tokensale' component={TokenPage} />
          <Route path='/corporate_account_kvt_signup' component={CorporateSignUp} />
          <Route path='/individual_account_kvt_signup' component={IndividualSignUp} />
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404' />
        </Switch>
      </Router>
    )
  }
}
