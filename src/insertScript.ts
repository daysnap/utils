/**
 * 插入外部 script 标签
 */
export function insertScript(src: string): Promise<HTMLScriptElement>
export function insertScript(
  src: string,
  callback: (err: unknown, el: HTMLScriptElement) => void,
): void
export function insertScript(src: string, callback?: any): any {
  const scriptElement = document.createElement('script')
  scriptElement.src = src

  const insert = (success: () => void, fail: (err: any) => void) => {
    document.body.appendChild(scriptElement)
    scriptElement.onload = success
    scriptElement.onerror = fail
  }

  if (callback) {
    return insert(
      () => callback(null, scriptElement),
      (err) => callback(err, scriptElement),
    )
  }

  return new Promise((resolve, reject) => {
    insert(() => resolve(scriptElement), reject)
  })
}
