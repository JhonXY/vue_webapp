const app = {
  state: {
    isFirstLoad: true
  },
  mutations: {
    DELETE_LOAD: state => {
      if (state.isFirstLoad)
        state.isFirstLoad = false
    }
  },
  actions: {
    changeLoadState: ({ commit }) => {
      commit('DELETE_LOAD');
    }
  }
}

export default app
