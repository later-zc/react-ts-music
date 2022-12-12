export function formatCount(count: number) {
  return count > 10_0000 ? Math.floor(count / 10000) + '万' : count
}

export function getImgSize(
  imgUrl: string,
  width: number,
  height: number = width
) {
  return `${imgUrl}?param=${width}x${height}`
}
