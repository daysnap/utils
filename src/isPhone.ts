/**
 * 校验是否是手机号码
 */
export function isPhone(val: string) {
  return /^1\d{10}$/.test(val)
}
