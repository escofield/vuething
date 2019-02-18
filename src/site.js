import Vue from 'vue'
import router from './views/index'
import App from './App.vue'
import './components/index'
import './directives/index'
import './theme/dark-theme.css'
import './theme/light-theme.css'
import './theme/variables.css'
import './theme/site.css'
import './theme/vp.css'
import './theme/icons.css'

import layout_authenticated from './layout.authenticated'
import layout_default from './layout.default'
import layout_customer_service from './layout.customer-service'

Vue.component('layout-default', layout_default)
Vue.component('layout-authenticated', layout_authenticated)
Vue.component('layout-customer-service', layout_customer_service)

export default { router, app: App, mount: '#app' }
