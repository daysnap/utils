/**
 * 创建工厂函数
 */
export function createFactory<T>(initial: T) {
  return [(value: T) => (initial = value), () => initial] as const
}
