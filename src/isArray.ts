/**
 * 判断是否是数组
 * @param val 待判断值
 * @returns 是否
 */
export function isArray<T = any>(val: unknown): val is T[] {
  return Array.isArray(val)
}
