/**
 * 生成一个随机字符串
 * @param length 生成随机字符串的长度
 * @param alphabet 字母表
 */
export function getRandom(
  length: number,
  alphabet = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
) {
  return new Array(length)
    .fill('')
    .map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
    .join('')
}
