import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import region from './modules/region'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    region
  },
  getters
})

export default store