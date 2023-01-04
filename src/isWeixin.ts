/**
 * 是否是微信环境
 */
export function isWeixin() {
  return /MicroMessenger/gi.test(navigator.userAgent)
}
