import { isEmpty } from './isEmpty'
/**
 * 校验非 ''、undefined、null
 */
export function isNotEmpty(val: unknown) {
  return !isEmpty(val)
}
