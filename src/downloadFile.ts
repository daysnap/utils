/**
 * 通过 a 标签下载文件
 */
export function downloadFile(
  data: string | Blob | MediaSource,
  options?: {
    fileName?: string
  },
) {
  const a = document.createElement('a')
  a.href = typeof data === 'string' ? data : URL.createObjectURL(data)
  if (options?.fileName) {
    a.download = options.fileName
  }
  a.click()
}
