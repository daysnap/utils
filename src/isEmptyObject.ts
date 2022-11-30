/**
 * 判断是否是空对象
 * @param v 对象
 */
export function isEmptyObject(v: object) {
  return !Object.keys(v).length
}
