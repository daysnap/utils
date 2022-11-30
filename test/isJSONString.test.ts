import { isJSONString } from '../src'

describe('isEmptyObject', () => {
  it('正常工作', () => {
    const received = isJSONString('{"a":1,"b":2}')
    expect(received).toEqual(true)
  })

  it('反例', () => {
    const received = isJSONString('null')
    expect(received).toEqual(false)
  })
})
