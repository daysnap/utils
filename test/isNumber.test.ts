import { isNumber } from '../src'

describe('isNumber', () => {
  it('判断数字', () => {
    expect(isNumber(0)).toEqual(true)
    expect(isNumber(1)).toEqual(true)
    expect(isNumber(-1)).toEqual(true)
    expect(isNumber(1.23)).toEqual(true)
  })

  it('排除非有效数字', () => {
    expect(isNumber(NaN)).toEqual(false)
    expect(isNumber(Infinity)).toEqual(false)
    expect(isNumber(-Infinity)).toEqual(false)
  })

  it('排除非 number 类型', () => {
    expect(isNumber('123')).toEqual(false)
    expect(isNumber('1.23')).toEqual(false)
    expect(isNumber('')).toEqual(false)
    expect(isNumber(null)).toEqual(false)
    expect(isNumber(undefined)).toEqual(false)
    expect(isNumber({})).toEqual(false)
  })
})
