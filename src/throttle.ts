/**
 * 节流函数，时间戳模式
 * 减少事件执行次数，有规律的执行，事件触发后立即执行
 */
export function throttleLeading<T extends (...args: any[]) => any>(
  fn: T,
  ms: number,
) {
  let pre = 0

  // eslint-disable-next-line func-names
  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now()
    if (now - pre >= ms) {
      fn.apply(this, args)
      pre = now
    }
  }
}

/**
 * 节流函数，定时器模式
 * 减少事件执行次数，有规律的执行，事件触发后延迟执行
 */
export function throttleTrailing<T extends (...args: any[]) => any>(
  fn: T,
  ms: number,
) {
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

/**
 * 节流函数
 * 减少事件执行次数，有规律的执行
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  ms: number,
  mode: 'leading' | 'trailing' = 'trailing',
) {
  return mode === 'leading' ? throttleLeading(fn, ms) : throttleTrailing(fn, ms)
}
