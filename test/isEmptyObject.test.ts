import { isEmptyObject } from '../src'

describe('isEmptyObject', () => {
  it('正常工作', () => {
    const received = isEmptyObject({})
    expect(received).toEqual(true)
  })

  it('反例', () => {
    const received = isEmptyObject({ a: 1 })
    expect(received).toEqual(false)
  })
})
