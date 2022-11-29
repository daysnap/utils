import { omit } from '../src'

describe('omit', () => {
  it('正常工作', () => {
    const received = omit({ name: '张三', age: 18, sex: '男' }, ['age'])
    expect(received).toEqual({ name: '张三', sex: '男' })
  })

  it('第二个参数不填', () => {
    const received = omit({ name: '张三', age: 18, sex: '男' })
    expect(received).toEqual({ name: '张三', age: 18, sex: '男' })
  })
})
