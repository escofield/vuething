import Vue from 'vue'
import format from '../utils/format-phone'

Vue.directive('phone-number', function(el, binding, vnode) {
  const justNo = binding.value.replace(/\D/g, '')
  if (
    !binding.oldValue ||
    binding.value.length > binding.oldValue.length ||
    justNo.length >= 11
  ) {
    el.value = format(binding.value)
    vnode.context.$data[binding.expression] = el.value
  }
})
