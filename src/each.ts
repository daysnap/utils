
type DataArray<T> = T[]

type DataObject<T> = { [key: string]: T }

type DataType<T> = DataArray<T> | DataObject<T>

export function each<T>(data: DataArray<T>, callback: (item: T, index: number, data: DataArray<T>) => void): DataArray<T>
export function each<T>(data: DataObject<T>, callback: (item: T, index: number, data: DataObject<T>) => void): DataObject<T>
export function each<T>(data: DataType<T>, callback: any): DataType<T>
export function each<T>(data: any, callback: any): any {
  if (Array.isArray(data)) {
    for (let index = 0, length = data.length; index < length; index++ ) {
      callback.call(data[index], data[index], index, data)
    }
  } else {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        callback.call(data[key], data[key], key, data)
      }
    }
  }
  return data
}

export async function eachAsync<T>(data: DataArray<T>, callback: (item: T, index: number, data: DataArray<T>) => void): Promise<DataArray<T>>
export async function eachAsync<T>(data: DataObject<T>, callback: (item: T, index: number, data: DataObject<T>) => void): Promise<DataObject<T>>
export async function eachAsync<T>(data: DataType<T>, callback: any): Promise<DataType<T>>
export async function eachAsync<T>(data: any, callback: any): Promise<any> {
  if (Array.isArray(data)) {
    for (let index = 0, length = data.length; index < length; index++ ) {
      await callback.call(data[index], data[index], index, data)
    }
  } else {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        await callback.call(data[key], data[key], key, data)
      }
    }
  }
  return data
}

