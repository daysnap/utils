[@daysnap/utils](../README.md) / [Exports](../modules.md) / Trap

# Interface: Trap

陷阱圈套
主要用于缓存页面下、执行触发

## Table of contents

### Properties

- [clear](Trap.md#clear)
- [create](Trap.md#create)
- [delete](Trap.md#delete)
- [list](Trap.md#list)
- [trigger](Trap.md#trigger)

## Properties

### clear

• **clear**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[trap.ts:12](https://github.com/daysnap/utils/blob/c036886/src/trap.ts#L12)

___

### create

• **create**: (`id`: `string`, `cb`: (...`args`: `any`[]) => `any`) => `void`

#### Type declaration

▸ (`id`, `cb`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `cb` | (...`args`: `any`[]) => `any` |

##### Returns

`void`

#### Defined in

[trap.ts:10](https://github.com/daysnap/utils/blob/c036886/src/trap.ts#L10)

___

### delete

• **delete**: (`id`: `string`) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`void`

#### Defined in

[trap.ts:11](https://github.com/daysnap/utils/blob/c036886/src/trap.ts#L11)

___

### list

• **list**: `Record`<`string`, `any`\>

#### Defined in

[trap.ts:8](https://github.com/daysnap/utils/blob/c036886/src/trap.ts#L8)

___

### trigger

• **trigger**: (`id`: `string`, `data?`: `any`) => `void`

#### Type declaration

▸ (`id`, `data?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `data?` | `any` |

##### Returns

`void`

#### Defined in

[trap.ts:9](https://github.com/daysnap/utils/blob/c036886/src/trap.ts#L9)
