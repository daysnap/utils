/**
 * 判断类型
 * @param val 待判断数据
 * @returns 'undefined'|'null'|'boolean'|'string'|'number'|'object'|'array'|'function'|'symbol'|'map'|'weakmap'|'bigint'|'regexp'|'date'
 */
export function typeOf<T>(val: T): val is T {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}
