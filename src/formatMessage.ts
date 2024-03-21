import { isNull } from './isNull'
import { isObject } from './isObject'
import { isUndefined } from './isUndefined'
import { parsePath } from './parsePath'

/**
 * 格式化消息
 * formatMessage({ a: '123', b: { ba: '456' } }, ['a']) => '123'
 * formatMessage({ a: '123', b: { ba: '456' } }, ['b.ba']) => '456'
 */
export function formatMessage(
  message: unknown,
  keys: string[] = ['message', 'msg', 'errMsg', 'errorMsg'],
): string {
  if (isNull(message) || isUndefined(message)) {
    return ''
  }

  if (!isObject(message)) {
    return `${message}`
  }

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    const val = parsePath(message, key)
    if (!isUndefined(val)) {
      return `${val}`
    }
  }

  return JSON.stringify(message)
}
