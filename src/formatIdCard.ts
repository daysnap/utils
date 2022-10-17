/**
 * 身份证号码加 *
 */
export function formatIdCard(val: string) {
  return val ? `${val.substring(0, 6)}********${val.substring(14)}` : ''
}
