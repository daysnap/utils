import { isJSONString } from './isJSONString'

/**
 * 解析url参数
 * @param v URl
 * @param k 键名
 */
export function parseQuery(v?: string, k?: string) {
  let searchStr = ''
  if (!v) {
    searchStr = window.location.search
  } else {
    const url = new URL(v)
    searchStr = url.search
  }
  const query = new URLSearchParams(decodeURIComponent(searchStr))
  // 单个直接返回
  if (k) {
    return query.get(k)
  }

  const res: any = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of query.entries()) {
    res[key] = isJSONString(value) ? JSON.parse(value) : value
  }

  return res
}
