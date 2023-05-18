import { isString } from './isString'
import { formatDateStr } from './formatDateStr'

/**
 * 格式化日期
 * 默认的当前日期 yyyy-MM-dd hh:mm:ss
 */
export function formatDate(
  val: string | Date | number = new Date(),
  fmt = 'yyyy-MM-dd hh:mm:ss',
) {
  let v = val
  if (isString(v)) {
    // fix iOS new Date() 不支持 2020-01-01 格式，需转换为 2020/01/01
    v = formatDateStr(v)
  }
  const date = new Date(v)
  const o: any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  }
  if (/(y+)/.test(fmt)) {
    // eslint-disable-next-line no-param-reassign
    fmt = fmt.replace(
      RegExp.$1,
      `${date.getFullYear()}`.substr(4 - RegExp.$1.length),
    )
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      // eslint-disable-next-line no-param-reassign
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
      )
    }
  }
  return fmt
}
