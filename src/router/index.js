import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Login from '../pages/Login.vue';
import Region from '../pages/Region.vue';

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/region',
    name: 'region',
    component: Region
  }
]

export default new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes
})
