/**
 * 校验是否是字符串
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string'
}
