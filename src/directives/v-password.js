import Vue from 'vue'
import zxcvbn from 'zxcvbn'

const classNames = [
  'vp-pass-no-score',
  'vp-pass-bad',
  'vp-pass-weak',
  'vp-pass-safe',
  'vp-pass-strong',
]

Vue.directive('password', {
  update: function(el, binding, vnode) {
    const result = zxcvbn(el.value)
    el.classList.remove(...classNames)
    el.classList.add(classNames[result.score])
    vnode.context.$data[binding.expression] = result.score
  },
})
