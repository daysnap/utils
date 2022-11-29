/**
 * 获取多少天的毫秒数 默认获取1天的
 */
export function getDayMillisecond(day = 1): number {
  return day * 24 * 60 * 60 * 1000
}
