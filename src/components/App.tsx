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
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404' />
        </Switch>
      </Router>
    )
  }
}
