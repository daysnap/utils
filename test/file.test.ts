
import { toBase64 } from '../src/file'

declare global {
  interface Window {
    File: any
    FileReader: any
  }
}

describe(`file`, () => {

  beforeAll(() => {
    // tslint:disable-next-line:no-empty
    window.File = function () {}
    window.FileReader = function () {
      this.readAsDataURL = function () {
        if (this.onload) {
          this.onload({ target: { result: `data:image/test` } })
        }
      }
    }
  })

  it(`file toBase64`, async () => {
    const file = new window.File()
    file.type = `image/png`
    file.name = `test.png`
    file.size = 1024

    await expect(toBase64(file)).resolves.toEqual(`data:image/test`)
  })

})
