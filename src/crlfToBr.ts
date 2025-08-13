/**
 * \r \n to <br/>
 */
export function crlfToBr(v: string) {
  return v ? v.replace(/\r|\n/gi, '<br/>') : v
}

/**
 * 替换字符串里面的回车换行符
 * @deprecated 请使用 @see {@link crlfToBr}.
 */
export function filterCRLF(v: string) {
  return v.replace(/\r|\n/gi, '<br/>')
}
