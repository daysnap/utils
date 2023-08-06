/**
 * 缓存、记忆函数，缓存函数的运算结果
 * 需注意缓存的函数得是纯函数
 */
export function cached<T extends (...args: any[]) => any>(fn: T) {
  const cache = Object.create(null)
  return function cachedFn(...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args)
    const hit = cache[key]
    return hit || (cache[key] = fn(...args))
  }
}
