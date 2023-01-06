/**
 * 根据在线 url 返回 blob
 */
export function getBlobByUrl(url: string) {
  return new Promise<Blob>((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.responseType = 'blob'
    xhr.onload = () => {
      const { status, response, statusText } = xhr
      if (status >= 200 && status < 300) {
        resolve(response)
      } else {
        reject(new Error(`${statusText}[${status}]`))
      }
    }
    xhr.send()
  })
}
