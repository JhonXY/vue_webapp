const getters = {
  isFirstLoad: state => state.app.isFirstLoad,
  isLoading: state => state.app.isLoading,
  location: state => state.region.location
}

export default getters