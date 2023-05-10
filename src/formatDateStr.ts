/**
 * str 转换成 date
 */
export function formatDateStr(v: string) {
  return new Date(v.replace(/-/g, '/'))
}
