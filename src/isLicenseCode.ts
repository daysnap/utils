/**
 * 校验是否是车牌号
 * @param v 车牌号
 */
export function isLicenseCode(v: string) {
  return /(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$)/.test(
    v,
  )
}
