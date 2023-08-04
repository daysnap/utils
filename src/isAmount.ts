/**
 * 判断是否是合法金额
 * 只能是数字,小数点后只能保留两位或一位
 * isAmount(0) => true
 * isAmount('01') => false
 * isAmount('1.') => true
 * isAmount('1.1') => true
 * isAmount('1.12') => true
 * isAmount('1.123') => false
 */
export function isAmount(val: string) {
  return /^([1-9]\d*|0)([.]?|(\.\d{1,2})?)$/.test(val)
}
