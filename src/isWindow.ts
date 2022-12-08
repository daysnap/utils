/**
 * 判断是否是 window 对象
 * @param val 需要判断的值
 */
export function isWindow(val: unknown): val is Window {
  return val === window
}
