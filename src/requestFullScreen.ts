/**
 * 开启全屏
 * 成功则 resolve , 如果不支持全屏或开启失败则 rejected
 * [MDN Reference] https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullscreen
 */
export async function requestFullScreen(
  ele: HTMLElement = window.document.documentElement,
) {
  const element: any = ele

  const fullScreen =
    element.requestFullscreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullscreen ||
    element.webkitRequestFullscreen

  if (fullScreen) {
    return await fullScreen.call(element)
  }

  return Promise.reject()
}
