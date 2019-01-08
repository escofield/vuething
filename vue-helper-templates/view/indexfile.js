import Vue from 'vue'
import VueRouter from 'vue-router'

{{{rt1}}}

const VueTidyRoutes = require('vue-tidyroutes').default

Vue.use(VueRouter)
const router = new VueRouter({
  routes: VueTidyRoutes.export(),
  mode: 'history',
})

export default router
