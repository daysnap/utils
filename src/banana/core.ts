
import { isEmpty, isObject } from '../validator'
import { each, eachAsync } from '../each'
import { TypeSource, IBananaItem } from './type'

export async function validateAsyncCore (source: TypeSource) {
  await eachAsync<IBananaItem>(source, async (item) => {
    const { value, children, rules, hidden } = item
    if (children) {
      await validateAsyncCore(children)
    }
    if (hidden || !rules || !rules.length) return
    for (let i = 0, len = rules.length; i < len; i++) {
      const { required, validator, message } = rules[i]
      if (required && isEmpty(value)) {
        throw message
      }
      if (typeof validator === 'function' && await validator(value) === false) {
        throw message
      }
      if (validator instanceof RegExp && !validator.test(value)) {
        throw message
      }
    }
  })
}

export function validateCore (source: TypeSource) {
  each<IBananaItem>(source, (item) => {
    const { value, children, rules, hidden } = item
    if (children) {
      validateCore(children)
    }
    if (hidden || !rules || !rules.length) return
    for (let i = 0, len = rules.length; i < len; i++) {
      const { required, validator, message } = rules[i]
      if (required && isEmpty(value)) {
        throw message
      }
      if (typeof validator === 'function' && validator(value) === false) {
        throw message
      }
      if (validator instanceof RegExp && !validator.test(value)) {
        throw message
      }
    }
  })
}

export async function extractAsyncCore (source: TypeSource) {
  const result = {}
  await eachAsync<IBananaItem>(source, async (item, i) => {
    const { get, value, key, hidden, children } = item
    if (children) {
      Object.assign(result, await extractAsyncCore(children))
    }
    if (value === undefined || hidden) return
    const k = key ?? i
    if (typeof get === 'function') {
      const data = await get(value)
      if (isObject(data)) {
        Object.assign(result, data)
      } else {
        result[k] = data
      }
    } else {
      result[k] = value
    }
  })
  return result
}

export function extractCore (source: TypeSource) {
  const result = {}
  each<IBananaItem>(source, (item, i) => {
    const { get, value, key, hidden, children } = item
    if (children) {
      Object.assign(result, extractCore(children))
    }
    if (value === undefined || hidden) return
    const k = key ?? i
    if (typeof get === 'function') {
      const data = get(value)
      if (isObject(data)) {
        Object.assign(result, data)
      } else {
        result[k] = data
      }
    } else {
      result[k] = value
    }
  })
  return result
}

export async function assignmentAsyncCore (data: {}, source: TypeSource) {
  await eachAsync<IBananaItem>(source, async (item, i) => {
    const { set, value, key, children } = item
    if (children) {
      await assignmentAsyncCore(data, children)
    }
    if (value === undefined) return
    const k = key ?? i
    const v = data[k]
    if (typeof set === 'function') {
      await set(data, item)
    } else if (![undefined, null].includes(v)) {
      item.value = v
    }
  })
}

export function assignmentCore (data: {}, source: TypeSource) {
  each<IBananaItem>(source, (item, i) => {
    const { set, value, key, children } = item
    if (children) {
      assignmentCore(data, children)
    }
    if (value === undefined) return
    const k = key ?? i
    const v = data[k]
    if (typeof set === 'function') {
      set(data, item)
    } else if (![undefined, null].includes(v)) {
      item.value = v
    }
  })
}
