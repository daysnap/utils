/**
 * 返回对象
 * parseObject('a.b.c', 1) => { a: { b: { c: 1 } } }
 */
export function parseObject<T = Record<string, any>>(
  path: string,
  value: any,
): T {
  const result: any = {}

  const segments = path ? path.split('.') : []
  segments.reduce((res, key, index, arr) => {
    res[key] = index === arr.length - 1 ? value : {}
    return res[key]
  }, result)

  return result
}
