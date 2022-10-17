import { isNull } from './isNull'
import { isUndefined } from './isUndefined'
/**
 * 校验是否为空 ''、undefined、null
 */
export function isEmpty(val: unknown) {
  return val === '' || isNull(val) || isUndefined(val)
}
