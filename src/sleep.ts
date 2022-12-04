/**
 * 说明
 */
export function sleep(timeout: number, isSuccess = true) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => (isSuccess ? resolve() : reject()), timeout)
  })
}
