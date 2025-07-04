import { formatDate } from './formatDate'

import { normalizeDate } from './normalizeDate'

/**
 * 说明
 */
export function getDateBoundsByMonths(
  monthsCount: number,
  date: string | number | Date,
): [Date, Date]
export function getDateBoundsByMonths(
  monthsCount: number,
  date: string | number | Date,
  fmt: string,
): [string, string]
export function getDateBoundsByMonths(
  monthsCount = 1,
  date: any = new Date(),
  fmt?: string,
): [any, any] {
  const endDate = normalizeDate(date)

  const end = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0)

  const startMonth = end.getMonth() - (monthsCount - 1)
  const start = new Date(end.getFullYear(), startMonth, 1)

  return fmt ? [formatDate(start, fmt), formatDate(end, fmt)] : [start, end]
}
