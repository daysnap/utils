import { parseQuery } from '../src'

describe('parseQuery', () => {
  it('正常工作', () => {
    const received = parseQuery(
      'https://www.baidu.com/s?wd=%E6%B1%BD%E8%BD%A6%E8%A1%97',
    )
    expect(received).toEqual({ wd: '汽车街' })
  })

  it('两个参数', () => {
    const received = parseQuery(
      'https://www.baidu.com/s?wd=%E6%B1%BD%E8%BD%A6%E8%A1%97',
      'wd',
    )
    expect(received).toEqual('汽车街')
  })
})
