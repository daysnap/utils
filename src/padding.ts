/**
 * 增添空格
 * @param message 文字信息
 * @param before 前空格个数
 * @param after 后空格个数
 */
export function padding(message: string, before = 1, after = 1) {
  return `${new Array(before).fill(' ').join('')}${message}${new Array(after)
    .fill(' ')
    .join('')}`
}
