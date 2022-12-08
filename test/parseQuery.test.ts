import { parseQuery } from '../src'

describe('parseQuery', () => {
  it('正常工作', () => {
    const received = parseQuery('https://www.baidu.com/s?wd=daysnap')
    expect(received).toEqual({ wd: 'daysnap' })
  })

  it('两个参数', () => {
    const received = parseQuery(
      'https://www.baidu.com/s?wd=daysnap&version=1',
      'wd',
    )
    expect(received).toEqual('daysnap')
  })
})
