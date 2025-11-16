/**
 * 向上圆整最接近的整数
 * 0 => 1
 * 123 => 200
 * -123 => -200
 */
export function roundUpToNearestInteger(num: number) {
  if (!num) {
    return 1
  }
  const symbol = num > 0 ? 1 : -1
  num = Math.abs(num)
  const magnitude = Math.pow(10, Math.floor(Math.log10(num)))
  return Math.ceil(num / magnitude) * magnitude * symbol
}
