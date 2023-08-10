import { isEmpty } from './isEmpty'
import { isEmptyArray } from './isEmptyArray'
import { isEmptyObject } from './isEmptyObject'
import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * 过滤对象的 undefined null '' 属性，返回一个新对象
 * @param obj 需要过滤的对象
 * @param expand 如果是传的是布尔类型 true， 则还会过滤空数组、空对象的情况
 */
export function filterEmptyValue(
  obj: Record<string, any>,
  expand: boolean | ((key: string, value: any) => boolean) = false,
) {
  return Object.entries(obj).reduce<Record<string, any>>(
    (res, [key, value]) => {
      if (isFunction(expand) && expand(key, value)) {
        res[key] = value
      } else {
        if (!isEmpty(value)) {
          if (expand) {
            if (
              !isEmptyArray(value) &&
              !(isObject(value) && isEmptyObject(value))
            ) {
              res[key] = value
            }
          } else {
            res[key] = value
          }
        }
      }
      return res
    },
    {},
  )
}
