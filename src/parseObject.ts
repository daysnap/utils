/**
 * 返回对象
 */
export function parseObject<T = any>(path: string, value: any) {
  const result = {}
  const segments = path ? path.split('.') : []
  segments.reduce((res, key, index, arr) => {
    res[key] = index === arr.length - 1 ? value : {}
    return res[key]
  }, result)
  return result as T
}
