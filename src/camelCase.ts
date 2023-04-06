/**
 * 驼峰
 * camelCase('hello-world') => helloWorld
 */
export function camelCase(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}
