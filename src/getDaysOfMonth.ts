/**
 * 获取一个月当中的天数
 */
export function getDaysOfMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate()
}
