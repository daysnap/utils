import { typeOf } from '../src'

describe('typeOf', () => {
  it('判断对象', () => {
    const received = typeOf({})
    expect(received).toEqual('object')
  })

  it('判断数组', () => {
    const received = typeOf([])
    expect(received).toEqual('array')
  })

  it('判断函数', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const received = typeOf(() => {})
    expect(received).toEqual('function')
  })

  it('判断日期', () => {
    const received = typeOf(new Date())
    expect(received).toEqual('date')
    expect(new Date() instanceof Date).toBe(true)
  })
})
