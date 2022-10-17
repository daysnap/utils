/**
 * 手机号加 *
 * filterPhone('13177778888') => 131****8888
 * filterPhone('13177778888', ' ') => 131 **** 8888
 */
export function filterPhone(val: string, sep = '') {
  return val ? `${val.substring(0, 3)}${sep}****${sep}${val.substring(7)}` : ''
}
