/**
 * 创建 input 触发选择文件
 * 因为 iOS 必须把 input 元素添加到 document 才会获取到文件，所以这里做了兼容处理
 */
export function chooseMedia(
  options: { multiple?: boolean; accept?: string } = {},
) {
  return new Promise<File[]>((resolve, reject) => {
    const className = '__chooseMedia_input'

    let input = document.querySelector<HTMLInputElement>(`.${className}`)
    if (!input) {
      input = document.createElement('input')
      input.type = 'file'
      input.style.display = 'none'
      input.className = className
      document.body.appendChild(input)
    }

    Object.assign(input, options)

    input.onchange = function (event) {
      const target = event.target as HTMLInputElement
      const files = Array.from(target.files ?? [])
      target.value = ''

      if (input) {
        document.body.removeChild(input)
      }

      if (!files?.length) {
        return reject()
      }
      resolve(files)
    }
    input.click()
  })
}
