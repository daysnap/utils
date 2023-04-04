/**
 * 插入样式
 */
export function insertStyle(content: string) {
  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)
  styleElement.innerText = content
  return styleElement
}
