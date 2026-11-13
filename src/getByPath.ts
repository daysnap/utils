/**
 * 按路径取值，支持 `a.b.c`、`list[0].name` 等写法。
 *
 * @param target 目标对象
 * @param path 路径，支持点号分隔和方括号索引；为 null/undefined/空字符串时返回默认值
 * @param defaultValue 取不到值时的兜底
 *
 * @example
 * getByPath({ a: { b: 1 } }, 'a.b')                 // 1
 * getByPath({ list: [{ name: 'x' }] }, 'list[0].name') // 'x'
 * getByPath({ a: 1 }, 'a.b.c', 'default')           // 'default'
 */
export function getByPath<T = any>(
  target: any,
  path?: string | number | null,
  defaultValue?: T,
): T {
  if (target == null || path == null || path === '') {
    return defaultValue as T
  }

  const value = String(path)
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .filter(Boolean)
    .reduce<any>(
      (result, key) => (result == null ? undefined : result[key]),
      target,
    )

  return (value === undefined ? defaultValue : value) as T
}
