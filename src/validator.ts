
export const isEmpty = (v: any): boolean => ['', null, undefined].includes(v)

export const isNotEmpty = (v: any): boolean => !isEmpty(v)

export const isObject = (v: any): boolean => Object.prototype.toString.call(v) === '[object Object]'

export const isDate = (v: any): boolean => v instanceof Date && !isNaN(v.getTime())

export const isVinCode = (v: string): boolean => v.length > 10 && v.length <= 17
