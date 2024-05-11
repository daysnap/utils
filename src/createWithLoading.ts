import { Loose } from '@daysnap/types'

type WithFalse<T> = T | false

/**
 * loading 生成器
 * const withLoading = createWithLoading(() => showLoading())
 * const fn = withLoading(async () => { // ... })
 * fn() 执行的时候就会执行showLoading
 */
export function createWithLoading<O = any>(
  showLoading: (options: O) => Loose<{ close: () => any }>,
  defaultOptions?: O,
) {
  return function withLoading<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    options: WithFalse<O> = defaultOptions as any,
  ) {
    return async (
      ...params: [...Parameters<T>, WithFalse<O>?]
    ): Promise<Awaited<ReturnType<T>>> => {
      if (params.length > fn.length) {
        options = params.pop() as WithFalse<O>
      }
      const toast = options ? showLoading(options) : null
      try {
        return await fn(...params)
        // eslint-disable-next-line no-useless-catch
      } catch (error) {
        throw error
      } finally {
        toast?.close()
      }
    }
  }
}
