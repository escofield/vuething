  
export default {
  install(Vue, options) {
    Vue.prototype.$toast = {
      info(message) {
        const userRole = store.getters[Auth.userRole]
        return roleMap[permission][userRole]
      },
      info(message) {
          const userRole = store.getters[Auth.userRole]
          return roleMap[permission][userRole]
      },
      info(message) {
        const userRole = store.getters[Auth.userRole]
        return roleMap[permission][userRole]
      },
      info(message) {
          const userRole = store.getters[Auth.userRole]
          return roleMap[permission][userRole]
      },
    }
  }
}