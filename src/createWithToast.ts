import { isPromiseLike } from './isPromiseLike'

/**
 * 处理错误信息可以弹出提示
 */
export interface CreateWithToastOptions {
  /** error */
  onError?: (err: unknown) => void
}

export function createWithToast(options: CreateWithToastOptions = {}) {
  const { onError } = options

  return <T extends (...args: any) => any>(fn: T) => {
    return function (this: any, ...args: any[]) {
      try {
        const result = fn.apply(this, args)
        if (isPromiseLike(result)) {
          return Promise.resolve(result).catch((err) => {
            onError?.(err)
            throw 'cancel:handled'
          })
        }
        return result
      } catch (error) {
        onError?.(error)
        throw 'cancel:handled'
      }
    } as T
  }
}
