/**
 * str 转换成 date
 * fix iOS 日期时间格式如果是 - 就会报错的问题
 * @deprecated 请使用 normalizeDate() 方法
 */
export function formatDateStr(v: string) {
  return new Date(v.replace(/-/g, '/'))
}
