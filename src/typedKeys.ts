export function typedKeys<T extends Record<string, any>>(data: T) {
  return Object.keys(data) as (keyof T)[]
}
