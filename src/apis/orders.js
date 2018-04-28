import fetch from '@/utils/fetch.js'
import { getStore } from '@/utils/storage';

// 读取hotel订单
// 0 待付 1 已付 2 已完成 3 已退款
export function getOrders(id, status) {
  const token = getStore('token')
  return fetch({
    url: '/orders/getHotelOrder',
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token.token
    },
    params: {
      userId: id,
      status
    }
  })
}
// 读取食物订单
export function getFoodOrders(id, status) {
  const token = getStore('token')
  return fetch({
    url: '/orders/getFoodOrder',
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token.token
    },
    params: {
      userId: id,
      status
    }
  })
}