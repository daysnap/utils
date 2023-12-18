import { isUndefined } from './isUndefined'

/**
 * 陷阱圈套
 * 主要用于缓存页面下、执行触发
 */
export interface Trap {
  list: Record<string, any>
  trigger: (id: string, data?: any) => void
  create: (id: string, cb: (...args: any[]) => any) => void
  delete: (id: string) => void
  clear: () => void
}

export const trap: Trap = {
  list: {},

  // 触发
  trigger(id, data = {}) {
    if (!id.startsWith('trap')) {
      throw new Error(`trap id 命名必须满足: trap:[componentName]:[action]`)
    }
    this.list[id] = data
  },

  // 创建
  create(id, cb) {
    if (!id.startsWith('trap')) {
      throw new Error(`trap id 命名必须满足: trap:[componentName]:[action]`)
    }
    const data = this.list[id]
    this.delete(id)
    if (!isUndefined(data)) {
      cb(data)
    }
  },

  // 删除
  delete(id) {
    delete this.list[id]
  },

  // 清除
  clear() {
    this.list = {}
  },
}

export function createTrapInstance<T = any>(id: string) {
  return {
    trigger(data?: T) {
      return trap.trigger(id, data)
    },
    create(cb: (data: T) => void) {
      return trap.create(id, cb)
    },
    delete() {
      return trap.delete(id)
    },
  }
}
