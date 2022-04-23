
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

interface CompressImageOptions {
  width?: number
  height?: number
  quality?: number
}

export const compressImage = (image: CanvasImageSource, options: CompressImageOptions = {}): string => {
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

export const getBlobByUrl = (url: string) => new Promise<Blob>((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
  xhr.responseType = 'blob'
  xhr.onload = () => {
    const { status, response, statusText } = xhr
    status === 200 ? resolve(response) : reject(statusText)
  }
  xhr.onerror = reject
  xhr.send()
})

export const downloadFile = (data: string | Blob | MediaSource) => {
  const a = document.createElement('a')
  a.href = typeof data === 'object' ? window.URL.createObjectURL(data) : data
  a.click()
  window.URL.revokeObjectURL(a.href)
}

export default {
  toBase64,
  toFile,
  compressImage,
  getImageElement,
  getBlobByUrl,
  downloadFile,
}
