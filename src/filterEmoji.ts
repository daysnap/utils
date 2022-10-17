/**
 * 过滤emoji
 */
export function filterEmoji(val: string) {
  if (!val) {
    return ''
  }
  const ranges = [
    '\uD83C[\uDF00-\uDFFF]',
    '\uD83D[\uDC00-\uDE4F]',
    '\ud83d[\ude80-\udeff]',
    '[\uD800-\uDBFF]',
    '[\uDC00-\uDFFF]',
    '[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]',
  ]
  return val.replace(new RegExp(ranges.join('|'), 'g'), '')
}
