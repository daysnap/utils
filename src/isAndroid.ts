/**
 * 校验是否是安卓
 */
export function isAndroid() {
  return /android/.test(navigator.userAgent.toLowerCase())
}
