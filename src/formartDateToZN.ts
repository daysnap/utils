import { formatDate } from "./formatDate"
import { normalizeDate } from "./normalizeDate"

export function formatDateToZN(v: string | number | Date): string {
  const timestamp = normalizeDate(v).getTime()
  const now = Date.now() // 获取当前时间的时间戳
  const diff = now - timestamp // 计算时间差

  // 计算分钟、小时、天、周等
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)

  // 判断时间间隔，并返回相应的表示方式
  if (weeks >= 4) {
    return formatDate(timestamp, 'yyyy-MM-dd hh:mm')
  } else if (days >= 7) {
    return `${weeks}周前`
  } else if (hours >= 24) {
    return `${days}天前`
  } else if (minutes >= 60) {
    return `${hours}小时前`
  } else if (seconds >= 60) {
    return `${minutes}分钟前`
  } else return '刚刚'
}
