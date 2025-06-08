/**
 * list 生成器，快速生成数据
 * @param length 个数
 */
export function listGenerator(length: number): number[]
export function listGenerator<T = any>(
  length: number,
  fn: (index: number) => T,
): T[]
export function listGenerator<T = any>(
  length: number,
  fn?: (index: number) => T,
): any[] {
  return new Array(length).fill('').map((_, index) => (fn ? fn(index) : index))
}
