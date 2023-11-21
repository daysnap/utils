/**
 * 首选值超出最小值，返回最小值；首选值超出最大值，返回最大值；其余返回首选值
 * @param min 最小值
 * @param x 首选值
 * @param max 最大值
 */
export function clamp(min: number, val: number, max: number) {
  // Math.min(Math.max(min, val), max)
  if (val < min) {
    return min
  }
  if (val > max) {
    return max
  }
  return val
}
