
import pick from './pick'

export const toBase64 = (file: File) => new Promise<FileReader>((resolve, reject) => {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = (res) => resolve(fileReader)
  fileReader.onerror = reject
})

export const toFile = (base64: string, contentType?: string): File => {
  const binaryString = window.atob(base64.split(',')[1])
  const arrayBuffer = new ArrayBuffer(binaryString.length)
  const uint8Array = new Uint8Array(arrayBuffer)
  for (let i = 0, len = binaryString.length; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }
  let blob
  try {
    blob = new Blob([uint8Array])
  } catch (e: any) {
    if (e.name === 'TypeError') {
      const win = (window as any)
      const BlobBuilder: any = win.BlobBuilder
        || win.WebKitBlobBuilder
        || win.MozBlobBuilder
        || win.MSBlobBuilder
      if (BlobBuilder) {
        const blobBuilder = new BlobBuilder()
        blobBuilder.append(arrayBuffer)
        blob = blobBuilder.getBlob(contentType)
      }
    } else {
      throw new Error('版本过低')
    }
  }
  return blob
}

interface CompressOptions {
  width?: number
  height?: number
  quality?: number
}

interface CompressSuccessResult {
  base64: string
  width: string
  height: string
  image: HTMLImageElement
}

export const compress = (image: CanvasImageSource, options: CompressOptions = {}): string => {
  const props = pick(image, ['width', 'height'])
  const { width, height, quality } = Object.assign({}, props, options)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  ctx.fillStyle = `#fff`
  ctx.fillRect(0, 0, width, height)
  ctx.drawImage(image, 0, 0, width, height)
  return canvas.toDataURL('image/jpeg', quality)
}

export const getImageElement = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
  const image = new Image()
  image.onload = () => resolve(image)
  image.onerror = reject
  image.src = src
})

export default {
  toBase64,
  toFile,
  compress,
  getImageElement,
}
