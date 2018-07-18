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

const w: any = window
w.getReferrer = function () {
  try {
    var storage = window.localStorage
    var urlParams = window.location.search
    var referrer

    if (window.URLSearchParams) {
      referrer = new window.URLSearchParams(urlParams).get('r')
    } else {
      if (urlParams.length > 0) {
        referrer = urlParams.split('=')[1]
      }
    }

    if (typeof (storage) !== 'undefined') {
      if (referrer) {
        storage.setItem('kvtReferrer', referrer)
      } else {
        referrer = storage.getItem('kvtReferrer')
      }
    }

    return referrer
  } catch (e) {
    console.error(e)
    return
  }
}

w.cleanUri = function () {
  var uri = window.location.toString()
  if (uri.indexOf('?') > 0) {
    var clean_uri = uri.substring(0, uri.indexOf('?'))
    window.history.replaceState({}, document.title, clean_uri)
  }
}

w.getReferrer()

ReactDOM.render(
  <App />,
  document.getElementById('example')
)
