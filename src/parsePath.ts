/**
 * 根据路径解析值
 */
export function parsePath(obj: Record<string, any>, path: string) {
  path.split('.').forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    obj = obj[key] ?? ''
  })
  return obj
}
