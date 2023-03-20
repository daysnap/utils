import { isObject } from './isObject'

/**
 * 根据路径解析值
 */
export function parsePath<T = any>(obj: Record<string, any>, path: string): T {
  const segments = path ? path.split('.') : []

  for (let i = 0, len = segments.length; i < len; i++) {
    obj = obj[segments[i]]
    if (!isObject(obj)) {
      break
    }
  }

  return obj as T
}
