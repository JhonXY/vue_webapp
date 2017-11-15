import { setStore, getStore} from '@/utils/storage.js'

const shopCar = {
  state: {
    cartList: {}
  },
  mutations: {
    ADD_CART: (state, options) => {
      let cart = state.cartList;
      let shop = cart[options.shopId] = (cart[options.shopId] || {});
      let category = shop[options.category_id] = (shop[options.category_id] || {});
      let food = category[options._id] = (category[options._id] || {});
      if (food[options._id]) {
        food[options._id]['num']++;
      } else {
        food[options._id] = {
          "num": 1,
          "id": options._id,
          "name": options.name,
          "price": options.price,
        };
      }
      state.cartList = { ...cart };
      setStore('shopCart', state.cartList);
    },
    REMOVE_CART: (state, options) => {
      let cart = state.cartList;
      let shop = cart[options.shopId] = (cart[options.shopId] || {});
      let category = shop[options.category_id] = (shop[options.category_id] || {});
      let food = category[options._id] = (category[options._id] || {});
      if (food[options._id] && food[options._id]['num'] && food[options._id]['num']>0) {
        food[options._id]['num']--;
        state.cartList = { ...cart };
        setStore('shopCart', state.cartList);
      } else {
        food[options._id] = null;
        state.cartList = { ...cart }; //
        setStore('shopCart', state.cartList); //
      }
    },
    CLEAR_CART: (state, shopId) => {
      let cart = state.cartList;
      cart[shopId] = null;
      state.cartList = { ...cart };
      setStore('shopCart', state.cartList);
    },
    INIT_CART: (state) => {
      let init = getStore('shopCart')
      if(init) {
        state.cartList = JSON.parse(init)
      }
    }
  },
  actions: {
    addCart: ({ commit }, options) => {
      commit('ADD_CART', options);
    },
    removeCart: ({ commit }, options) => {
      commit('REMOVE_CART', options);
    },
    clearCart: ({ commit }, shopId) => {
      commit('CLEAR_CART', shopId);
    }
  }
}

export default shopCar