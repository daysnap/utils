
type Fn = 'sessionStorage' | 'localStorage'

interface StorageValue<T> {
  key: string
  value: T
  expire: number
}

function setItem<T> (fn: Fn, key: string, value: T, expire: number): T {
  window[fn].setItem(key, JSON.stringify({ key, value, expire }))
  return value
}

function getItem<T> (fn: Fn, key: string, defValue: T | null = null) : T | null {
  const data = window[fn].getItem(key)
  if (data === null) {
    return defValue
  }
  const { expire, value } = JSON.parse(data) as StorageValue<T>
  if (expire === -1 || Date.now() < expire) {
    return value
  }
  removeItem(fn, key)
  return defValue
}

function removeItem(fn: Fn, key: string): void {
  window[fn].removeItem(key)
}

function updateItem<T> (fn: Fn, key: string, value: T, expire?: number) : T {
  const data = window[fn].getItem(key)
  if (data) {
    const { value: prevValue, expire: prevExpire } = JSON.parse(data) as StorageValue<T>
    if (prevExpire === -1 || Date.now() < prevExpire) {
      if (Array.isArray(value)) {
        value = [...prevValue as any as [], ...value] as any as T
      } else {
        value = Object.assign({}, prevValue, value)
      }
      if (!expire) {
        expire = prevExpire
      }
    }
  }
  return setItem<T>(fn, key, value, expire)
}

function clear(fn: Fn) : void {
  window[fn].clear()
}

const factory = (fn: Fn) => {
  return {
    setItem<T> (key: string, value: T, expire = -1) : T {
      return setItem<T>(fn, key, value, expire)
    },
    getItem<T> (key: string, defValue = null) : T | null{
      return getItem<T>(fn, key, defValue)
    },
    removeItem (key) {
      return removeItem(fn, key)
    },
    updateItem<T> (key: string, value: T, expire?) {
      return updateItem<T>(fn, key, value, expire)
    },
    clear () {
      return clear(fn)
    },
    generate (key: string) {
      return {
        setItem<T> (value: T, expire = -1) : T {
          return setItem<T>(fn, key, value, expire)
        },
        getItem<T> (defValue = null) : T | null{
          return getItem<T>(fn, key, defValue)
        },
        removeItem () {
          return removeItem(fn, key)
        },
        updateItem<T> (value: T, expire?) {
          return updateItem<T>(fn, key, value, expire)
        },
        clear () {
          return clear(fn)
        },
      }
    }
  }
}

export const cache = factory('sessionStorage')

export const local = factory('localStorage')

export default {
  cache,
  local,
}
