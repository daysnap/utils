/**
 * 判断 ip 是否是局域网 ip，仅支持 ipv4
 * @param ip ipv4 地址
 */
export function isLan(ip: string) {
  // eslint-disable-next-line no-param-reassign
  ip = ip.toLocaleLowerCase()
  if (ip === 'localhost') {
    return true
  }
  if (ip === '') {
    return false
  }
  let v = 0
  const aNum = ip.split('.')
  if (aNum.length !== 4) {
    return false
  }
  // eslint-disable-next-line no-bitwise
  v += parseInt(aNum[0], 10) << 24
  // eslint-disable-next-line no-bitwise
  v += parseInt(aNum[1], 10) << 16
  // eslint-disable-next-line no-bitwise
  v += parseInt(aNum[2], 10) << 8
  // eslint-disable-next-line no-bitwise
  v += parseInt(aNum[3], 10) << 0
  // eslint-disable-next-line no-bitwise
  v = (v >> 16) & 0xffff
  return (
    // eslint-disable-next-line no-bitwise
    v >> 8 === 0x7f ||
    // eslint-disable-next-line no-bitwise
    v >> 8 === 0xa ||
    v === 0xc0a8 ||
    (v >= 0xac10 && v <= 0xac1f)
  )
}
