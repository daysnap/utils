/**
 * 判断浏览器是否是 ie
 * 如果是 ie 则会返回对应 ie 版本
 * 如果不是则返回false
 */
export function isIE(): false | number {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf('MSIE ')

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
  }
  const trident = ua.indexOf('Trident/')
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:')
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
  }
  // https://learn.microsoft.com/zh-cn/microsoft-edge/web-platform/user-agent-guidance
  // https://learn.microsoft.com/zh-cn/microsoft-edge/web-platform/user-agent-guidance#microsoft-edge-legacy
  const edge = ua.indexOf('Edge/')
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
  }

  return false
}
