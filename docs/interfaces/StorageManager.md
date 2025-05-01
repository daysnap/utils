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

[storage/factory.ts:6](https://github.com/daysnap/utils/blob/e725a33/src/storage/factory.ts#L6)

___

### removeItem

▸ **removeItem**(): `void`

#### Returns

`void`

#### Defined in

[storage/factory.ts:7](https://github.com/daysnap/utils/blob/e725a33/src/storage/factory.ts#L7)

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

[storage/factory.ts:5](https://github.com/daysnap/utils/blob/e725a33/src/storage/factory.ts#L5)

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

[storage/factory.ts:8](https://github.com/daysnap/utils/blob/e725a33/src/storage/factory.ts#L8)
