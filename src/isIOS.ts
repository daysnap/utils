/**
 * 校验是否是ios
 */
export function isIOS() {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
}
