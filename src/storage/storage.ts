import { isArray } from '../isArray'
import { isObject } from '../isObject'

interface StorageLike {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}

type DefaultVal<T> = T extends Record<string, any> ? Partial<T> : T

interface StorageOptions<T = any> {
  initialValue?: T
  debug: boolean
  cached: boolean
}

export class Storage<T = any> {
  private readonly key: string
  private readonly storage: StorageLike
  private value: T | null = null
  private options: StorageOptions<T> = { debug: false, cached: false }

  constructor(
    key: string,
    storage: StorageLike,
    options?: Partial<StorageOptions<T>>,
  ) {
    const { initialValue, ...rest } = options || {}

    this.key = key
    this.storage = storage

    if (options) {
      Object.assign(this.options, rest)
    }

    if (initialValue != undefined) {
      this.setItem(initialValue)
    }
  }

  _debug(...args: string[]) {
    if (this.options.debug) {
      console.log(`【Storage】=> `, ...args)
    }
  }

  /**
   * 设置值
   */
  setItem(val: T) {
    this.storage.setItem(this.key, JSON.stringify(val))

    if (this.options.cached) {
      this.value = this.getItem()
    }

    return val
  }

  /**
   * 获取值
   */
  getItem(): T | null
  getItem(defaultVal: DefaultVal<T>): T
  getItem(defaultVal?: any): any {
    const val = this.storage.getItem(this.key) ?? null
    if (val === null) {
      return defaultVal ?? null
    }
    return JSON.parse(val)
  }

  /**
   * 删除值
   */
  removeItem() {
    this.value = null
    this.storage.removeItem(this.key)
  }

  /**
   * 更新值
   */
  updateItem(val: DefaultVal<T>) {
    this.value = null

    const oldVal = this.getItem()
    if (isArray(val) && isArray(oldVal)) {
      val = [...oldVal, ...val] as any
    } else if (isObject(val) && isObject(oldVal)) {
      val = { ...oldVal, ...val }
    }

    return this.setItem(val as T)
  }

  /**
   * 获取值后，删除存储的值
   */
  getItemOnce(): T | null
  getItemOnce(defaultVal: DefaultVal<T>): T
  getItemOnce(defaultVal?: any): any {
    const val = this.getItem(defaultVal)

    this.removeItem()

    return val
  }

  /**
   * 优先从缓存中获取值
   */
  getItemWithCache(): T | null
  getItemWithCache(defaultVal: DefaultVal<T>): T
  getItemWithCache(defaultVal?: any): any {
    if (this.value !== null) {
      this._debug(`${this.key}: 命中缓存！`)
      return this.value
    }

    this._debug(`${this.key}: 读取存储！`)
    const val = this.getItem()
    if (val === null) {
      return defaultVal ?? null
    }

    this.value = val

    return this.value
  }

  /**
   * 清除缓存
   */
  clearCache() {
    this.value = null
  }
}
