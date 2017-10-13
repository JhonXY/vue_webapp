import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]
export default new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes
})
