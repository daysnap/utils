/**
 * 防抖函数
 * 事件频繁触发，只会执行最后一次
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, ms: number) {
  let timer = null

  // eslint-disable-next-line func-names
  return function (...args: Parameters<T>) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, ms)
  }
}
