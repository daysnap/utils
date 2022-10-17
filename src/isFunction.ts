/**
 * 校验是否是函数
 */
export function isFunction(val: unknown): val is (...args: any[]) => any {
  return typeof val === 'function'
}
