/**
 * 根据路径解析值
 */
export function parsePath<T = any>(obj: Record<string, any>, path: string): T {
  const segments = path ? path.split('.') : []

  segments.forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    obj = obj[key]
  })

  return obj as T
}
