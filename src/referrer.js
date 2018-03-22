window.getReferrer = function () {
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

    if (typeof(storage) !== 'undefined') {
      if (referrer) {
        storage.setItem('kvtReferrer', referrer)
      } else {
        referrer = storage.getItem('kvtReferrer', referrer)
      }
    }

    return referrer
  } catch (e) {
    console.error(e)
    return
  }
}
