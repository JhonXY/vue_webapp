import { setStore, getStore } from '@/utils/storage.js'

const user = {
  state: {
    isLogined: false,
    userInfo: {
      nickname: '登录/注册',
      phone: '登录后享受更多功能'
    },
  },
  mutations: {
    GET_USERINFO: (state, init) => {
      if (init) {
        state.userInfo = init.user
      }
    },
    UPDATE_Logined: (state) => {
      state.isLogined = !state.isLogined
    }
  },
  actions: {
    getUserInfo: ({ commit }) => {
      let init = getStore('userInfo')
      commit('GET_USERINFO', init);
    },
    toggleLogined: ({ commit }) => {
      commit('UPDATE_Logined');
    }
  }
}

export default user;