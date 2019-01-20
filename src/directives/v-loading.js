import Vue from 'vue'

Vue.directive('loading', {
  inserted: function(el) {
    if (el.className.indexOf('vp-loading') < 0) {
      el.innerHTML =
        "<div class='vp-loading-mask'><div class='vp-spinner'></div></div>"
      el.classList.add('vp-loading')
    }
    if (el.parentNode.className.indexOf('vp-loading-container') < 0) {
      el.parentNode.classList.add('vp-loading-container')
    }
  },
})
