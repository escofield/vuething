import Vue from 'vue'

Vue.directive('loading', {
  inserted: function(el) {
    if (el.className.indexOf('vp-loading') < 0) {
      el.innerHTML =
        "<div class='vp-loading-mask' style='display: none'><div class='vp-spinner'></div></div>"
      el.classList.add('vp-loading')
    }
    if (el.parentNode.className.indexOf('vp-loading-container') < 0) {
      el.parentNode.classList.add('vp-loading-container')
    }
  },
  update: function(el, binding){
    const mask = el.querySelector('.vp-loading-mask')
    mask.style.display = (binding && binding.value === true) ? 'block' : 'none';
  }
})
