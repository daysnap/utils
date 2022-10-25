export function factory(type: 'sessionStorage' | 'localStorage') {
  const fn = window[type]

  // 设置
  const setItem = <T>(key: string, val: T) => {
    fn.setItem(key, JSON.stringify(val))
    return val
  }

  // 获取
  const getItem = <T>(key: string, defaultVal: Partial<T> | null = null) => {
    const val = fn.getItem(key)

    // 如果为 null 取默认值
    if (val === null) {
      return defaultVal
    }

    return JSON.parse(val)
  }

  // 删除
  const removeItem = (key: string) => {
    fn.removeItem(key)
  }

  // 更新
  const updateItem = <T>(key: string, val: Partial<T>) => {
    const prev = getItem(key)
    return setItem<T>(key, { ...prev, ...val })
  }

  // 清除
  const clear = () => {
    fn.clear()
  }

  // 生成
  const generate = <T>(key: string) => {
    return {
      setItem: (val: T) => setItem<T>(key, val),
      getItem: (defaultVal?: Partial<T>) => getItem<T>(key, defaultVal),
      removeItem: () => removeItem(key),
      updateItem: (val: Partial<T>) => updateItem<T>(key, val),
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
    updateItem,
    clear,
    generate,
  }
}