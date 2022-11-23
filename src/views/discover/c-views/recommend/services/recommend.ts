import request from '@/service'

export function getBanner() {
  return request.get({
    url: '/banner'
  })
}
