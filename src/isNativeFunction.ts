import { isFunction } from './isFunction'

/**
 * 判断是不是内置函数
 * 内置函数toString后的主体代码块为 [native code]
 */
export function isNativeFunction(val: unknown) {
  return isFunction(val) && /native code/.test(val.toString())
}
