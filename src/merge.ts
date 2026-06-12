import { isObject } from './isObject'

/**
 * 深度合并对象，返回新对象
 */
export function merge<R extends Record<string, any> = any>(
  target: Record<string, any>,
  ...sources: Record<string, any>[]
): R {
  sources.forEach((source) => {
    if (!isObject(source)) {
      return
    }

    Object.keys(source).forEach((key) => {
      const sourceValue = source[key]
      const targetValue = target[key]

      if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = merge(targetValue, sourceValue)
      } else {
        target[key] = sourceValue
      }
    })
  })

  return target as R
}
