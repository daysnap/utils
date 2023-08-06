import { listGenerator } from './listGenerator'
/**
 * 生成一个随机字符串
 * @param length 生成随机字符串的长度
 * @param alphabet 字母表
 */
export function getRandom(
  length: number,
  alphabet = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
) {
  return listGenerator(
    length,
    () => alphabet[Math.floor(Math.random() * alphabet.length)],
  ).join('')
}
