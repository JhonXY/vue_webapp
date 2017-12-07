import fetch from '@/utils/fetch';

export function login(params){
  return fetch({
    url: '/users/login',
    method: 'get',
    params
  })
}