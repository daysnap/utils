/**
 * 校验是否是ios
 */
export function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
