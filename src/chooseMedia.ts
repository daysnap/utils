/**
 * 创建 input 触发选择文件
 */
export function chooseMedia(
  options: { multiple?: boolean; accept?: string } = {},
) {
  return new Promise<File[]>((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    Object.assign(input, options)
    input.onchange = function (event) {
      const target = event.target as HTMLInputElement
      const files = Array.from(target.files ?? [])
      target.value = ''
      if (!files?.length) {
        return reject()
      }
      resolve(files)
    }
    input.click()
  })
}
