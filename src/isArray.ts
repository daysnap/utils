/**
 * 判断是否是数组
 * @param val 待判断值
 * @returns 是否
 */
export function isArray(val: unknown): val is any[] {
  return Array.isArray(val)
}
