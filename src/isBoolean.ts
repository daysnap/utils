/**
 * 判断是否是布尔值
 * @param val 需要判断的值
 */
export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}
