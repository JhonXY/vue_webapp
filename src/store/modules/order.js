const order = {
  state: {
    checkIn: '',
    checkOut: '',
    howLong: '',
    shopName: ''
  },
  mutations: {
    UPDATE_CHECKIN: (state, checkIn) => {
      state.checkIn = checkIn
    },
    UPDATE_CHECKOUT: (state, checkOut) => {
      state.checkOut = checkOut
    },
    UPDATE_HOWLONG: (state, howLong) => {
      state.howLong = howLong
    },
    UPDATE_SHOPNAME: (state, shopName) => {
      state.shopName = shopName
    },
  },
  actions: {
    changeCheckIn: ({ commit }, checkIn) => {
      commit('UPDATE_CHECKIN', checkIn);
    },
    changeCheckOut: ({ commit }, checkOut) => {
      commit('UPDATE_CHECKOUT', checkOut);
    },
    changeHowLong: ({ commit }, howLong) => {
      commit('UPDATE_HOWLONG', howLong);
    },
    changeShopName: ({ commit }, shopName) => {
      commit('UPDATE_SHOPNAME', shopName);
    },
  }
}

export default order