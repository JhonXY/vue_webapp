const app = {
  state: {
    isFirstLoad: true,
    isLoading: false
  },
  mutations: {
    DELETE_LOAD: state => {
      if (state.isFirstLoad)
        state.isFirstLoad = false
    },
    UPDATE_LOADING_STATUS: (state, load) => {
      state.isLoading = load.isLoading
    }
  },
  actions: {
    changeLoadState: ({ commit }) => {
      commit('DELETE_LOAD');
    },
    changeLoad: ({ commit }, load) => {
      commit('UPDATE_LOADING_STATUS', load)
    }
  }
}

export default app
