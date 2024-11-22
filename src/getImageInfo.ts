/**
 * 获取图片信息
 */
export function getImageInfo(src: string, attrs: Record<string, any> = {}) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.onerror = reject
    Object.assign(image, attrs)
    // fix 加载本地图片报错
    // image.setAttribute('crossOrigin', 'Anonymous')
    image.src = src
  })
}
