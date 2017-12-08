// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import AMap from 'vue-amap';
import App from './App';

import store from './store';
import router from './router';
import './utils/rem';
import './scss/index.scss';

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

// 加载用loading效果
router.beforeEach((to, from, next) => {
  store.dispatch('changeLoad', { isLoading: true })
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogined) {
      next({
        path: '/needLogin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  next(); // 必须的
})
router.afterEach((to, from, next) => {
  store.dispatch('changeLoad', { isLoading: false })
})

Vue.config.productionTip = false

// vue-amap
// 使用高德地图
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'b24cb87ddac059194fed7475d6f22ad8',
  plugin: ['AMap.Geolocation', 'AMap.CitySearch', 'AMap.PlaceSearch']
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
