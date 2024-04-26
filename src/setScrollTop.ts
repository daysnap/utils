/**
 * 设置 scrollTop
 */
export function setScrollTop(scrollTop = 0) {
  document.documentElement.scrollTop =
    window.pageYOffset =
    document.body.scrollTop =
      scrollTop
}
