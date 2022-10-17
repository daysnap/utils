/**
 * 校验是否是 promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return val instanceof Promise || !!(val as any).then || !!(val as any).catch
}
