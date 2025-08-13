/**
 * \r to <br/>
 */
export function crToBr(v: string) {
  return v ? v.replace(/\r/gi, '<br/>') : v
}
