[@daysnap/utils](../README.md) / [Exports](../modules.md) / Poller

# Class: Poller

## Table of contents

### Constructors

- [constructor](Poller.md#constructor)

### Properties

- [count](Poller.md#count)
- [currentCount](Poller.md#currentcount)
- [options](Poller.md#options)
- [task](Poller.md#task)

### Accessors

- [isRunning](Poller.md#isrunning)

### Methods

- [run](Poller.md#run)
- [start](Poller.md#start)
- [stop](Poller.md#stop)

## Constructors

### constructor

• **new Poller**(`task`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`PollerTask`](../modules.md#pollertask) |
| `options` | `Partial`<[`PollerOptions`](../interfaces/PollerOptions.md)\> |

#### Defined in

[poller.ts:23](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L23)

## Properties

### count

• `Private` **count**: `number` = `0`

#### Defined in

[poller.ts:14](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L14)

___

### currentCount

• `Private` **currentCount**: `number` = `-1`

#### Defined in

[poller.ts:17](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L17)

___

### options

• `Private` **options**: [`PollerOptions`](../interfaces/PollerOptions.md)

#### Defined in

[poller.ts:16](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L16)

___

### task

• `Private` **task**: [`PollerTask`](../modules.md#pollertask)

#### Defined in

[poller.ts:15](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L15)

## Accessors

### isRunning

• `get` **isRunning**(): `boolean`

#### Returns

`boolean`

#### Defined in

[poller.ts:19](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L19)

## Methods

### run

▸ `Private` **run**(`count`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[poller.ts:28](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L28)

___

### start

▸ **start**(`forceUpdate?`): [`Poller`](Poller.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forceUpdate` | `boolean` | `true` |

#### Returns

[`Poller`](Poller.md)

#### Defined in

[poller.ts:46](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L46)

___

### stop

▸ **stop**(): [`Poller`](Poller.md)

#### Returns

[`Poller`](Poller.md)

#### Defined in

[poller.ts:41](https://github.com/daysnap/utils/blob/585cbee/src/poller.ts#L41)
