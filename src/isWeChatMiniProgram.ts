/**
 * 判断是否是微信小程序web-view环境
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
export function isWeChatMiniProgram() {
  // 从微信7.0.0开始，可以通过判断userAgent中包含miniProgram字样来判断小程序web-view环境。
  return window.navigator.userAgent.toLocaleLowerCase().includes('miniprogram')
}
