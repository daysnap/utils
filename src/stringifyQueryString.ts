/**
 * 将对象转换为查询字符串
 *
 * 在不支持 URLSearchParams 的环境下使用该方法
 */
export function stringifyQueryString(value: Record<string, any>) {
  return Object.keys(value)
    .reduce<string[]>((res, k) => {
      res.push(`${k}=${value[k]}`)
      return res
    }, [])
    .join('&')
}
