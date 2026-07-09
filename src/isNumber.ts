/**
 * 判断是否是数字
 * @param val 需要判断的值
 */
export function isNumber(val: unknown): val is number {
  return typeof val === 'number' && Number.isFinite(val)
}
