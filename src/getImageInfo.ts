/**
 * 获取图片信息
 */
export function getImageInfo(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.onerror = reject
    image.setAttribute('crossOrigin', 'Anonymous')
    image.src = src
  })
}
