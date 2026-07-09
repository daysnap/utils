import { isNumeric } from '../src'

describe('isNumeric', () => {
  it('判断数字', () => {
    expect(isNumeric(0)).toEqual(true)
    expect(isNumeric(1)).toEqual(true)
    expect(isNumeric(-1)).toEqual(true)
    expect(isNumeric(1.23)).toEqual(true)
  })

  it('判断数字字符串', () => {
    expect(isNumeric('0')).toEqual(true)
    expect(isNumeric('123')).toEqual(true)
    expect(isNumeric('-123')).toEqual(true)
    expect(isNumeric('+123')).toEqual(true)
    expect(isNumeric('1.23')).toEqual(true)
    expect(isNumeric('.23')).toEqual(true)
    expect(isNumeric('1.')).toEqual(true)
    expect(isNumeric('1e3')).toEqual(true)
    expect(isNumeric(' 1.23 ')).toEqual(true)
  })

  it('排除非有效数字', () => {
    expect(isNumeric(NaN)).toEqual(false)
    expect(isNumeric(Infinity)).toEqual(false)
    expect(isNumeric(-Infinity)).toEqual(false)
    expect(isNumeric('NaN')).toEqual(false)
    expect(isNumeric('Infinity')).toEqual(false)
    expect(isNumeric('-Infinity')).toEqual(false)
  })

  it('排除非数字字符串', () => {
    expect(isNumeric('')).toEqual(false)
    expect(isNumeric(' ')).toEqual(false)
    expect(isNumeric('123abc')).toEqual(false)
    expect(isNumeric('0x11')).toEqual(false)
    expect(isNumeric('.')).toEqual(false)
    expect(isNumeric('-')).toEqual(false)
    expect(isNumeric(null)).toEqual(false)
    expect(isNumeric(undefined)).toEqual(false)
    expect(isNumeric({})).toEqual(false)
  })
})
