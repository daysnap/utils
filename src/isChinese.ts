/**
 * 判断是否是中文
 */
export function isChinese(val: string) {
  return /[^\u4e00-\u9fa5]/.test(val)
}
