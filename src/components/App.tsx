import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { NotFound } from './NotFound'
import { TokenPage } from './KinesisVelocityToken/Page'

export class App extends React.Component {
  public render() {
    return (
      <Router basename='/'>
        <Switch>
          <Route exact path='/' component={TokenPage} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    )
  }
}
