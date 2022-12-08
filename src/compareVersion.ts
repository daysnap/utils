/**
 * 比对版本
 * -1 => nv < v
 * 0 => nv === v
 * 1 => nv > v
 * @param nv 新版本
 * @param v 版本
 */
export function compareVersion(nv: string, v: string): -1 | 0 | 1 {
  const [H = 0, T = 0, S = 0] = nv.split('.').map((i) => +i) // 新
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
  return result as any
}
