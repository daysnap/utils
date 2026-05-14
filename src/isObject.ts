/**
 * 校验是否是对象
 */
export function isObject<T extends Record<string, any> = Record<string, any>>(
  val: unknown,
): val is T {
  return Object.prototype.toString.call(val) === '[object Object]'
}
