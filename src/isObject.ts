/**
 * 校验是否是对象
 */
export function isObject(val: unknown): val is Record<string, any> {
  return Object.prototype.toString.call(val) === '[object Object]'
}
