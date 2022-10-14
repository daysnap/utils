/**
 * base64 转 blob
 */
export function base64ToBlob(base64: string, contentType?: string) {
  const [prefix, rest] = base64.split(',')
  const type = contentType ?? prefix.match(/:(.*?);/)?.[1]
  const data = window.atob(rest)
  let len = data.length

  const u8arr = new Uint8Array(len)
  while (len--) {
    u8arr[len] = data.charCodeAt(len)
  }

  return new Blob([u8arr], { type })
}
