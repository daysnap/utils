[@daysnap/utils](../README.md) / [Exports](../modules.md) / Storage

# Class: Storage<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

- [constructor](Storage.md#constructor)

### Properties

- [key](Storage.md#key)
- [storage](Storage.md#storage)
- [value](Storage.md#value)

### Methods

- [getItem](Storage.md#getitem)
- [getItemOnce](Storage.md#getitemonce)
- [getItemWithCache](Storage.md#getitemwithcache)
- [removeItem](Storage.md#removeitem)
- [setItem](Storage.md#setitem)
- [updateItem](Storage.md#updateitem)

## Constructors

### constructor

• **new Storage**<`T`\>(`key`, `storage`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `storage` | `StorageLike` |

#### Defined in

[storage/storage.ts:15](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L15)

## Properties

### key

• `Private` `Readonly` **key**: `string`

#### Defined in

[storage/storage.ts:11](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L11)

___

### storage

• `Private` `Readonly` **storage**: `StorageLike`

#### Defined in

[storage/storage.ts:12](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L12)

___

### value

• `Private` **value**: ``null`` \| `T` = `null`

#### Defined in

[storage/storage.ts:13](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L13)

## Methods

### getItem

▸ **getItem**(): ``null`` \| `T`

获取值

#### Returns

``null`` \| `T`

#### Defined in

[storage/storage.ts:32](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L32)

▸ **getItem**(`defaultVal`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal` | `Partial`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:33](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L33)

___

### getItemOnce

▸ **getItemOnce**(): ``null`` \| `T`

获取值后，删除存储的值

#### Returns

``null`` \| `T`

#### Defined in

[storage/storage.ts:69](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L69)

▸ **getItemOnce**(`defaultVal`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal` | `Partial`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:70](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L70)

___

### getItemWithCache

▸ **getItemWithCache**(): ``null`` \| `T`

优先从缓存中获取值

#### Returns

``null`` \| `T`

#### Defined in

[storage/storage.ts:85](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L85)

▸ **getItemWithCache**(`defaultVal`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal` | `Partial`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:86](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L86)

___

### removeItem

▸ **removeItem**(): `void`

删除值

#### Returns

`void`

#### Defined in

[storage/storage.ts:45](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L45)

___

### setItem

▸ **setItem**(`val`): `T`

设置值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Returns

`T`

#### Defined in

[storage/storage.ts:23](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L23)

___

### updateItem

▸ **updateItem**(`val`): `T`

更新值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `Partial`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:53](https://github.com/daysnap/utils/blob/90ba9f7/src/storage/storage.ts#L53)
