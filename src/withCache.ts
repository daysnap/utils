/**
 * 缓存函数
 */
export function withCache<T extends (...args: any[]) => any>(fn: T) {
  const cache: Record<string, any> = {}
  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args)

    const hit = cache[key]
    if (hit) {
      return hit
    }

    const res = fn(...args)
    if (res instanceof Promise) {
      return res.then((res) => {
        return (cache[key] = res)
      })
    }

    return (cache[key] = res)
  } as T
}
