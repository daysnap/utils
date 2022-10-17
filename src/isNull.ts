/**
 * 校验是否是 null
 */
export function isNull(val: unknown): val is null {
  return val === null
}
