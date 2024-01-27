[@daysnap/utils](../README.md) / [Exports](../modules.md) / StorageManager

# Interface: StorageManager<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Methods

- [getItem](StorageManager.md#getitem)
- [removeItem](StorageManager.md#removeitem)
- [setItem](StorageManager.md#setitem)
- [updateItem](StorageManager.md#updateitem)

## Methods

### getItem

▸ **getItem**(`defaultVal?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal?` | `Partial`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/factory.ts:3](https://github.com/daysnap/utils/blob/c208cd2/src/storage/factory.ts#L3)

___

### removeItem

▸ **removeItem**(): `void`

#### Returns

`void`

#### Defined in

[storage/factory.ts:4](https://github.com/daysnap/utils/blob/c208cd2/src/storage/factory.ts#L4)

___

### setItem

▸ **setItem**(`val`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Returns

`T`

#### Defined in

[storage/factory.ts:2](https://github.com/daysnap/utils/blob/c208cd2/src/storage/factory.ts#L2)

___

### updateItem

▸ **updateItem**(`val`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `Partial`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/factory.ts:5](https://github.com/daysnap/utils/blob/c208cd2/src/storage/factory.ts#L5)
