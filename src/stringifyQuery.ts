import { isEmptyObject } from './isEmptyObject'
import { isString } from './isString'

/**
 * 对象转 URLSearchParams
 */
export function stringifyQuery(v: Record<string, any>) {
  if (isEmptyObject(v)) {
    return ''
  }

  const query = new URLSearchParams()
  Object.keys(v).forEach((key) => {
    const value = isString(v[key]) ? v[key] : JSON.stringify(v[key])
    query.append(key, value)
  })

  return query.toString()
}
