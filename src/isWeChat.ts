/**
 * 判断是否是微信浏览器
 */
export function isWeChat() {
  return /MicroMessenger/gi.test(window.navigator.userAgent)
}

/**
 * 判断是否是微信浏览器
 * @deprecated 请使用 isWeChat 方法
 */
export function isWeixin() {
  return isWeChat()
}
