
export const toBase64: (blob: Blob) => Promise<FileReader> = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(blob)
  fileReader.onload = (res) => resolve(fileReader)
  fileReader.onerror = reject
})

export const toFile = (base64: string, type: 'png | gif') => {
  const binaryString = window.atob(base64.split(',')[1])
  const arrayBuffer = new ArrayBuffer(binaryString.length)
  const uint8Array = new Uint8Array(arrayBuffer)
  for (let i = 0, len = binaryString.length; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }
  let blob
  try {
    blob = new Blob([uint8Array])
  } catch (e) {
    const BlobBuilder =
    window.BlobBuilder
  }
}

export default {
  toBase64,
}
