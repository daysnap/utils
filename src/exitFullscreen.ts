/**
 * 退出全屏
 * 成功则 resolve , 如果不支持退出全屏或退出失败则 rejected
 * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen)
 */
export async function exitFullscreen() {
  const doc: any = window.document

  const exit =
    doc.exitFullscreen ||
    doc.msExitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen

  if (exit) {
    return await exit()
  }

  return Promise.reject()
}
