/**
 * 格式化处理路径 平台兼容
 */
export function normalizePath(path: string): string {
  return path.replace(/\\/g, '/')
}
