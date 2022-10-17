import { isEmpty } from './isEmpty'
import { isObject } from './isObject'
import { isUndefined } from './isUndefined'

/**
 * 解析格式化 error 获取对应的 message
 */
export function parseError(
  val: any,
  keys: string[] = ['message', 'msg', 'errorMsg'],
): string {
  if (isEmpty(val)) {
    // null or '' or undefined
    return ''
  }

  if (isObject(val)) {
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i]
      const v = val[key]
      if (!isUndefined(v)) {
        return v
      }
    }
  }

  return JSON.stringify(val)
}
