/**
 * 校验是否是邮箱
 */
export function isEmail(val: string) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
}
