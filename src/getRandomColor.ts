/**
 * 随机颜色
 */
export function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}
