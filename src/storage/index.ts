import { factory } from './factory'

export const cache = factory('sessionStorage')

export const local = factory('localStorage')
