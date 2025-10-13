/**
 * yyyyMMdd -> yyyy-MM-dd
 */
export function formatGapDate(val: string | number, gap = '-') {
  const value = val.toString()
  return [value.substring(0, 4), value.substring(4, 6), value.substring(6)]
    .filter(Boolean)
    .join(gap)
}
