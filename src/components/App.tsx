import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { NotFound } from './NotFound'
import { Promo } from './Promo/Promo'


export class App extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Promo} />
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404' />
        </Switch>
      </Router>
    )
  }
}
