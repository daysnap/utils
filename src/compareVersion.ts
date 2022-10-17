/**
 * 比对版本
 * -1 => V < v
 * 0 => V === v
 * 1 => V > v
 */
export function compareVersion(V: string, v: string) {
  const [H = 0, T = 0, S = 0] = V.split('.').map((i) => +i) // 新
  const [h = 0, t = 0, s = 0] = v.split('.').map((i) => +i) // 本
  let result = 0
  if (H > h) {
    result = 1
  } else if (H === h) {
    if (T > t) {
      result = 1
    } else if (T === t) {
      if (S > s) {
        result = 1
      } else if (S === s) {
        result = 0
      } else {
        result = -1
      }
    } else {
      result = -1
    }
  } else {
    result = -1
  }
  return result
}
