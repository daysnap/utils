/**
 * 解析成Date
 * @deprecated 请使用 normalizeDate() 方法
 */
export function parseDate(v: string | Date | number): Date {
  if (typeof v === 'string') {
    // fix ios 格式日期错误
    // eslint-disable-next-line no-param-reassign
    v = v.replace(/-/g, '/')
  }
  return new Date(v)
}
