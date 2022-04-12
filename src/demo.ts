
const dd = {
   d: '1'
}

interface NameInfo {
  name: string
}

const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}

getArray<string>('1')


interface GetArray<T> {
  (arg: T, timers: number): T[]
  count: T[]
}

const getArray1: GetArray<any> = (arg, timers) => {
  return new Array(timers).fill(arg)
}
getArray1.count = [1]
getArray<string>('1')


interface IParent {
  name: string
}

// abstract class AParent {
//   name: string
// }

const merge = <T, U>(arg1: T, arg2: U) => {
  return Object.assign({}, arg1, arg2)
}
function isString (value: number | string): value is string {
  return typeof value === 'string'
}

interface InfoInterfaceAdvanced {
  name: string,
  age: number
}
// type NameTypes = InfoInterfaceAdvanced['name']
// type NameTypes: string
// let str: NameTypes = 12


interface Type {
  a: never
  b: never
  c: string
  d: number
  e: undefined
  f: null
  g: object
}
type Test = Type[keyof Type]

// const test: Test =
