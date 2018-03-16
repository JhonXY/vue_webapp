import { setStore, getStore } from '@/utils/storage.js'

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
    // 持久化一个住店订单
    SAVE_ORDER: (state, options) => {
      console.log(state);
      console.log(options);
      let obj = {

      }
      setStore('order')
    }
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
    saveOrder: ({ commit }, options) => {
      commit('SAVE_ORDER', options);
    },
  }
}

export default order