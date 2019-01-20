import Vue from 'vue'

Vue.directive('body-overflow', {
  update: function(el, binding, vnode) {
    document.body.classList.remove('vp-body-no-scroll')
    if (vnode.context.$data[binding.expression]) {
      document.body.classList.add('vp-body-no-scroll')
    }
  },
})
