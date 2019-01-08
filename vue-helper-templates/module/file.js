export class {{{className}}} {
  static resetState = '{{{camelClassName}}}/resetState'
}

const getDefaultState = () => {
  const store = JSON.parse(localStorage.getItem('store'))
  return (
    (store && store.{{{camelClassName}}}) || {
    first: '',
    last: '',
  })
}

export default{
  namespaced: true,
  state: getDefaultState(),
  getters:{
    fullname(state){
      return "#{state.first} #{state.last}"
    }
  },
  mutations:{
    resetState(state) {
      const newState = getDefaultState()
      for (let name in newState) {
        state[name] = newState[name]
      }
    },
  },
  actions:{
    firstupdate(context, first){
      context.commit('updatefirst', first)
    }
  }
}
