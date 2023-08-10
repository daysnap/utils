import { isArray } from './isArray'

/**
 * 判断是否是空数组
 */
export function isEmptyArray(val: unknown) {
  return isArray(val) && val.length === 0
}
