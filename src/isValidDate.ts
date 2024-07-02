import { normalizeDate } from './normalizeDate'

/**
 * 验证是否有效日期
 */
export function isValidDate(v: string | number | Date) {
  const date = normalizeDate(v)
  return !isNaN(date.getTime())
}
