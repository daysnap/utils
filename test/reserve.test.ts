import { reserve } from '../src'

describe.each([
  ['', '--', '--'],
  [null, '-', '-'],
  [undefined, '无', '无'],
])('%p', (a, b, c) => {
  test('正常工作', () => {
    const res = reserve(a, b)
    expect(res).toMatch(c)
  })
  test('只有一个参数', () => {
    const res = reserve(a)
    expect(res).toBeUndefined()
  })
})
