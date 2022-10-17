/**
 * 校验是否是正则表达式
 */
export function isRegExp(val: unknown): val is RegExp {
  return val instanceof RegExp
}
