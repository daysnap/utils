import { formatDate } from './formatDate'
import { normalizeDate } from './normalizeDate'

/**
 * 获取一个时间段的日期
 */
export function getRangeDate(
  sv: string | number | Date,
  ev: string | number | Date,
): Date[]
export function getRangeDate(
  sv: string | number | Date,
  ev: string | number | Date,
  fmt: string,
): string[]
export function getRangeDate(
  sv: string | number | Date,
  ev: string | number | Date,
  fmt?: string,
): any[] {
  const result: any[] = []
  const start = normalizeDate(sv)
  const end = normalizeDate(ev)
  const current = start

  while (current <= end) {
    result.push(fmt ? formatDate(current, fmt) : current)
    current.setDate(current.getDate() + 1)
  }

  return result
}
