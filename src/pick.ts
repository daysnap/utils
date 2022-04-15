// type Type<T> = {
//   [P in keyof T]: number
// }
// type Type1 = Type<any>
// type Type2 = Type<unknown>

type Type<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface Part {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName: string): void
}
type Test1 = Type<Part>
type Type2 = Extract<'a' | 'b' | 'c', 'a' | 'b'> // c
type Type3 = NonNullable<string | number | null | undefined>
type Type4 = ReturnType<() => string>


interface InfoInter {
  name: string
  getRes(input: string): number
}
interface InfoInter {
  age: number
  getRes(input: number): string
}
const infoInter: InfoInter = {
  name: '张三',
  age: 18,
  getRes(input: any): any {
    return typeof input === 'string' ? input.length : String(input)
  }
}

function setDecorator<T extends new (...args: any[]) => {}>(target: T) {
  return class extends target {
    public newProperty = 'newProperty'
    public hello = 'override'
  }
}

@setDecorator
class Greeter {
  public property = 'property'
  constructor(public hello: string) {
  }
}

//
// interface Info {
//   name?: string
//   age?: number
// }
// const obj = { sex: 'man' }
// function printInfo (info: Info) {
//   console.log(info)
// }
// printInfo(obj)
export {}

