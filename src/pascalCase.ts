import { camelCase } from './camelCase'
import { capitalize } from './capitalize'

/**
 * 首字母大写的驼峰
 * pascalCase('hello-world') => HelloWorld
 */
export function pascalCase(str: string) {
  return capitalize(camelCase(str))
}
