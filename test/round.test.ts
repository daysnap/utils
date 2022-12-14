import { round } from '../src'

describe('round', () => {
  it('正常工作', () => {
    expect(round(1.335, 2)).toEqual('1.34')
  })
})
