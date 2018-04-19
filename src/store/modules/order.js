import { setStore, getStore, removeStore } from '@/utils/storage.js'

const order = {
  state: {
    checkIn: '',
    checkOut: '',
    howLong: '',
    shopName: '',
    currentOrder: '',
    currentFoodOrder: '',
    amount: 0
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
    // 只保持一个持久化暂存
    SAVE_ORDER: (state, options) => {
      console.log(options);
      if(getStore('order')){
        removeStore('order')
      }
      setStore('order', options)
      state.currentOrder = options
      state.amount = options.amount
    },
    // 持久化一个食物订单
    // 只保持一个持久化暂存
    SAVE_FOOD_ORDER: (state, options) => {
      console.log(options);
      if (getStore('foodOrder')) {
        removeStore('foodOrder')
      }
      setStore('foodOrder', options)
      state.currentFoodOrder = options
      // state.amount = options.amount
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
    saveFoodOrder: ({ commit }, options) => {
      commit('SAVE_FOOD_ORDER', options);
    },
  }
}

export default order