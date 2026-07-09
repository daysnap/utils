/**
 * 判断是否是数字或数字字符串
 * @param val 需要判断的值
 */
export function isNumeric(val: unknown): val is string | number {
  if (typeof val === 'number') {
    return Number.isFinite(val)
  }

  if (typeof val !== 'string') {
    return false
  }

  const value = val.trim()

  return (
    value !== '' &&
    /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(value) &&
    Number.isFinite(Number(value))
  )
}
