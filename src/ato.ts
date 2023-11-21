/**
 * 数组转换称对象
 * const options = [
 *  {label: '男', value: '1'}
 *  {label: '女', value: '2'}
 * ]
 * const res = ato(options, 'value')
 * res = { '1': {label: '男', value: '1'}, '2': {label: '女', value: '2'} }
 * const res = ato(options, 'value', 'label')
 * res = { '1': '男', '2': '女' }
 */
export function ato<T extends Record<string, any>, K extends keyof T>(
  options: T[],
  labelKey: K,
): Record<T[K], T>
export function ato<T extends Record<string, any>, K extends keyof T>(
  options: T[],
  labelKey: K,
  valueKey: K,
): Record<T[K], any>
export function ato<T extends Record<string, any>, K extends keyof T>(
  options: T[],
  labelKey: K,
  valueKey?: K,
) {
  return options.reduce<Record<string, any>>((res, item) => {
    res[item[labelKey]] = valueKey ? item[valueKey] : item
    return res
  }, {})
}
