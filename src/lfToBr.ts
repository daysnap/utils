/**
 * \n to <br/>
 */
export function lfToBr(v: string) {
  return v ? v.replace(/\n/gi, '<br/>') : v
}
