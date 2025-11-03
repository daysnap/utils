/**
 * 解析数字
 * 主要用户处理用户输入，只让输入数字的情况
 * 0123xxxx => 0123
 * x0123 => ''
 */
export function parseNumberString(val: string) {
  return val.replace(/[^\d]/g, '')
}
