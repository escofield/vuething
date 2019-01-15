import Vue from 'vue'
import format from '../utils/format-phone'

Vue.filter('phone', value => {
  return format(value)
})
