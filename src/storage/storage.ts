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

  setItem(val: T) {
    this.value = null
    this.storage.setItem(this.key, JSON.stringify(val))
    return val
  }

  getItem(): T | null
  getItem(defaultVal: Partial<T>): T
  getItem(defaultVal?: any): any {
    const val = this.storage.getItem(this.key)
    if (val === null) {
      return defaultVal ?? null
    }
    return JSON.parse(val)
  }

  removeItem() {
    this.value = null
    this.storage.removeItem(this.key)
  }

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

  getItemWithCache(): T | null
  getItemWithCache(defaultVal: T): T
  getItemWithCache(defaultVal?: any): any {
    return this.value ?? (this.value = this.getItem(defaultVal))
  }
}
