import { normalizeDate } from './normalizeDate'

/**
 * 获取星期几
 */
export function getWeekday(
  value: string | number | Date = new Date(),
  prefix = '周',
) {
  const days = ['日', '一', '二', '三', '四', '五', '六']
  const date = normalizeDate(value)
  return `${prefix}${days[date.getDay()]}`
}
