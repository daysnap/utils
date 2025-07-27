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

poller.ts:23

## Properties

### count

• `Private` **count**: `number` = `0`

#### Defined in

poller.ts:14

___

### currentCount

• `Private` **currentCount**: `number` = `-1`

#### Defined in

poller.ts:17

___

### options

• `Private` **options**: [`PollerOptions`](../interfaces/PollerOptions.md)

#### Defined in

poller.ts:16

___

### task

• `Private` **task**: [`PollerTask`](../modules.md#pollertask)

#### Defined in

poller.ts:15

## Accessors

### isRunning

• `get` **isRunning**(): `boolean`

#### Returns

`boolean`

#### Defined in

poller.ts:19

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

poller.ts:28

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

poller.ts:46

___

### stop

▸ **stop**(): [`Poller`](Poller.md)

#### Returns

[`Poller`](Poller.md)

#### Defined in

poller.ts:41
