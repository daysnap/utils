import { isEmptyObject } from './isEmptyObject'

/**
 * 说明
 */
export function stringifyQuery(v: object) {
  if (isEmptyObject(v)) return ''
  const query = new URLSearchParams()
  Object.keys(v).forEach((key) => {
    const value = typeof v[key] === 'string' ? v[key] : JSON.stringify(v[key])
    query.append(key, value)
  })
  return query.toString()
}
