/**
 * 插入 link
 */
export function insertLink(href: string): Promise<HTMLLinkElement>
export function insertLink(
  href: string,
  callback: (err: unknown, el: HTMLLinkElement) => void,
): void
export function insertLink(href: string, callback?: any): any {
  const linkElement = document.createElement('link')
  linkElement.href = href

  const insert = (success: () => void, fail: (err: any) => void) => {
    document.body.appendChild(linkElement)
    linkElement.onload = success
    linkElement.onerror = fail
  }

  if (callback) {
    return insert(
      () => callback(null, linkElement),
      (err) => callback(err, linkElement),
    )
  }

  return new Promise((resolve, reject) => {
    insert(() => resolve(linkElement), reject)
  })
}
