/**
 * 首字母大写
 * capitalize('hello world') => Hello world
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
