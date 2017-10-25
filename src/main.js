// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import './scss/index.scss'
import store from './store';
import router from './router';
import './utils/rem'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

router.beforeEach((to, from, next) => {
  store.dispatch('changeLoad', { isLoading: true })
  console.log('====================================');
  console.log('before');
  console.log('====================================');
  next(); // 必须的
})

router.afterEach((to, from, next) => {
  store.dispatch('changeLoad', { isLoading: false })
  console.log('====================================');
  console.log('after');
  console.log('====================================');
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
