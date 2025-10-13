/**
 * blob 转 base64
 */
export function blobToBase64(blob: Blob, contentType?: string) {
  return new Promise<string | ArrayBuffer>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (res) => {
      const result = res.target?.result
      if (result && typeof result === 'string' && contentType) {
        // 如果指定了contentType，替换data URL中的MIME类型
        const [, data] = result.split(',')
        resolve(`data:${contentType};base64,${data}`)
      } else {
        resolve(result ?? '')
      }
    }
    fileReader.onerror = reject
    fileReader.readAsDataURL(blob)
  })
}
