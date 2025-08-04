import { formatDate } from './formatDate'
import { normalizeDate } from './normalizeDate'

/**
 * 获取月份的开始时间和结束时间
 */
export function getMonthBounds(value: string | number | Date): [Date, Date]
export function getMonthBounds(
  value: string | number | Date,
  fmt: string,
): [string, string]
export function getMonthBounds(
  value: string | number | Date,
  fmt?: string,
): [any, any] {
  const now = normalizeDate(value)
  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
  return fmt ? [formatDate(start, fmt), formatDate(end, fmt)] : [start, end]
}
