import { isJSONString } from './isJSONString'

/**
 * 解析url参数
 * @param v URl
 * @param k 键名
 */
export function parseQuery(v?: string, k?: string) {
  const url = new URL(v)
  const searchStr = v ? url.search : window.location.search
  const query = new URLSearchParams(decodeURIComponent(searchStr))
  // 单个直接返回
  if (k) return query.get(k)
  const res = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of query.entries()) {
    console.log(key, value)
    res[key] = isJSONString(value) ? JSON.parse(value) : value
  }

  return res
}
