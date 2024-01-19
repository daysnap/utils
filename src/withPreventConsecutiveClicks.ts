/**
 * 防止连续点击
 */
export function withPreventConsecutiveClicks<
  T extends (...args: any[]) => Promise<any>,
>(fn: T, ms?: number) {
  let flag = false
  return async function (this: unknown, ...args: any[]) {
    if (flag) {
      return
    }
    flag = true
    try {
      return await fn.apply(this, args)
      // eslint-disable-next-line no-useless-catch
    } catch (err) {
      throw err
    } finally {
      if (ms) {
        setTimeout(() => (flag = false), ms)
      } else {
        flag = false
      }
    }
  } as T
}
