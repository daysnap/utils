/**
 * 判断是否是 url
 */
export function isURL(val: unknown) {
  return /^(http)|(\.*\/)/.test(`${val}`)
}
