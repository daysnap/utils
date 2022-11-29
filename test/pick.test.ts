import { pick } from '../src'

describe('pick', () => {
  it('正常工作', () => {
    const received = pick({ name: '张三', age: 18, sex: '男' }, ['name'])
    expect(received).toEqual({ name: '张三' })
  })

  it('第二个参数不填', () => {
    const received = pick({ name: '张三', age: 18, sex: '男' })
    expect(received).toEqual({})
  })
})
