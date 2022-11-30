import { stringifyQuery } from '../src'

describe('parseQuery', () => {
  it('正常工作', () => {
    const received = stringifyQuery({ wd: '汽车街' })
    expect(received).toEqual('wd=%E6%B1%BD%E8%BD%A6%E8%A1%97')
  })

  it('正常工作', () => {
    const received = stringifyQuery({})
    expect(received).toEqual('')
  })
})
