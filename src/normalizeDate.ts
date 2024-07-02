import { isString } from './isString'

/**
 * 格式化日期
 * fix iOS 日期时间格式如果类似是 2020-12-12 12:12:12 就会报错的问题
 * 2020/12/12 12:12:12 这种就是通用的
 */
export function normalizeDate(value: string | number | Date) {
  if (isString(value)) {
    value = value.replace(/-/g, '/')
  }
  return new Date(value)
}
