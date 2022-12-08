/**
 * 判断是否是浏览器环境
 */
export function inBrowser() {
  return typeof window !== 'undefined'
}
