import fetch from '@/utils/fetch.js'

export function register(data) {
  return fetch({
    url: '/users/register',
    method: 'post',
    data
  })
}