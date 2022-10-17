import { isEmpty } from './isEmpty'
/**
 * 值为 ''、undefined、null 则取默认值
 * 解决：
 * 0 || '--' => '--'
 * reserve(0, '--') => 0
 */
export function reserve(val: any, defaultVal?: any) {
  return isEmpty(val) ? defaultVal : val
}
