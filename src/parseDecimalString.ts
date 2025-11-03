/**
 * 解析小数数字
 * 主要用户处理用户输入，只让输入数字的情况
 */
export function parseDecimalString(
  val: string,
  options: { precision?: number; allowNegativeNumber?: boolean } = {},
) {
  const { precision = 0, allowNegativeNumber = true } = options

  // const reg = new RegExp(`^-?(0|[1-9]\\d*)?(\\.\\d{0,${precision}})?`, 'g')
  const reg = new RegExp(
    `^${allowNegativeNumber ? '-?' : ''}(0|[1-9]\\d*)?${
      +precision === 0 ? '' : `(\\.?\\d{0,${precision}})?`
    }`,
    'g',
  )

  val = val.match(reg)?.[0] ?? ''

  // 特殊情况、特殊处理
  if (val.startsWith('-00')) {
    val = `-0`
  } else if (val.startsWith('-.')) {
    val = '-'
  } else if (val.startsWith('.')) {
    val = ''
  } else if (val.startsWith('0') && !val.startsWith('0.') && val.length > 1) {
    val = `${+val}`
  }

  return val
}
