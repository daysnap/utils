/**
 * 过滤银行卡号
 */
export function filterBankCardNo(val: string) {
  return val
    ? `${new Array(val.length - 3).join('*')}${val.substring(
        val.length - 4,
      )}`.replace(/(.{4})/g, '$1 ')
    : ''
}
