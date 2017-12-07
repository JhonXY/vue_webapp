const getters = {
  isFirstLoad: state => state.app.isFirstLoad,
  isLoading: state => state.app.isLoading,
  location: state => state.region.location,
  checkIn: state => state.order.checkIn,
  checkOut: state => state.order.checkOut,
  howLong: state => state.order.howLong,
  shopName: state => state.order.shopName,
  cartList: state => state.shopCar.cartList,
  userInfo: state => state.user.userInfo,
  isLogined: state => state.user.isLogined,
}

export default getters