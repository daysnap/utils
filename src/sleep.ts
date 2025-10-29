/**
 * 休眠方法
 * @param ms 休眠时长 毫秒
 * @param isSuccess 默认执行成功
 * @param res 数据
 */
export function sleep(ms: number, isSuccess = true, res?: any) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(isSuccess ? resolve : reject, ms, res)
  })
}
