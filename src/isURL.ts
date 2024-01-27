/**
 * 判断是否是链接
 */
export function isUrl(val: string) {
  return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(val)
}
