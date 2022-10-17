/**
 * 过滤姓名
 */
export function filterName(val: string) {
  if (!val) {
    return ''
  }

  const len = val.length
  if (len === 1) {
    return val
  }
  if (len === 2) {
    return `${val.substring(0, 1)}*`
  }

  return `${val.substring(0, 1)}${new Array(len - 1).join('*')}${val.substr(
    -1,
  )}`
}
