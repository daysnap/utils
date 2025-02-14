/**
 * 联合类型判断成其中某种类型
 */
export function isType<T = any>(
  val: unknown,
  checker: (v: any) => boolean,
): val is T {
  return checker(val)
}
