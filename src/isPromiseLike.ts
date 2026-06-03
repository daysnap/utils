/**
 * 说明
 */
export const isPromiseLike = <T>(value: unknown): value is PromiseLike<T> =>
  !!value &&
  (typeof value === 'object' || typeof value === 'function') &&
  typeof (value as PromiseLike<T>).then === 'function'
