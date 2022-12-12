import request from '@/service'

export function getBanner() {
  return request.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return request.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistList(limit = 30) {
  return request.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
