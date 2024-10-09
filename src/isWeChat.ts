/**
 * 判断是否是微信浏览器
 */
export function isWeChat() {
  return /MicroMessenger/gi.test(window.navigator.userAgent)
}

/**
 * 判断是否是微信浏览器
 * @deprecated 请使用 @see {@link isWeChat}.
 */
export function isWeixin() {
  return isWeChat()
}
