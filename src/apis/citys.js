import fetch from '@/utils/fetch.js'

export function getCitys(params){
  return fetch({
    url: '/v1/cities',
    method: 'get',
    params
  })
}
