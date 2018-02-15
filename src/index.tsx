import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import './styles/style.scss'

// Template CSS
import './vendor/css/misc/customicon.css'
import './vendor/css/misc/bootstrap.min.css'
import './vendor/css/misc/magnific-popup.css'
import './vendor/css/misc/owl.carousel.min.css'
import './vendor/css/misc/owl.theme.default.min.css'
import './vendor/css/misc/animate.css'
import './vendor/css/base.css'
import './styles/theme.scss'

// Template JS
import './vendor/js/misc/bootstrap.min.js'
import './vendor/js/misc/plugins.js'
import './vendor/js/misc/particles.js'

ReactDOM.render(
  <App />,
  document.getElementById('example')
)
