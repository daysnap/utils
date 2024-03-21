/**
 * base64 转 blob
 * @param base64 base64字符串
 * @param contentType 文件类型
 */
export function base64ToBlob(base64: string, contentType?: string) {
  const [prefix, rest] = base64.split(',')
  const type = contentType ?? prefix.match(/:(.*?);/)?.[1]

  // 还是选用直接 atob
  // const data = inBrowser()
  //   ? window.atob(rest)
  //   : Buffer.from(rest, 'base64').toString('binary')
  const data = atob(rest)
  let len = data.length
  const u8arr = new Uint8Array(len)

  while (len--) {
    u8arr[len] = data.charCodeAt(len)
  }

  return new Blob([u8arr], { type })
}
