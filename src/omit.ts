/**
 * 排除对象里的某些属性，返回剩下的对象，浅拷贝
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  fields: K[] = [],
): Omit<T, K> {
  const clone = { ...obj }

  fields.forEach((key) => {
    delete clone[key]
  })

  return clone
}
