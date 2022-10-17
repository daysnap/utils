/**
 * 替换字符串里面的回车换行
 */
export function replaceCrlf(val: string, replaceVal: string) {
  return val ? val.replace(/\\r|\\n/gi, replaceVal) : ''
}
