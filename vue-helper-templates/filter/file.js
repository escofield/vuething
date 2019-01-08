import Vue from 'vue'

Vue.filter('{{{name}}}', (value) => {
  let retVal = value
  if (retVal) {
    retVal = retVal.toString()
    retVal = retVal.charAt(0).toUpperCase() + retVal.slice(1)
  }
  return retVal
})
