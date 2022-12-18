import request from '@/service'

export function getSongDetail(ids: number) {
  return request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
