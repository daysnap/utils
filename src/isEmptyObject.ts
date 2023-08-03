/**
 * 判断是否是空对象
 * @param val 对象
 */
export function isEmptyObject(val: object) {
  return !Object.keys(val).length
}
