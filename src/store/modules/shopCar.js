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
    }
  },
  actions: {
    addCart: ({ commit }, options) => {
      commit('ADD_CART', options);
    }
  }
}

export default shopCar