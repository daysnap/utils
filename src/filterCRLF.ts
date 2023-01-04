/**
 * 替换字符串里面的回车换行符
 */
export function filterCRLF(v: string) {
  return v.replace(/\r|\n/gi, '<br/>')
}
