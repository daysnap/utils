/**
 * 获取 scrollTop
 */
export function getScrollTop() {
  return (
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop ||
    0
  )
}
