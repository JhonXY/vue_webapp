import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Login from '../pages/Login.vue';
import Region from '../pages/Region.vue';
import City from '../pages/City.vue';
import Agritainment from '../pages/Agritainment.vue';
import Order from '../pages/order.vue';
import ShopCar from '../pages/ShopCar.vue';
import MoreDetails from '../pages/agritainment/MoreDetails.vue';
import MapDirection from '../pages/agritainment/MapDirection.vue';

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
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },
  {
    path: '/agritainment',
    name: 'agritainment',
    component: Agritainment,
    children: [
      {
        path: 'more',
        component: MoreDetails
      },
      {
        path: 'mapDirection',
        component: MapDirection
      },
    ]
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/shopCar',
    component: ShopCar
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})
