/**
 * 去除字符串空格
 * @param str 字符串值
 * @param type 方式 1-所有空格，2-前后空格，3-前空格，4-后空格
 */
export function stringTrim(str: string, type: 1 | 2 | 3 | 4 = 1) {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}
