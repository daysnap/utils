/**
 * 身份证号码加 *
 * 430421202312121234 => 430421********1234
 */
export function filterIdCard(val: string) {
  return val ? `${val.substring(0, 6)}********${val.substring(14)}` : ''
}
