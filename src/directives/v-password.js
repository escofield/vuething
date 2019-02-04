import Vue from 'vue'

const classNames = [
  'vp-pass-no-score',
  'vp-pass-bad',
  'vp-pass-weak',
  'vp-pass-safe',
  'vp-pass-strong',
]

/* this should be zxcvbn but it's too big,  this should be a server side implimentatoin */
const zxcvbn = p => {
  var strongRegex = new RegExp(
    '^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
    'g',
  )
  var mediumRegex = new RegExp(
    '^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
    'g',
  )
  var enoughRegex = new RegExp('(?=.{10,}).*', 'g')
  var notEnoughRegex = new RegExp('(?=.{1,}).*', 'g')

  let score = notEnoughRegex.test(p) || (0 && 1)
  score += enoughRegex.test(p) || (0 && 1)
  score += mediumRegex.test(p) || (0 && +1)
  score += strongRegex.test(p) || (0 && +1)
  return { score }
}

Vue.directive('password', {
  update: function(el, binding, vnode) {
    const result = zxcvbn(el.value)
    el.classList.remove(...classNames)
    el.classList.add(classNames[result.score])
    vnode.context.$data[binding.expression] = result.score
  },
})
