import { isFunction } from './isFunction'

/**
 * 加载外部js、css、写入style样式
 * @param res 资源url或内容
 * @param type 类型
 * @param callback 回调函数
 */
export function loadResource(
  res: string,
  type: 'js' | 'css' | 'style',
  callback?,
) {
  let ref: HTMLElement
  if (type === 'js') {
    // 外部js
    ref = document.createElement('js')
    ref.setAttribute('type', 'text/javascript')
    ref.setAttribute('src', res)
  } else if (type === 'css') {
    // 外部css
    ref = document.createElement('link')
    ref.setAttribute('rel', 'stylesheet')
    ref.setAttribute('type', 'text/css')
    ref.setAttribute('href', res)
  } else if (type === 'style') {
    ref = document.createElement('style')
    ref.innerHTML = res
  }
  if (ref) {
    document.querySelector('head').appendChild(ref)
    ref.onload = () => {
      if (isFunction(callback)) callback()
    }
  }
}
