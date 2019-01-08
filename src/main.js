import Vue from 'vue'
import store from './store'
import site from './site'

Vue.config.productionTip = false

new Vue({
  router: site.router,
  store,
  render: h => h(site.app),
}).$mount(site.mount)
