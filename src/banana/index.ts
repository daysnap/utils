
import { each, eachAsync } from '../each'
import { validateCore, extractCore, assignmentCore, assignmentAsyncCore, extractAsyncCore, validateAsyncCore } from './core'
import { TypeSource } from './type'

export const banana = {
    async validateAsync (...sources: TypeSource[]) {
        await eachAsync<TypeSource>(sources, validateAsyncCore)
        return await this.extractAsync(...sources)
    },
    async extractAsync (...sources: TypeSource[]) {
        const result = {}
        await eachAsync<TypeSource>(sources, async (source) => {
            Object.assign(result, await extractAsyncCore(source))
        })
        return result
    },
    async assignmentAsync (data: {}, ...sources: TypeSource[]) {
        await eachAsync<TypeSource>(sources, async (source) => {
            await assignmentAsyncCore(data, source)
        })
    },
    validate (...sources: TypeSource[]) {
        each<TypeSource>(sources, validateCore)
        return this.extract(...sources)
    },
    extract (...sources: TypeSource[]) {
        const result = {}
        each<TypeSource>(sources, (source) => {
            Object.assign(result, extractCore(source))
        })
        return result
    },
    assignment (data: {}, ...sources: TypeSource[]) {
        each<TypeSource>(sources, (source) => {
            assignmentCore(data, source)
        })
    },
    filter(data: {}, rules: any[] = ['', null, undefined]) {
        return Object.keys(data).reduce((r, k) => {
            const v = data[k]
            if (!rules.includes(v)) r[k] = v
            return r
        }, {})
    }
}

export default banana
