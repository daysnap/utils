/**
 * 说明 rgb 转 十六进制值
 */
export function rgbToHex(
  r: string | number,
  g: string | number,
  b: string | number,
) {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}
