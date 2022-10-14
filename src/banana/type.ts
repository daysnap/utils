
export interface IBananaSource {
    [key: string]: IBananaItem
}

export interface IBananaItem {
    rules?: IRule[],
    value?: any,
    hidden?: boolean,
    children?: TypeSource,
    set?: (d: any, s: IBananaItem) => void,
    get?: (v: any) => ({}),
    key?: string,
    [key: string]: any,
}

export interface IRule {
    validator?: RegExp | ((v: any) => Promise<boolean>) | ((v: any) => boolean),
    message?: string,
    required?: boolean,
}

export type TypeSource = (IBananaSource[] | { [key: string]: IBananaSource })

