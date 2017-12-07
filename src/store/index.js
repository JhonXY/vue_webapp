import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import region from './modules/region'
import order from './modules/order'
import shopCar from './modules/shopCar'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    region,
    order,
    shopCar,
    user
  },
  getters
})

export default store