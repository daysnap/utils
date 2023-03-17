/**
 * 四舍五入
 * @param val 需要四舍五入的值
 * @param fractionDigits 需要保留的小数点位数
 */
export function round(val: number, fractionDigits: number) {
  const number = val
  if (number >= 10 ** 21) {
    return number.toString()
  }
  if (typeof fractionDigits === 'undefined' || fractionDigits === 0) {
    return Math.round(number).toString()
  }

  let result: any = number.toString()
  const arr = result.split('.')

  // 整数的情况
  if (arr.length < 2) {
    result += '.'
    for (let i = 0; i < fractionDigits; i += 1) {
      result += '0'
    }
    return result
  }

  const integer = arr[0]
  const decimal = arr[1]
  if (decimal.length === fractionDigits) {
    return result
  }
  if (decimal.length < fractionDigits) {
    for (let i = 0; i < fractionDigits - decimal.length; i += 1) {
      result += '0'
    }
    return result
  }
  result = `${integer}.${decimal.substr(0, fractionDigits)}`
  let last = decimal.substr(fractionDigits, 1)

  if (/^\d(9){5,}[0-9]$/.test(decimal.substr(fractionDigits))) {
    last = (+last + 1).toString()
  }

  // 四舍五入，转换为整数再处理，避免浮点数精度的损失
  if (parseInt(last, 10) >= 5) {
    const x = 10 ** fractionDigits
    result = (Math.round(parseFloat(result) * x) + 1) / x
    result = round(result, fractionDigits)
  }
  return result
}
