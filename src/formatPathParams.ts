/**
 * 格式化字符串参数，一般用来处理 api path params
 * const url = 'api/v1/user/{id}'
 * const { path, rest } = formatPathParams(url, { id: 123, xxx: 1 })
 * path = 'api/v1/user/123'
 * rest = { xxx: 1 }
 */
export function formatPathParams(
  path: string,
  params: Record<string, any> = {},
) {
  const rest = { ...params }

  if (path.includes('{')) {
    Object.keys(rest).forEach((key) => {
      if (path.includes(`{${key}}`)) {
        path = path.replace(`{${key}}`, rest[key])
        delete rest[key]
      }
    })
  }

  return { path, rest }
}
