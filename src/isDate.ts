/**
 * 判断是否日期 Date
 */
export function isDate(val: unknown): val is Date {
  return val instanceof Date
}
