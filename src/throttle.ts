/**
 * 节流函数
 * 减少事件执行次数，有规律的执行
 */
export function throttle<T extends (...args: []) => any>(fn: T, ms: number) {
  let timer: any = null

  // eslint-disable-next-line func-names
  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, ms)
  }
}
