import fetch from '@/utils/fetch.js'
import { getStore } from '@/utils/storage';

export function register(data) {
  return fetch({
    url: '/users/register',
    method: 'post',
    data
  })
}

export function alipay(data) {
  return fetch({
    url: '/users/alipay',
    method: 'post',
    data
  })
}

export function userInfo(params) {
  return fetch({
    url: '/users/userInfo',
    method: 'get',
    params
  })
}

// 提交hotel订单
export function hotelOrderSub(data) {
  const token = getStore('token')
  return fetch({
    url: '/orders/subHotelOrder',
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + token.token
    },
    data
  })
}

// 提交食品订单
export function foodOrderSub(data) {
  const token = getStore('token')
  return fetch({
    url: '/orders/subFoodOrder',
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + token.token
    },
    data
  })
}
// 提交hotel订单
// export function hotelOrderSub(data) {
//   return fetch({
//     url: '/orders/hotelOrderSub',
//     method: 'post',
//     data
//   })
// }