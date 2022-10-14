/**
 * 获取 video 信息
 */
export function getVideoInfo(src: string) {
  return new Promise<HTMLVideoElement>((resolve, reject) => {
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.muted = true
    video.onerror = reject
    video.onloadedmetadata = () => {
      resolve(video)
    }
    video.src = src
  })
}
