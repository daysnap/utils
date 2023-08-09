import { isEmpty } from './isEmpty'

/**
 * 过滤对象的 undefined null '' 属性，返回一个新对象
 */
export function filterEmptyValue(obj: Record<string, any>) {
  return Object.entries(obj).reduce<Record<string, any>>(
    (res, [key, value]) => {
      if (!isEmpty(value)) {
        res[key] = value
      }
      return res
    },
    {},
  )
}
