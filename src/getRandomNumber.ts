import { getRandom } from './getRandom'

/**
 * 生成一个随机数字
 * @param length 生成一个随机数字的长度
 */
export function getRandomNumber(length: number) {
  return getRandom(length, '1234567890')
}
