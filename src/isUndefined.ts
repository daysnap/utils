/**
 * 校验是否是 undefined
 */
export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined'
}
