import { formatDate } from './formatDate'
import { normalizeDate } from './normalizeDate'

/**
 * 获取一周的开始时间和结束时间
 */
export function getWeekBounds(
  value: string | number | Date,
  sundayIsFirstDay: boolean,
): [Date, Date]
export function getWeekBounds(
  value: string | number | Date,
  sundayIsFirstDay: boolean,
  fmt: string,
): [string, string]
export function getWeekBounds(
  value: string | number | Date,
  sundayIsFirstDay = true,
  fmt?: string,
): [any, any] {
  const start = normalizeDate(value)
  const end = new Date(start)
  const day = start.getDay()

  const diffDay = sundayIsFirstDay ? day * -1 : day === 0 ? -6 : 1 - day
  start.setDate(start.getDate() + diffDay)
  end.setDate(start.getDate() + 6)

  return fmt ? [formatDate(start, fmt), formatDate(end, fmt)] : [start, end]
}
