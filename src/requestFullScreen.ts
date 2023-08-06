/**
 * 开启全屏
 * 成功则返回true, 如果不支持全屏或开启失败则返回 false
 */
export function requestFullScreen(ele: HTMLElement) {
  const element: any = ele
  const fullScreen =
    element.requestFullscreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullscreen ||
    element.webkitRequestFullscreen

  if (fullScreen) {
    fullScreen.call(element)
  }

  return !!fullScreen
}
