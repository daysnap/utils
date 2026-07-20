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
- [options](Storage.md#options)
- [storage](Storage.md#storage)
- [value](Storage.md#value)

### Methods

- [\_debug](Storage.md#_debug)
- [clearCache](Storage.md#clearcache)
- [getItem](Storage.md#getitem)
- [getItemOnce](Storage.md#getitemonce)
- [getItemWithCache](Storage.md#getitemwithcache)
- [removeItem](Storage.md#removeitem)
- [setItem](Storage.md#setitem)
- [updateItem](Storage.md#updateitem)

## Constructors

### constructor

• **new Storage**<`T`\>(`key`, `storage`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `storage` | `StorageLike` |
| `options?` | `Partial`<`StorageOptions`<`T`\>\> |

#### Defined in

[storage/storage.ts:24](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L24)

## Properties

### key

• `Private` `Readonly` **key**: `string`

#### Defined in

[storage/storage.ts:19](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L19)

___

### options

• `Private` **options**: `StorageOptions`<`T`\>

#### Defined in

[storage/storage.ts:22](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L22)

___

### storage

• `Private` `Readonly` **storage**: `StorageLike`

#### Defined in

[storage/storage.ts:20](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L20)

___

### value

• `Private` **value**: ``null`` \| `T` = `null`

#### Defined in

[storage/storage.ts:21](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L21)

## Methods

### \_debug

▸ **_debug**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

[storage/storage.ts:43](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L43)

___

### clearCache

▸ **clearCache**(): `void`

清除缓存

#### Returns

`void`

#### Defined in

[storage/storage.ts:137](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L137)

___

### getItem

▸ **getItem**(): ``null`` \| `T`

获取值

#### Returns

``null`` \| `T`

#### Defined in

[storage/storage.ts:65](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L65)

▸ **getItem**(`defaultVal`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal` | `DefaultVal`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:66](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L66)

___

### getItemOnce

▸ **getItemOnce**(): ``null`` \| `T`

获取值后，删除存储的值

#### Returns

``null`` \| `T`

#### Defined in

[storage/storage.ts:102](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L102)

▸ **getItemOnce**(`defaultVal`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal` | `DefaultVal`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:103](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L103)

___

### getItemWithCache

▸ **getItemWithCache**(): ``null`` \| `T`

优先从缓存中获取值

#### Returns

``null`` \| `T`

#### Defined in

[storage/storage.ts:115](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L115)

▸ **getItemWithCache**(`defaultVal`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultVal` | `DefaultVal`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:116](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L116)

___

### removeItem

▸ **removeItem**(): `void`

删除值

#### Returns

`void`

#### Defined in

[storage/storage.ts:78](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L78)

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

[storage/storage.ts:52](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L52)

___

### updateItem

▸ **updateItem**(`val`): `T`

更新值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `DefaultVal`<`T`\> |

#### Returns

`T`

#### Defined in

[storage/storage.ts:86](https://github.com/daysnap/utils/blob/9ced15e/src/storage/storage.ts#L86)
