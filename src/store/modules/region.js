const region = {
  state: {
    location: '上海'
  },
  mutations: {
    UPDATE_LOCATION: (state, location) => {
      state.location = location
    }
  },
  actions: {
    changeLocation: ({ commit }, location) => {
      commit('UPDATE_LOCATION', location);
    }
  }
}

export default region
