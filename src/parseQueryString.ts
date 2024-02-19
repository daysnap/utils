/**
 * 解析 url 参数
 *
 * 在不支持 URLSearchParams 的环境下使用该方法
 */
export function parseQueryString<T extends Record<string, any>>(value: string) {
  return decodeURIComponent(value)
    .split('&')
    .reduce<Record<string, any>>((res, item) => {
      const [key, value] = item.split('=')
      res[key] = value
      return res
    }, {}) as T
}
