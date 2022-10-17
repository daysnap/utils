/**
 * 根据字符串hash值生成颜色值
 */
export const colorGenByHash = (str: string) => {
  const lsL = [0.35, 0.5, 0.65]
  const lsS = [0.35, 0.5, 0.65]
  const seed = 131
  const seed2 = 137
  let hash = 0
  // eslint-disable-next-line no-param-reassign
  str += 'x'
  const MAX_SAFE_INTEGER = parseInt((9007199254740991 / seed2).toString(), 10)
  for (let i = 0; i < str.length; i++) {
    if (hash > MAX_SAFE_INTEGER) {
      hash = parseInt((hash / seed2).toString(), 10)
    }
    hash = hash * seed + str.charCodeAt(i)
  }
  let H
  H = hash % 359
  hash = parseInt((hash / 360).toString(), 10)
  const S = lsS[hash % lsS.length]
  hash = parseInt((hash / lsS.length).toString(), 10)
  const L = lsL[hash % lsL.length]
  H /= 360
  const q = L < 0.5 ? L * (1 + S) : L + S - L * S
  const p = 2 * L - q
  const RGBArray = [H + 1 / 3, H, H - 1 / 3].map((color) => {
    if (color < 0) {
      // eslint-disable-next-line no-param-reassign
      color++
    }
    if (color > 1) {
      // eslint-disable-next-line no-param-reassign
      color--
    }
    if (color < 1 / 6) {
      // eslint-disable-next-line no-param-reassign
      color = p + (q - p) * 6 * color
    } else if (color < 0.5) {
      // eslint-disable-next-line no-param-reassign
      color = q
    } else if (color < 2 / 3) {
      // eslint-disable-next-line no-param-reassign
      color = p + (q - p) * 6 * (2 / 3 - color)
    } else {
      // eslint-disable-next-line no-param-reassign
      color = p
    }
    return Math.round(color * 255)
  })
  let hex = '#'
  RGBArray.forEach((value) => {
    if (value < 16) {
      hex += 0
    }
    hex += value.toString(16)
  })
  return hex
}
