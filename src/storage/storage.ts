import { isArray } from '../isArray'
import { isObject } from '../isObject'

interface StorageLike {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}

export class Storage<T = any> {
  private readonly key: string
  private readonly storage: StorageLike
  private value: T | null = null

  constructor(key: string, storage: StorageLike) {
    this.key = key
    this.storage = storage
  }

  /**
   * 设置值
   */
  setItem(val: T) {
    this.value = null
    this.storage.setItem(this.key, JSON.stringify(val))
    return val
  }

  /**
   * 获取值
   */
  getItem(): T | null
  getItem(defaultVal: Partial<T>): T
  getItem(defaultVal?: any): any {
    const val = this.storage.getItem(this.key)
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
  updateItem(val: Partial<T>) {
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
  getItemOnce(defaultVal: Partial<T>): T
  getItemOnce(defaultVal?: any): any {
    const val = this.storage.getItem(this.key)
    if (val === null) {
      return defaultVal ?? null
    }

    this.removeItem()

    return JSON.parse(val)
  }

  /**
   * 优先从缓存中获取值
   */
  getItemWithCache(): T | null
  getItemWithCache(defaultVal: Partial<T>): T
  getItemWithCache(defaultVal?: any): any {
    return this.value ?? (this.value = this.getItem(defaultVal))
  }
}
