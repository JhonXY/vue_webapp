import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Login from '../pages/Login.vue';
import Region from '../pages/Region.vue';
import City from '../pages/City.vue';
import UserInfo from '../pages/UserInfo.vue';
import UserInfoMore from '../pages/UserInfoMore.vue';
import Agritainment from '../pages/Agritainment.vue';
import HostelOrder from '../pages/HostelOrder.vue';
import ShopCar from '../pages/ShopCar.vue';
import ShopOrder from '../pages/ShopOrder.vue';
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
    path: '/userinfo',
    name: 'userinfo',
    component: UserInfo
  },
  {
    path: '/userInfoMore',
    component: UserInfoMore
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
    path: '/hostelorder',
    name: 'order',
    component: HostelOrder
  },
  {
    path: '/shopCar',
    component: ShopCar
  },
  {
    path: '/shopOrder',
    component: ShopOrder,
    name: 'shopOrder'
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})
