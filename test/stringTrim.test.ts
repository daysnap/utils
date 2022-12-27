import { stringTrim } from '../src'

describe('stringTrim', () => {
  it('去除所有空格', () => {
    const received = stringTrim(' hel lo ', 1)
    expect(received).toEqual('hello')
  })

  it('去除前后空格', () => {
    const received = stringTrim(' he llo ', 2)
    expect(received).toEqual('he llo')
  })

  it('去除前空格', () => {
    const received = stringTrim(' he llo ', 3)
    expect(received).toEqual('he llo ')
  })

  it('去除后空格', () => {
    const received = stringTrim(' he llo ', 4)
    expect(received).toEqual(' he llo')
  })
})
