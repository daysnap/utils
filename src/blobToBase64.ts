/**
 * blob 转 base64
 */
export function blobToBase64(blob: Blob) {
  return new Promise<string | ArrayBuffer>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (res) => {
      resolve(res.target?.result ?? '')
    }
    fileReader.onerror = reject
    fileReader.readAsDataURL(blob)
  })
}
