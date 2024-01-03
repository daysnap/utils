/**
 * 创建一个线性函数
 * 主要用于动画值计算
 * @param x1 坐标轴 x1
 * @param x2 坐标轴 x2
 * @param y1 坐标轴 y1
 * @param y2 坐标轴 y2
 */
export function createLinearFunction(
  x1: number,
  x2: number,
  y1: number,
  y2: number,
) {
  return (x: number) => {
    if (x <= x1) {
      return y1
    }
    if (x >= x2) {
      return y2
    }

    const r = (y2 - y1) / (x2 - x1)
    return r * (x - x1) + y1
  }
}
