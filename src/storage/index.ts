import { factory } from './factory'

export * from './factory'

type FactoryReturn = ReturnType<typeof factory>

const getStorage = (type: 'sessionStorage' | 'localStorage') => {
  let instance: any = null
  return () => {
    if (!instance) {
      instance = factory(type)
    }
    return instance as FactoryReturn
  }
}

export const getCache = getStorage('sessionStorage')

export const getLocal = getStorage('localStorage')
