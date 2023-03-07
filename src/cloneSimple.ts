/**
 * 拷贝对象
 * @param source 需要转换的值
 *
 * 需要注意 当值为 undefined、function、symbol 会在转换过程中被忽略
 */
export function cloneSimple<T>(source: T): T {
  return JSON.parse(JSON.stringify(source))
}
