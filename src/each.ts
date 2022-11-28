/**
 * 支持遍历数组和对象
 */
export function each<T>(
  data: T[],
  callback: (item: T, index: number) => void,
): void
export function each<T>(
  data: Record<string, T>,
  callback: (item: T, key: string) => void,
): void
export function each(data: any, callback: any) {
  if (Array.isArray(data)) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0, { length } = data; index < length; index++) {
      callback.call(data[index], data[index], index)
    }
  } else {
    Object.keys(data).forEach((key) => {
      callback.call(data[key], data[key], key)
    })
  }
}
