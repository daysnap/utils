import { pick } from './pick'

/**
 * 压缩图片
 */
export function compressImage(image: HTMLImageElement) {
  const { width, height } = pick(image, ['width', 'height'])
  const canvas = document.createElement('canvas')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ctx = canvas.getContext('2d')!
  canvas.width = width as number
  canvas.height = height as number
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  return canvas
}
