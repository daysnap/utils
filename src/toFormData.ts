/**
 * 对象转 formdata 不考虑深层对象
 */
export function toFormData(data: Record<string, any>) {
  return Object.entries(data).reduce<FormData>((res, [key, value]) => {
    res.append(key, value)
    return res
  }, new FormData())
}
