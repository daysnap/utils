import { formatDateToZN } from '../src'

describe('formatDateToZN', () => {
  it('大于1个月', () => {
    const received = formatDateToZN('2022-12-11 08:09:10')
    expect(received).toEqual('2022-12-11 08:09')
  })
  const now = Date.now()
  it('大于1周', () => {
    const received = formatDateToZN(now - 1000 * 60 * 60 * 24 * 7)
    expect(received).toEqual('1周前')
  })
  it('大于1天', () => {
    const received = formatDateToZN(now - 1000 * 60 * 60 * 24)
    expect(received).toEqual('1天前')
  })

  it('大于1小时', () => {
    const received = formatDateToZN(now - 1000 * 60 * 60)
    expect(received).toEqual('1小时前')
  })

  it('3分钟', () => {
    const received = formatDateToZN(now - 1000 * 60 * 3)
    expect(received).toEqual('3分钟前')
  })

  it('刚刚', () => {
    const received = formatDateToZN(now - 1000 * 10)
    expect(received).toEqual('刚刚')
  })
})
