/**
 * 分割数组
 */
export function splitArray<T = any>(source: T[], size: number) {
  const result = []
  for (let i = 0, len = source.length; i < len; i += size) {
    result.push(source.slice(i, i + size))
  }
  return result
}
