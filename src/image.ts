
export const toBase64: (blob: Blob) => Promise<FileReader> = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(blob)
  fileReader.onload = (res) => resolve(fileReader)
  fileReader.onerror = reject
})

export const toFile = (base64: string, contentType?: string): Blob => {
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

export default {
  toBase64,
  toFile,
}
