import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * 深拷贝
 * @param source 需要转换的值
 * */
export function clone<T>(source: T): T {
  if (!isArray(source) && !isObject(source)) {
    return source
  }

  const target = (isArray(source) ? [] : {}) as T
  // eslint-disable-next-line no-restricted-syntax
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = clone(source[key])
    }
  }

  return target
}
