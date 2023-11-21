/**
 * 过滤字符串
 * const str = filterString('13188888888', '*', 3, 7)
 * str = '131****8888'
 */
export function filterString(val: string, sep = '*', start = 0, end?: number) {
  return val
    .split('')
    .map((s, index) => {
      if (index >= start && index < (end ?? val.length)) {
        return sep
      }
      return s
    })
    .join('')
}
