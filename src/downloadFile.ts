/**
 * 通过 a 标签下载文件
 */
export function downloadFile(
  data: string | Blob | MediaSource,
  options?: { fileName?: string },
) {
  const isBlob = typeof data !== 'string'
  const url = isBlob ? URL.createObjectURL(data) : data

  const a = document.createElement('a')
  a.href = url
  a.style.display = 'none'
  if (options?.fileName) {
    a.download = options.fileName
  }
  document.body.appendChild(a)
  a.click()
  a.remove()

  if (isBlob) {
    // 延迟释放，确保下载已启动
    setTimeout(() => URL.revokeObjectURL(url), 0)
  }
}
