
import fetch from '@/utils/fetch';
import { getStore } from '@/utils/storage';

export function getHotels(params) {
  return fetch({
    url: '/shops/getHotels',
    method: 'get',
    headers: {
      'Authorization': 'Bearer '
    },
    params
    // params会将参数存到url后
  })
}

export function getShopsList(params) {
  return fetch({
    url: '/shops/getShopsList',
    method: 'get',
    headers: {
      'Authorization': 'Bearer '
    },
    params
    // params会将参数存到url后
  })
}