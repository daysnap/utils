/**
 * 判断是否是闰年
 * 规则：四年一闰，百年不闰，四百年再闰
 */
export function isLeapYear(year: number) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
}
