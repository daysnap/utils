/**
 * 转换到 Posix 标准
 */
export function toPosix(value: string) {
  return value.replace(/\\/g, '/')
}
