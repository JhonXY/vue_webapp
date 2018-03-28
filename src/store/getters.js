const getters = {
  // app加载
  isFirstLoad: state => state.app.isFirstLoad,
  isLoading: state => state.app.isLoading,
  // 地区
  location: state => state.region.location,
  // 住店
  checkIn: state => state.order.checkIn,
  checkOut: state => state.order.checkOut,
  howLong: state => state.order.howLong,
  shopName: state => state.order.shopName,
  forOrder: state => state.order,
  // 菜单
  cartList: state => state.shopCar.cartList,
  // 用户相关
  userInfo: state => state.user.userInfo,
  isLogined: state => state.user.isLogined,
  // 店铺相关
  shopId: state => state.shop.shopId,
  shopInfo: state => state.shop.shopInfo,
}

export default getters