
import './interface'

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
