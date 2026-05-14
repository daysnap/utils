/**
 * 校验是否是函数
 */
export function isFunction<
  T extends (...args: any[]) => any = (...args: any[]) => any,
>(val: unknown): val is T {
  return typeof val === 'function'
}
