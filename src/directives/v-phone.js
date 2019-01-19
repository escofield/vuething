import Vue from 'vue'

const format_phone = function(value) {
  const phoneNums = value.replace(/\D/g, '')
  const pattern = /(\d{0,3})(\d{0,3})(\d{0,4})/
  const match = phoneNums.match(pattern)

  let result = ''

  if (match[1]) {
    result = `${result}(${match[1]}`
  }
  if (match[2] || (match[1] && match[1].length >= 3)) {
    result = `${result}) ${match[2]}`
  }
  if (match[3] || (match[2] && match[2].length >= 3)) {
    result = `${result}-${match[3]}`
  }
  return result
}

const phoneNumber = function(el, binding, vnode) {
  const justNo = binding.value.replace(/\D/g, '')
  if (
    !binding.oldValue ||
    binding.value.length > binding.oldValue.length ||
    justNo.length >= 11
  ) {
    el.value = format_phone(binding.value)
    vnode.context.$data[binding.expression] = el.value
  }
}

Vue.directive('phone', {
  bind: phoneNumber,
  update: phoneNumber,
  inserted: function(el) {
    el.setAttribute('maxlength', 14)
  },
})
