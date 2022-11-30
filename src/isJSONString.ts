import { isObject } from './isObject'

/**
 * 是否是JSON 字符串
 * @param v
 */
export function isJSONString(v: string) {
  try {
    const obj = JSON.parse(v)
    return isObject(obj)
  } catch {
    return false
  }
}
