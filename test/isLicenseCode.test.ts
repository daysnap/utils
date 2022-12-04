import { isLicenseCode } from '../src'

describe('isLicenseCode', () => {
  it('正常工作', () => {
    const received = isLicenseCode('沪A889992')
    expect(received).toEqual(true)
  })
})
