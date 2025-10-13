[@daysnap/utils](README.md) / Exports

# @daysnap/utils

## Table of contents

### Classes

- [Poller](classes/Poller.md)
- [Storage](classes/Storage.md)

### Interfaces

- [EventBusCallback](interfaces/EventBusCallback.md)
- [PollerOptions](interfaces/PollerOptions.md)
- [StorageManager](interfaces/StorageManager.md)
- [Trap](interfaces/Trap.md)

### Type Aliases

- [PollerTask](modules.md#pollertask)

### Variables

- [eventBus](modules.md#eventbus)
- [trap](modules.md#trap)

### Functions

- [ato](modules.md#ato)
- [atob](modules.md#atob)
- [base64ToBlob](modules.md#base64toblob)
- [blobToBase64](modules.md#blobtobase64)
- [btoa](modules.md#btoa)
- [cached](modules.md#cached)
- [camelCase](modules.md#camelcase)
- [canvasToBlob](modules.md#canvastoblob)
- [capitalize](modules.md#capitalize)
- [chooseMedia](modules.md#choosemedia)
- [clamp](modules.md#clamp)
- [clone](modules.md#clone)
- [cloneSimple](modules.md#clonesimple)
- [colorGenByHash](modules.md#colorgenbyhash)
- [compareVersion](modules.md#compareversion)
- [compressImage](modules.md#compressimage)
- [crToBr](modules.md#crtobr)
- [createFactory](modules.md#createfactory)
- [createLinearFunction](modules.md#createlinearfunction)
- [createTrapInstance](modules.md#createtrapinstance)
- [createWithLoading](modules.md#createwithloading)
- [crlfToBr](modules.md#crlftobr)
- [debounce](modules.md#debounce)
- [downloadFile](modules.md#downloadfile)
- [each](modules.md#each)
- [exitFullscreen](modules.md#exitfullscreen)
- [factory](modules.md#factory)
- [filterBankCardNo](modules.md#filterbankcardno)
- [filterCRLF](modules.md#filtercrlf)
- [filterEmoji](modules.md#filteremoji)
- [filterEmptyValue](modules.md#filteremptyvalue)
- [filterIdCard](modules.md#filteridcard)
- [filterName](modules.md#filtername)
- [filterPhone](modules.md#filterphone)
- [filterString](modules.md#filterstring)
- [formatAmount](modules.md#formatamount)
- [formatDate](modules.md#formatdate)
- [formatDateStr](modules.md#formatdatestr)
- [formatDateToZN](modules.md#formatdatetozn)
- [formatFileSize](modules.md#formatfilesize)
- [formatGapDate](modules.md#formatgapdate)
- [formatMessage](modules.md#formatmessage)
- [formatPathParams](modules.md#formatpathparams)
- [getBlobByUrl](modules.md#getblobbyurl)
- [getCache](modules.md#getcache)
- [getDateBoundsByMonths](modules.md#getdateboundsbymonths)
- [getDayMillisecond](modules.md#getdaymillisecond)
- [getDaysOfMonth](modules.md#getdaysofmonth)
- [getImageInfo](modules.md#getimageinfo)
- [getLocal](modules.md#getlocal)
- [getMonthBounds](modules.md#getmonthbounds)
- [getRandom](modules.md#getrandom)
- [getRandomColor](modules.md#getrandomcolor)
- [getRandomNumber](modules.md#getrandomnumber)
- [getRangeDate](modules.md#getrangedate)
- [getScrollTop](modules.md#getscrolltop)
- [getVideoInfo](modules.md#getvideoinfo)
- [getWeekBounds](modules.md#getweekbounds)
- [getWeekday](modules.md#getweekday)
- [inBrowser](modules.md#inbrowser)
- [insertLink](modules.md#insertlink)
- [insertScript](modules.md#insertscript)
- [insertStyle](modules.md#insertstyle)
- [isAmount](modules.md#isamount)
- [isAndroid](modules.md#isandroid)
- [isArray](modules.md#isarray)
- [isBoolean](modules.md#isboolean)
- [isChinese](modules.md#ischinese)
- [isDate](modules.md#isdate)
- [isEmail](modules.md#isemail)
- [isEmpty](modules.md#isempty)
- [isEmptyArray](modules.md#isemptyarray)
- [isEmptyObject](modules.md#isemptyobject)
- [isError](modules.md#iserror)
- [isFunction](modules.md#isfunction)
- [isIE](modules.md#isie)
- [isIOS](modules.md#isios)
- [isIdCard](modules.md#isidcard)
- [isJSONString](modules.md#isjsonstring)
- [isLan](modules.md#islan)
- [isLeapYear](modules.md#isleapyear)
- [isLicenseCode](modules.md#islicensecode)
- [isMobile](modules.md#ismobile)
- [isNativeFunction](modules.md#isnativefunction)
- [isNull](modules.md#isnull)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isPhone](modules.md#isphone)
- [isPromise](modules.md#ispromise)
- [isRegExp](modules.md#isregexp)
- [isString](modules.md#isstring)
- [isType](modules.md#istype)
- [isUndefined](modules.md#isundefined)
- [isUrl](modules.md#isurl)
- [isValidDate](modules.md#isvaliddate)
- [isWeChat](modules.md#iswechat)
- [isWeChatMiniProgram](modules.md#iswechatminiprogram)
- [isWeixin](modules.md#isweixin)
- [isWindow](modules.md#iswindow)
- [kebabCase](modules.md#kebabcase)
- [lfToBr](modules.md#lftobr)
- [listGenerator](modules.md#listgenerator)
- [makePhoneCall](modules.md#makephonecall)
- [mousewheel](modules.md#mousewheel)
- [nf](modules.md#nf)
- [normalizeDate](modules.md#normalizedate)
- [normalizePath](modules.md#normalizepath)
- [omit](modules.md#omit)
- [padding](modules.md#padding)
- [parseDate](modules.md#parsedate)
- [parseError](modules.md#parseerror)
- [parseObject](modules.md#parseobject)
- [parsePath](modules.md#parsepath)
- [parseQuery](modules.md#parsequery)
- [parseQueryString](modules.md#parsequerystring)
- [pascalCase](modules.md#pascalcase)
- [pick](modules.md#pick)
- [replaceCrlf](modules.md#replacecrlf)
- [requestFullScreen](modules.md#requestfullscreen)
- [reserve](modules.md#reserve)
- [rgbToHex](modules.md#rgbtohex)
- [round](modules.md#round)
- [scrollToTop](modules.md#scrolltotop)
- [setScrollTop](modules.md#setscrolltop)
- [sleep](modules.md#sleep)
- [splitArray](modules.md#splitarray)
- [stringTrim](modules.md#stringtrim)
- [stringifyQuery](modules.md#stringifyquery)
- [stringifyQueryString](modules.md#stringifyquerystring)
- [throttle](modules.md#throttle)
- [throttleLeading](modules.md#throttleleading)
- [throttleTrailing](modules.md#throttletrailing)
- [toCDB](modules.md#tocdb)
- [toDBC](modules.md#todbc)
- [typeOf](modules.md#typeof)
- [withCache](modules.md#withcache)
- [withPreventConsecutiveClicks](modules.md#withpreventconsecutiveclicks)

## Type Aliases

### PollerTask

Ƭ **PollerTask**: (`poller`: [`Poller`](classes/Poller.md)) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`poller`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `poller` | [`Poller`](classes/Poller.md) |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[poller.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/poller.ts#L7)

## Variables

### eventBus

• `Const` **eventBus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clear` | (`eventName?`: `string`) => `void` |
| `emit` | (`eventName`: `string`, ...`args`: `any`[]) => `void` |
| `off` | (`eventName`: `string`, `callback`: [`EventBusCallback`](interfaces/EventBusCallback.md)) => `void` |
| `on` | (`eventName`: `string`, `callback`: [`EventBusCallback`](interfaces/EventBusCallback.md)) => () => `void` |

#### Defined in

<<<<<<< HEAD
[eventBus.ts:38](https://github.com/daysnap/utils/blob/59e0309/src/eventBus.ts#L38)
=======
[eventBus.ts:38](https://github.com/daysnap/utils/blob/bdaccfb/src/eventBus.ts#L38)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### trap

• `Const` **trap**: [`Trap`](interfaces/Trap.md)

#### Defined in

<<<<<<< HEAD
[trap.ts:15](https://github.com/daysnap/utils/blob/59e0309/src/trap.ts#L15)
=======
[trap.ts:15](https://github.com/daysnap/utils/blob/bdaccfb/src/trap.ts#L15)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

## Functions

### ato

▸ **ato**<`T`, `K`\>(`options`, `labelKey`): `Record`<`T`[`K`], `T`\>

数组转换称对象
const options = [
 {label: '男', value: '1'}
 {label: '女', value: '2'}
]
const res = ato(options, 'value')
res = { '1': {label: '男', value: '1'}, '2': {label: '女', value: '2'} }
const res = ato(options, 'value', 'label')
res = { '1': '男', '2': '女' }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T`[] |
| `labelKey` | `K` |

#### Returns

`Record`<`T`[`K`], `T`\>

#### Defined in

<<<<<<< HEAD
[ato.ts:12](https://github.com/daysnap/utils/blob/59e0309/src/ato.ts#L12)
=======
[ato.ts:12](https://github.com/daysnap/utils/blob/bdaccfb/src/ato.ts#L12)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **ato**<`T`, `K`\>(`options`, `labelKey`, `valueKey`): `Record`<`T`[`K`], `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T`[] |
| `labelKey` | `K` |
| `valueKey` | `K` |

#### Returns

`Record`<`T`[`K`], `any`\>

#### Defined in

<<<<<<< HEAD
[ato.ts:16](https://github.com/daysnap/utils/blob/59e0309/src/ato.ts#L16)
=======
[ato.ts:16](https://github.com/daysnap/utils/blob/bdaccfb/src/ato.ts#L16)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### atob

▸ **atob**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[decode.ts:41](https://github.com/daysnap/utils/blob/59e0309/src/decode.ts#L41)
=======
[decode.ts:41](https://github.com/daysnap/utils/blob/bdaccfb/src/decode.ts#L41)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### base64ToBlob

▸ **base64ToBlob**(`base64`, `contentType?`): `Blob`

base64 转 blob

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | base64字符串 |
| `contentType?` | `string` | 文件类型 |

#### Returns

`Blob`

#### Defined in

<<<<<<< HEAD
[base64ToBlob.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/base64ToBlob.ts#L6)
=======
[base64ToBlob.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/base64ToBlob.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### blobToBase64

▸ **blobToBase64**(`blob`, `contentType?`): `Promise`<`string` \| `ArrayBuffer`\>

blob 转 base64

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `Blob` |
| `contentType?` | `string` |

#### Returns

`Promise`<`string` \| `ArrayBuffer`\>

#### Defined in

<<<<<<< HEAD
[blobToBase64.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/blobToBase64.ts#L4)
=======
[blobToBase64.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/blobToBase64.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### btoa

▸ **btoa**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[decode.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/decode.ts#L8)
=======
[decode.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/decode.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### cached

▸ **cached**<`T`\>(`fn`): (...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\>

缓存、记忆函数，缓存函数的运算结果
需注意缓存的函数得是纯函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |

#### Returns

`fn`

▸ (`...args`): `ReturnType`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`T`\> |

##### Returns

`ReturnType`<`T`\>

#### Defined in

<<<<<<< HEAD
[cached.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/cached.ts#L5)
=======
[cached.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/cached.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### camelCase

▸ **camelCase**(`str`): `string`

驼峰
camelCase('hello-world') => helloWorld

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[camelCase.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/camelCase.ts#L5)
=======
[camelCase.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/camelCase.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### canvasToBlob

▸ **canvasToBlob**(`canvas`, `type?`, `quality?`): `Promise`<`Blob`\>

canvas 转 blob 文件

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `type?` | `string` |
| `quality?` | `any` |

#### Returns

`Promise`<`Blob`\>

#### Defined in

<<<<<<< HEAD
[canvasToBlob.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/canvasToBlob.ts#L4)
=======
[canvasToBlob.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/canvasToBlob.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### capitalize

▸ **capitalize**(`str`): `string`

首字母大写
capitalize('hello world') => Hello world

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[capitalize.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/capitalize.ts#L5)
=======
[capitalize.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/capitalize.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### chooseMedia

▸ **chooseMedia**(`options?`): `Promise`<`File`[]\>

创建 input 触发选择文件
因为 iOS 必须把 input 元素添加到 document 才会获取到文件，所以这里做了兼容处理

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.accept?` | `string` |
| `options.multiple?` | `boolean` |

#### Returns

`Promise`<`File`[]\>

#### Defined in

<<<<<<< HEAD
[chooseMedia.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/chooseMedia.ts#L5)
=======
[chooseMedia.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/chooseMedia.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### clamp

▸ **clamp**(`min`, `val`, `max`): `number`

首选值超出最小值，返回最小值；首选值超出最大值，返回最大值；其余返回首选值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | 最小值 |
| `val` | `number` | - |
| `max` | `number` | 最大值 |

#### Returns

`number`

#### Defined in

<<<<<<< HEAD
[clamp.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/clamp.ts#L7)
=======
[clamp.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/clamp.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### clone

▸ **clone**<`T`\>(`source`): `T`

深拷贝

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `T` | 需要转换的值 |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[clone.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/clone.ts#L8)
=======
[clone.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/clone.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### cloneSimple

▸ **cloneSimple**<`T`\>(`source`): `T`

拷贝对象

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `T` | 需要转换的值 需要注意 当值为 undefined、function、symbol 会在转换过程中被忽略 |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[cloneSimple.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/cloneSimple.ts#L7)
=======
[cloneSimple.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/cloneSimple.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### colorGenByHash

▸ **colorGenByHash**(`str`): `string`

根据字符串hash值生成颜色值

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[createHexColorByHash.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/createHexColorByHash.ts#L4)
=======
[createHexColorByHash.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/createHexColorByHash.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### compareVersion

▸ **compareVersion**(`nv`, `v`): ``-1`` \| ``0`` \| ``1``

比对版本
-1 => nv < v
0 => nv === v
1 => nv > v

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nv` | `string` | 新版本 |
| `v` | `string` | 版本 |

#### Returns

``-1`` \| ``0`` \| ``1``

#### Defined in

<<<<<<< HEAD
[compareVersion.ts:9](https://github.com/daysnap/utils/blob/59e0309/src/compareVersion.ts#L9)
=======
[compareVersion.ts:9](https://github.com/daysnap/utils/blob/bdaccfb/src/compareVersion.ts#L9)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### compressImage

▸ **compressImage**(`image`, `mw`): `Promise`<`HTMLCanvasElement`\>

利用 canvas 压缩图片

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `HTMLImageElement` |
| `mw` | `number` |

#### Returns

`Promise`<`HTMLCanvasElement`\>

#### Defined in

<<<<<<< HEAD
[compressImage.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/compressImage.ts#L4)
=======
[compressImage.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/compressImage.ts#L4)

___

### crToBr

▸ **crToBr**(`v`): `string`

\r to <br/>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`string`

#### Defined in

[crToBr.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/crToBr.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### createFactory

▸ **createFactory**<`T`\>(`initial`): readonly [(`value`: `T`) => `T`, () => `T`]

创建工厂函数

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `T` |

#### Returns

readonly [(`value`: `T`) => `T`, () => `T`]

#### Defined in

<<<<<<< HEAD
[createFactory.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/createFactory.ts#L4)
=======
[createFactory.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/createFactory.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### createLinearFunction

▸ **createLinearFunction**(`x1`, `x2`, `y1`, `y2`): (`x`: `number`) => `number`

创建一个线性函数
主要用于动画值计算

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | 坐标轴 x1 |
| `x2` | `number` | 坐标轴 x2 |
| `y1` | `number` | 坐标轴 y1 |
| `y2` | `number` | 坐标轴 y2 |

#### Returns

`fn`

▸ (`x`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`number`

#### Defined in

<<<<<<< HEAD
[createLinearFunction.ts:9](https://github.com/daysnap/utils/blob/59e0309/src/createLinearFunction.ts#L9)
=======
[createLinearFunction.ts:9](https://github.com/daysnap/utils/blob/bdaccfb/src/createLinearFunction.ts#L9)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### createTrapInstance

▸ **createTrapInstance**<`T`\>(`id`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `create` | (`cb`: (`data`: `T`) => `void`) => `void` |
| `delete` | () => `void` |
| `trigger` | (`data?`: `T`) => `void` |

#### Defined in

<<<<<<< HEAD
[trap.ts:49](https://github.com/daysnap/utils/blob/59e0309/src/trap.ts#L49)
=======
[trap.ts:49](https://github.com/daysnap/utils/blob/bdaccfb/src/trap.ts#L49)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### createWithLoading

▸ **createWithLoading**<`O`\>(`showLoading`, `defaultOptions?`): <T\>(`fn`: `T`, `options`: `WithFalse`<`O`\>) => (...`params`: [...Parameters<T\>[], WithFalse<O\>?]) => `Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

loading 生成器
const withLoading = createWithLoading(() => showLoading())
const fn = withLoading(async () => { // ... })
fn() 执行的时候就会执行showLoading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `showLoading` | (`options`: `O`) => `Loose`<{ `close`: () => `any`  }\> |
| `defaultOptions?` | `O` |

#### Returns

`fn`

▸ <`T`\>(`fn`, `options?`): (...`params`: [...Parameters<T\>[], WithFalse<O\>?]) => `Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `Promise`<`any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `options` | `WithFalse`<`O`\> |

##### Returns

`fn`

▸ (`...params`): `Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | [...Parameters<T\>[], WithFalse<O\>?] |

##### Returns

`Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

#### Defined in

<<<<<<< HEAD
[createWithLoading.ts:11](https://github.com/daysnap/utils/blob/59e0309/src/createWithLoading.ts#L11)
=======
[createWithLoading.ts:11](https://github.com/daysnap/utils/blob/bdaccfb/src/createWithLoading.ts#L11)

___

### crlfToBr

▸ **crlfToBr**(`v`): `string`

\r \n to <br/>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`string`

#### Defined in

[crlfToBr.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/crlfToBr.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### debounce

▸ **debounce**<`T`\>(`fn`, `ms`): (`this`: `unknown`, ...`args`: `Parameters`<`T`\>) => `void`

防抖函数
事件频繁触发，只会执行最后一次

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `ms` | `number` |

#### Returns

`fn`

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | `Parameters`<`T`\> |

##### Returns

`void`

#### Defined in

<<<<<<< HEAD
[debounce.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/debounce.ts#L5)
=======
[debounce.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/debounce.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### downloadFile

▸ **downloadFile**(`data`, `options?`): `void`

通过 a 标签下载文件

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Blob` \| `MediaSource` |
| `options?` | `Object` |
| `options.fileName?` | `string` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[downloadFile.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/downloadFile.ts#L4)
=======
[downloadFile.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/downloadFile.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### each

▸ **each**<`T`\>(`data`, `callback`): `void`

支持遍历数组和对象

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |
| `callback` | (`item`: `T`, `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[each.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/each.ts#L4)
=======
[each.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/each.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **each**<`T`\>(`data`, `callback`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `T`\> |
| `callback` | (`item`: `T`, `key`: `string`) => `void` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[each.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/each.ts#L8)
=======
[each.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/each.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`<`any`\>

退出全屏
成功则 resolve , 如果不支持退出全屏或退出失败则 rejected
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen)

#### Returns

`Promise`<`any`\>

#### Defined in

<<<<<<< HEAD
[exitFullscreen.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/exitFullscreen.ts#L6)
=======
[exitFullscreen.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/exitFullscreen.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### factory

▸ **factory**(`type`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"sessionStorage"`` \| ``"localStorage"`` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `generate` | <T\>(`key`: `string`) => { `getItem`: (`defaultVal?`: `Partial`<`T`\>) => `T` ; `removeItem`: () => `void` ; `setItem`: (`val`: `T`) => `T` ; `updateItem`: (`val`: `Partial`<`T`\>) => `T`  } |
| `getItem` | <T\>(`key`: `string`, `defaultVal`: ``null`` \| `Partial`<`T`\>) => `T` |
| `removeItem` | (`key`: `string`) => `void` |
| `setItem` | <T\>(`key`: `string`, `val`: `T`) => `T` |
| `updateItem` | <T\>(`key`: `string`, `val`: `Partial`<`T`\>) => `T` |

#### Defined in

<<<<<<< HEAD
[storage/factory.ts:11](https://github.com/daysnap/utils/blob/59e0309/src/storage/factory.ts#L11)
=======
[storage/factory.ts:11](https://github.com/daysnap/utils/blob/bdaccfb/src/storage/factory.ts#L11)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterBankCardNo

▸ **filterBankCardNo**(`val`): `string`

过滤银行卡号

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterBankCardNo.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/filterBankCardNo.ts#L4)
=======
[filterBankCardNo.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/filterBankCardNo.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterCRLF

▸ **filterCRLF**(`v`): `string`

替换字符串里面的回车换行符

**`Deprecated`**

请使用

**`See`**

[crlfToBr](modules.md#crlftobr).

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterCRLF.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/filterCRLF.ts#L4)
=======
[crlfToBr.ts:12](https://github.com/daysnap/utils/blob/bdaccfb/src/crlfToBr.ts#L12)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterEmoji

▸ **filterEmoji**(`val`): `string`

过滤emoji

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterEmoji.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/filterEmoji.ts#L4)
=======
[filterEmoji.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/filterEmoji.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterEmptyValue

▸ **filterEmptyValue**(`obj`, `expand?`): `Record`<`string`, `any`\>

过滤对象的 undefined null '' 属性，返回一个新对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Record`<`string`, `any`\> | `undefined` | 需要过滤的对象 |
| `expand` | `boolean` \| (`key`: `string`, `value`: `any`) => `boolean` | `false` | 如果是传的是布尔类型 true， 则还会过滤空数组、空对象的情况 |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

<<<<<<< HEAD
[filterEmptyValue.ts:12](https://github.com/daysnap/utils/blob/59e0309/src/filterEmptyValue.ts#L12)
=======
[filterEmptyValue.ts:12](https://github.com/daysnap/utils/blob/bdaccfb/src/filterEmptyValue.ts#L12)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterIdCard

▸ **filterIdCard**(`val`): `string`

身份证号码加 *
430421202312121234 => 430421********1234

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterIdCard.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/filterIdCard.ts#L5)
=======
[filterIdCard.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/filterIdCard.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterName

▸ **filterName**(`val`): `string`

过滤姓名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterName.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/filterName.ts#L4)
=======
[filterName.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/filterName.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterPhone

▸ **filterPhone**(`val`, `sep?`): `string`

手机号加 *
filterPhone('13177778888') => 131****8888
filterPhone('13177778888', ' ') => 131 **** 8888

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `val` | `string` | `undefined` |
| `sep` | `string` | `''` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterPhone.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/filterPhone.ts#L6)
=======
[filterPhone.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/filterPhone.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### filterString

▸ **filterString**(`val`, `sep?`, `start?`, `end?`): `string`

过滤字符串
const str = filterString('13188888888', '*', 3, 7)
str = '131****8888'

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `val` | `string` | `undefined` |
| `sep` | `string` | `'*'` |
| `start` | `number` | `0` |
| `end?` | `number` | `undefined` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[filterString.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/filterString.ts#L6)
=======
[filterString.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/filterString.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatAmount

▸ **formatAmount**(`s`, `radix?`): `string`

格式化金额，默认元

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` \| `number` | `undefined` |
| `radix` | `number` | `1` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[formatAmount.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/formatAmount.ts#L4)
=======
[formatAmount.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/formatAmount.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatDate

▸ **formatDate**(`val?`, `fmt?`): `string`

格式化日期
默认的当前日期 yyyy-MM-dd hh:mm:ss

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `val` | `string` \| `number` \| `Date` | `undefined` |
| `fmt` | `string` | `'yyyy-MM-dd hh:mm:ss'` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[formatDate.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/formatDate.ts#L7)
=======
[formatDate.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/formatDate.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatDateStr

▸ **formatDateStr**(`v`): `Date`

str 转换成 date
fix iOS 日期时间格式如果是 - 就会报错的问题

**`Deprecated`**

请使用

**`See`**

[normalizeDate](modules.md#normalizedate).

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`Date`

#### Defined in

<<<<<<< HEAD
[formatDateStr.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/formatDateStr.ts#L6)
=======
[formatDateStr.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/formatDateStr.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatDateToZN

▸ **formatDateToZN**(`v`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` \| `Date` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[formartDateToZN.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/formartDateToZN.ts#L4)
=======
[formartDateToZN.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/formartDateToZN.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatFileSize

▸ **formatFileSize**(`bytes`, `decimals?`): `string`

格式化字节大小

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | `number` | `undefined` |
| `decimals` | `number` | `2` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[formatFileSize.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/formatFileSize.ts#L4)
=======
[formatFileSize.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/formatFileSize.ts#L4)

___

### formatGapDate

▸ **formatGapDate**(`val`, `gap?`): `string`

yyyyMMdd -> yyyy-MM-dd

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `val` | `string` \| `number` | `undefined` |
| `gap` | `string` | `'-'` |

#### Returns

`string`

#### Defined in

formatGapDate.ts:4
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatMessage

▸ **formatMessage**(`message`, `keys?`): `string`

格式化消息
formatMessage({ a: '123', b: { ba: '456' } }, ['a']) => '123'
formatMessage({ a: '123', b: { ba: '456' } }, ['b.ba']) => '456'

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `keys` | `string`[] |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[formatMessage.ts:11](https://github.com/daysnap/utils/blob/59e0309/src/formatMessage.ts#L11)
=======
[formatMessage.ts:11](https://github.com/daysnap/utils/blob/bdaccfb/src/formatMessage.ts#L11)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### formatPathParams

▸ **formatPathParams**(`path`, `params?`): `Object`

格式化字符串参数，一般用来处理 api path params
const url = 'api/v1/user/{id}'
const { path, rest } = formatPathParams(url, { id: 123, xxx: 1 })
path = 'api/v1/user/123'
rest = { xxx: 1 }

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params` | `Record`<`string`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `rest` | {} |

#### Defined in

<<<<<<< HEAD
[formatPathParams.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/formatPathParams.ts#L8)
=======
[formatPathParams.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/formatPathParams.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getBlobByUrl

▸ **getBlobByUrl**(`url`): `Promise`<`Blob`\>

根据在线 url 返回 blob

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`Blob`\>

#### Defined in

<<<<<<< HEAD
[getBlobByUrl.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/getBlobByUrl.ts#L4)
=======
[getBlobByUrl.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getBlobByUrl.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getCache

▸ **getCache**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `generate` | <T\>(`key`: `string`) => { `getItem`: (`defaultVal?`: `Partial`<`T`\>) => `T` ; `removeItem`: () => `void` ; `setItem`: (`val`: `T`) => `T` ; `updateItem`: (`val`: `Partial`<`T`\>) => `T`  } |
| `getItem` | <T\>(`key`: `string`, `defaultVal`: ``null`` \| `Partial`<`T`\>) => `T` |
| `removeItem` | (`key`: `string`) => `void` |
| `setItem` | <T\>(`key`: `string`, `val`: `T`) => `T` |
| `updateItem` | <T\>(`key`: `string`, `val`: `Partial`<`T`\>) => `T` |

#### Defined in

<<<<<<< HEAD
[storage/index.ts:10](https://github.com/daysnap/utils/blob/59e0309/src/storage/index.ts#L10)
=======
[storage/index.ts:10](https://github.com/daysnap/utils/blob/bdaccfb/src/storage/index.ts#L10)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getDateBoundsByMonths

▸ **getDateBoundsByMonths**(`monthsCount`, `date`): [`Date`, `Date`]

获取月份开始时间、结束时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `monthsCount` | `number` |
| `date` | `string` \| `number` \| `Date` |

#### Returns

[`Date`, `Date`]

#### Defined in

<<<<<<< HEAD
[getDateBoundsByMonths.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/getDateBoundsByMonths.ts#L8)
=======
[getDateBoundsByMonths.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/getDateBoundsByMonths.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **getDateBoundsByMonths**(`monthsCount`, `date`, `fmt`): [`string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `monthsCount` | `number` |
| `date` | `string` \| `number` \| `Date` |
| `fmt` | `string` |

#### Returns

[`string`, `string`]

#### Defined in

<<<<<<< HEAD
[getDateBoundsByMonths.ts:12](https://github.com/daysnap/utils/blob/59e0309/src/getDateBoundsByMonths.ts#L12)
=======
[getDateBoundsByMonths.ts:12](https://github.com/daysnap/utils/blob/bdaccfb/src/getDateBoundsByMonths.ts#L12)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getDayMillisecond

▸ **getDayMillisecond**(`day?`): `number`

获取多少天的毫秒数 默认获取1天的

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `day` | `number` | `1` |

#### Returns

`number`

#### Defined in

<<<<<<< HEAD
[getDayMillisecond.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/getDayMillisecond.ts#L4)
=======
[getDayMillisecond.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getDayMillisecond.ts#L4)

___

### getDaysOfMonth

▸ **getDaysOfMonth**(`year`, `month`): `number`

获取一个月当中的天数

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |

#### Returns

`number`

#### Defined in

[getDaysOfMonth.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getDaysOfMonth.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getImageInfo

▸ **getImageInfo**(`src`, `attrs?`): `Promise`<`HTMLImageElement`\>

获取图片信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `attrs` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`HTMLImageElement`\>

#### Defined in

<<<<<<< HEAD
[getImageInfo.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/getImageInfo.ts#L4)
=======
[getImageInfo.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getImageInfo.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getLocal

▸ **getLocal**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `generate` | <T\>(`key`: `string`) => { `getItem`: (`defaultVal?`: `Partial`<`T`\>) => `T` ; `removeItem`: () => `void` ; `setItem`: (`val`: `T`) => `T` ; `updateItem`: (`val`: `Partial`<`T`\>) => `T`  } |
| `getItem` | <T\>(`key`: `string`, `defaultVal`: ``null`` \| `Partial`<`T`\>) => `T` |
| `removeItem` | (`key`: `string`) => `void` |
| `setItem` | <T\>(`key`: `string`, `val`: `T`) => `T` |
| `updateItem` | <T\>(`key`: `string`, `val`: `Partial`<`T`\>) => `T` |

#### Defined in

<<<<<<< HEAD
[storage/index.ts:10](https://github.com/daysnap/utils/blob/59e0309/src/storage/index.ts#L10)
=======
[storage/index.ts:10](https://github.com/daysnap/utils/blob/bdaccfb/src/storage/index.ts#L10)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getMonthBounds

▸ **getMonthBounds**(`value`): [`Date`, `Date`]

获取月份的开始时间和结束时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |

#### Returns

[`Date`, `Date`]

#### Defined in

<<<<<<< HEAD
[getMonthBounds.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/getMonthBounds.ts#L7)
=======
[getMonthBounds.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/getMonthBounds.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **getMonthBounds**(`value`, `fmt`): [`string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `fmt` | `string` |

#### Returns

[`string`, `string`]

#### Defined in

<<<<<<< HEAD
[getMonthBounds.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/getMonthBounds.ts#L8)
=======
[getMonthBounds.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/getMonthBounds.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getRandom

▸ **getRandom**(`length`, `alphabet?`): `string`

生成一个随机字符串

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `undefined` | 生成随机字符串的长度 |
| `alphabet` | `string` | `'1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'` | 字母表 |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[getRandom.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/getRandom.ts#L7)
=======
[getRandom.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/getRandom.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getRandomColor

▸ **getRandomColor**(): `string`

随机颜色

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[getRandomColor.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/getRandomColor.ts#L4)
=======
[getRandomColor.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getRandomColor.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getRandomNumber

▸ **getRandomNumber**(`length`): `string`

生成一个随机数字

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | 生成一个随机数字的长度 |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[getRandomNumber.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/getRandomNumber.ts#L7)
=======
[getRandomNumber.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/getRandomNumber.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getRangeDate

▸ **getRangeDate**(`sv`, `ev`): `Date`[]

获取一个时间段的日期

#### Parameters

| Name | Type |
| :------ | :------ |
| `sv` | `string` \| `number` \| `Date` |
| `ev` | `string` \| `number` \| `Date` |

#### Returns

`Date`[]

#### Defined in

<<<<<<< HEAD
[getRangeDate.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/getRangeDate.ts#L7)
=======
[getRangeDate.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/getRangeDate.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **getRangeDate**(`sv`, `ev`, `fmt`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sv` | `string` \| `number` \| `Date` |
| `ev` | `string` \| `number` \| `Date` |
| `fmt` | `string` |

#### Returns

`string`[]

#### Defined in

<<<<<<< HEAD
[getRangeDate.ts:11](https://github.com/daysnap/utils/blob/59e0309/src/getRangeDate.ts#L11)
=======
[getRangeDate.ts:11](https://github.com/daysnap/utils/blob/bdaccfb/src/getRangeDate.ts#L11)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getScrollTop

▸ **getScrollTop**(): `number`

获取 scrollTop

#### Returns

`number`

#### Defined in

<<<<<<< HEAD
[getScrollTop.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/getScrollTop.ts#L4)
=======
[getScrollTop.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getScrollTop.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getVideoInfo

▸ **getVideoInfo**(`src`): `Promise`<`HTMLVideoElement`\>

获取 video 信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`Promise`<`HTMLVideoElement`\>

#### Defined in

<<<<<<< HEAD
[getVideoInfo.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/getVideoInfo.ts#L4)
=======
[getVideoInfo.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/getVideoInfo.ts#L4)

___

### getWeekBounds

▸ **getWeekBounds**(`value`, `sundayIsFirstDay`): [`Date`, `Date`]

获取一周的开始时间和结束时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `sundayIsFirstDay` | `boolean` |

#### Returns

[`Date`, `Date`]

#### Defined in

[getWeekBounds.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/getWeekBounds.ts#L7)

▸ **getWeekBounds**(`value`, `sundayIsFirstDay`, `fmt`): [`string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |
| `sundayIsFirstDay` | `boolean` |
| `fmt` | `string` |

#### Returns

[`string`, `string`]

#### Defined in

[getWeekBounds.ts:11](https://github.com/daysnap/utils/blob/bdaccfb/src/getWeekBounds.ts#L11)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### getWeekday

▸ **getWeekday**(`value?`, `prefix?`): `string`

获取星期几

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Date` | `undefined` |
| `prefix` | `string` | `'周'` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[getWeekday.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/getWeekday.ts#L6)
=======
[getWeekday.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/getWeekday.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### inBrowser

▸ **inBrowser**(): `boolean`

判断是否是浏览器环境

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[inBrowser.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/inBrowser.ts#L4)
=======
[inBrowser.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/inBrowser.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### insertLink

▸ **insertLink**(`href`): `Promise`<`HTMLLinkElement`\>

插入 link

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` |

#### Returns

`Promise`<`HTMLLinkElement`\>

#### Defined in

<<<<<<< HEAD
[insertLink.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/insertLink.ts#L4)
=======
[insertLink.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/insertLink.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **insertLink**(`href`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLLinkElement`) => `void` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[insertLink.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/insertLink.ts#L5)
=======
[insertLink.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/insertLink.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### insertScript

▸ **insertScript**(`src`): `Promise`<`HTMLScriptElement`\>

插入外部 script 标签

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`Promise`<`HTMLScriptElement`\>

#### Defined in

<<<<<<< HEAD
[insertScript.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/insertScript.ts#L4)
=======
[insertScript.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/insertScript.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **insertScript**(`src`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLScriptElement`) => `void` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[insertScript.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/insertScript.ts#L5)
=======
[insertScript.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/insertScript.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### insertStyle

▸ **insertStyle**(`content`): `HTMLStyleElement`

插入样式

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`HTMLStyleElement`

#### Defined in

<<<<<<< HEAD
[insertStyle.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/insertStyle.ts#L4)
=======
[insertStyle.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/insertStyle.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isAmount

▸ **isAmount**(`val`): `boolean`

判断是否是合法金额
只能是数字,小数点后只能保留两位或一位
isAmount(0) => true
isAmount('01') => false
isAmount('1.') => true
isAmount('1.1') => true
isAmount('1.12') => true
isAmount('1.123') => false

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isAmount.ts:11](https://github.com/daysnap/utils/blob/59e0309/src/isAmount.ts#L11)
=======
[isAmount.ts:11](https://github.com/daysnap/utils/blob/bdaccfb/src/isAmount.ts#L11)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isAndroid

▸ **isAndroid**(): `boolean`

校验是否是安卓

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isAndroid.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isAndroid.ts#L4)
=======
[isAndroid.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isAndroid.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isArray

▸ **isArray**(`val`): val is any[]

判断是否是数组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 待判断值 |

#### Returns

val is any[]

是否

#### Defined in

<<<<<<< HEAD
[isArray.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/isArray.ts#L6)
=======
[isArray.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/isArray.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isBoolean

▸ **isBoolean**(`val`): val is boolean

判断是否是布尔值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要判断的值 |

#### Returns

val is boolean

#### Defined in

<<<<<<< HEAD
[isBoolean.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isBoolean.ts#L5)
=======
[isBoolean.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isBoolean.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isChinese

▸ **isChinese**(`val`): `boolean`

判断是否是中文

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isChinese.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isChinese.ts#L4)
=======
[isChinese.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isChinese.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isDate

▸ **isDate**(`val`): val is Date

判断是否日期 Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Date

#### Defined in

<<<<<<< HEAD
[isDate.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isDate.ts#L4)
=======
[isDate.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isDate.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isEmail

▸ **isEmail**(`val`): `boolean`

校验是否是邮箱

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isEmail.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isEmail.ts#L4)
=======
[isEmail.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isEmail.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isEmpty

▸ **isEmpty**(`val`): `boolean`

校验是否为空 ''、undefined、null

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isEmpty.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/isEmpty.ts#L6)
=======
[isEmpty.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/isEmpty.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isEmptyArray

▸ **isEmptyArray**(`val`): `boolean`

判断是否是空数组

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isEmptyArray.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/isEmptyArray.ts#L6)
=======
[isEmptyArray.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/isEmptyArray.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isEmptyObject

▸ **isEmptyObject**(`val`): `boolean`

判断是否是空对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `object` | 对象 |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isEmptyObject.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isEmptyObject.ts#L5)
=======
[isEmptyObject.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isEmptyObject.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isError

▸ **isError**(`val`): val is Error

校验是否是 error

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Error

#### Defined in

<<<<<<< HEAD
[isError.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isError.ts#L4)
=======
[isError.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isError.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isFunction

▸ **isFunction**(`val`): val is Function

校验是否是函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Function

#### Defined in

<<<<<<< HEAD
[isFunction.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isFunction.ts#L4)
=======
[isFunction.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isFunction.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isIE

▸ **isIE**(): ``false`` \| `number`

判断浏览器是否是 ie
如果是 ie 则会返回对应 ie 版本
如果不是则返回false

#### Returns

``false`` \| `number`

#### Defined in

<<<<<<< HEAD
[isIE.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/isIE.ts#L6)
=======
[isIE.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/isIE.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isIOS

▸ **isIOS**(): `boolean`

校验是否是ios

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isIOS.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isIOS.ts#L4)
=======
[isIOS.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isIOS.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isIdCard

▸ **isIdCard**(`val`): `boolean`

校验是否是身份证

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isIdCard.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isIdCard.ts#L4)
=======
[isIdCard.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isIdCard.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isJSONString

▸ **isJSONString**(`v`): `boolean`

是否是JSON 字符串

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isJSONString.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/isJSONString.ts#L7)
=======
[isJSONString.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/isJSONString.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isLan

▸ **isLan**(`ip`): `boolean`

判断 ip 是否是局域网 ip，仅支持 ipv4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ip` | `string` | ipv4 地址 |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isLan.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isLan.ts#L5)
=======
[isLan.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isLan.ts#L5)

___

### isLeapYear

▸ **isLeapYear**(`year`): `boolean`

判断是否是闰年
规则：四年一闰，百年不闰，四百年再闰

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`boolean`

#### Defined in

[isLeapYear.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isLeapYear.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isLicenseCode

▸ **isLicenseCode**(`v`): `boolean`

校验是否是车牌号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `string` | 车牌号 |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isLicenseCode.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isLicenseCode.ts#L5)
=======
[isLicenseCode.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isLicenseCode.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isMobile

▸ **isMobile**(): `boolean`

校验设备是否是手机

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isMobile.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isMobile.ts#L4)
=======
[isMobile.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isMobile.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isNativeFunction

▸ **isNativeFunction**(`val`): `boolean`

判断是不是内置函数
内置函数toString后的主体代码块为 [native code]

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isNativeFunction.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/isNativeFunction.ts#L7)
=======
[isNativeFunction.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/isNativeFunction.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isNull

▸ **isNull**(`val`): val is null

校验是否是 null

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is null

#### Defined in

<<<<<<< HEAD
[isNull.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isNull.ts#L4)
=======
[isNull.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isNull.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isNumber

▸ **isNumber**(`val`): val is number

判断是否是数字

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要判断的值 |

#### Returns

val is number

#### Defined in

<<<<<<< HEAD
[isNumber.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isNumber.ts#L5)
=======
[isNumber.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isNumber.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isObject

▸ **isObject**(`val`): val is Record<string, any\>

校验是否是对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Record<string, any\>

#### Defined in

<<<<<<< HEAD
[isObject.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isObject.ts#L4)
=======
[isObject.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isObject.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isPhone

▸ **isPhone**(`val`): `boolean`

校验是否是手机号码

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isPhone.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isPhone.ts#L4)
=======
[isPhone.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isPhone.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isPromise

▸ **isPromise**<`T`\>(`val`): val is Promise<T\>

校验是否是 promise

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Promise<T\>

#### Defined in

<<<<<<< HEAD
[isPromise.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isPromise.ts#L4)
=======
[isPromise.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isPromise.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isRegExp

▸ **isRegExp**(`val`): val is RegExp

校验是否是正则表达式

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is RegExp

#### Defined in

<<<<<<< HEAD
[isRegExp.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isRegExp.ts#L4)
=======
[isRegExp.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isRegExp.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isString

▸ **isString**(`val`): val is string

校验是否是字符串

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is string

#### Defined in

<<<<<<< HEAD
[isString.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isString.ts#L4)
=======
[isString.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isString.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isType

▸ **isType**<`T`\>(`val`, `checker`): val is T

联合类型判断成其中某种类型

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |
| `checker` | (`v`: `any`) => `boolean` |

#### Returns

val is T

#### Defined in

<<<<<<< HEAD
[isType.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isType.ts#L4)
=======
[isType.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isType.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isUndefined

▸ **isUndefined**(`val`): val is undefined

校验是否是 undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is undefined

#### Defined in

<<<<<<< HEAD
[isUndefined.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isUndefined.ts#L4)
=======
[isUndefined.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isUndefined.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isUrl

▸ **isUrl**(`val`): `boolean`

判断是否是链接

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`boolean`

#### Defined in

[isURL.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isURL.ts#L4)

___

### isValidDate

▸ **isValidDate**(`v`): `boolean`

验证是否有效日期

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` \| `Date` |

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isValidDate.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/isValidDate.ts#L6)
=======
[isValidDate.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/isValidDate.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isWeChat

▸ **isWeChat**(): `boolean`

判断是否是微信浏览器

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isWeChat.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/isWeChat.ts#L4)
=======
[isWeChat.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/isWeChat.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isWeChatMiniProgram

▸ **isWeChatMiniProgram**(): `boolean`

判断是否是微信小程序web-view环境
https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isWeChatMiniProgram.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isWeChatMiniProgram.ts#L5)
=======
[isWeChatMiniProgram.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isWeChatMiniProgram.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isWeixin

▸ **isWeixin**(): `boolean`

判断是否是微信浏览器

**`Deprecated`**

请使用

**`See`**

[isWeChat](modules.md#iswechat).

#### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[isWeChat.ts:12](https://github.com/daysnap/utils/blob/59e0309/src/isWeChat.ts#L12)
=======
[isWeChat.ts:12](https://github.com/daysnap/utils/blob/bdaccfb/src/isWeChat.ts#L12)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### isWindow

▸ **isWindow**(`val`): val is Window

判断是否是 window 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 需要判断的值 |

#### Returns

val is Window

#### Defined in

<<<<<<< HEAD
[isWindow.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/isWindow.ts#L5)
=======
[isWindow.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/isWindow.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### kebabCase

▸ **kebabCase**(`key`): `string`

说明
kebabCase('helloWorld') => hello-world

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[kebabCase.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/kebabCase.ts#L5)
=======
[kebabCase.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/kebabCase.ts#L5)

___

### lfToBr

▸ **lfToBr**(`v`): `string`

\n to <br/>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`string`

#### Defined in

[lfToBr.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/lfToBr.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### listGenerator

▸ **listGenerator**(`length`): `number`[]

list 生成器，快速生成数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | 个数 |

#### Returns

`number`[]

#### Defined in

<<<<<<< HEAD
[listGenerator.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/listGenerator.ts#L5)
=======
[listGenerator.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/listGenerator.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

▸ **listGenerator**<`T`\>(`length`, `fn`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `fn` | (`index`: `number`) => `T` |

#### Returns

`T`[]

#### Defined in

<<<<<<< HEAD
[listGenerator.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/listGenerator.ts#L6)
=======
[listGenerator.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/listGenerator.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### makePhoneCall

▸ **makePhoneCall**(`phoneNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` \| `number` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[makePhoneCall.ts:1](https://github.com/daysnap/utils/blob/59e0309/src/makePhoneCall.ts#L1)
=======
[makePhoneCall.ts:1](https://github.com/daysnap/utils/blob/bdaccfb/src/makePhoneCall.ts#L1)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### mousewheel

▸ **mousewheel**(`scrolling`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrolling` | `MousewheelScrolling` |
| `options?` | `MousewheelOptions` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listener` | (`e`: `any`) => `undefined` \| ``false`` |

#### Defined in

<<<<<<< HEAD
[mousewheel.ts:22](https://github.com/daysnap/utils/blob/59e0309/src/mousewheel.ts#L22)
=======
[mousewheel.ts:22](https://github.com/daysnap/utils/blob/bdaccfb/src/mousewheel.ts#L22)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### nf

▸ **nf**(): `void`

空函数

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[nf.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/nf.ts#L4)
=======
[nf.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/nf.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### normalizeDate

▸ **normalizeDate**(`value`): `Date`

格式化日期
fix iOS 日期时间格式如果类似是 2020-12-12 12:12:12 就会报错的问题
2020/12/12 12:12:12 这种就是通用的

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `Date` |

#### Returns

`Date`

#### Defined in

<<<<<<< HEAD
[normalizeDate.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/normalizeDate.ts#L8)
=======
[normalizeDate.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/normalizeDate.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### normalizePath

▸ **normalizePath**(`path`): `string`

格式化处理路径 平台兼容

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[normalizePath.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/normalizePath.ts#L4)
=======
[normalizePath.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/normalizePath.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### omit

▸ **omit**<`T`, `K`\>(`obj`, `fields?`): `Omit`<`T`, `K`\>

排除对象里的某些属性，返回剩下的对象，浅拷贝

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `T` | `undefined` |
| `fields` | `K`[] | `[]` |

#### Returns

`Omit`<`T`, `K`\>

#### Defined in

<<<<<<< HEAD
[omit.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/omit.ts#L4)
=======
[omit.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/omit.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### padding

▸ **padding**(`message`, `before?`, `after?`): `string`

增添空格

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `undefined` | 文字信息 |
| `before` | `number` | `1` | 前空格个数 |
| `after` | `number` | `1` | 后空格个数 |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[padding.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/padding.ts#L7)
=======
[padding.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/padding.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### parseDate

▸ **parseDate**(`v`): `Date`

解析成Date

**`Deprecated`**

请使用 normalizeDate() 方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` \| `Date` |

#### Returns

`Date`

#### Defined in

<<<<<<< HEAD
[parseDate.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/parseDate.ts#L5)
=======
[parseDate.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/parseDate.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### parseError

▸ **parseError**(`val`, `keys?`): `string`

解析格式化 error 获取对应的 message

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `keys` | `string`[] |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[parseError.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/parseError.ts#L8)
=======
[parseError.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/parseError.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### parseObject

▸ **parseObject**<`T`\>(`path`, `value`): `T`

返回对象
parseObject('a.b.c', 1) => { a: { b: { c: 1 } } }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[parseObject.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/parseObject.ts#L5)
=======
[parseObject.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/parseObject.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### parsePath

▸ **parsePath**<`T`\>(`obj`, `path`): `T`

根据路径解析值

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |
| `path` | `string` |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[parsePath.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/parsePath.ts#L6)
=======
[parsePath.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/parsePath.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### parseQuery

▸ **parseQuery**(`v?`, `k?`): `any`

解析url参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v?` | `string` | URl |
| `k?` | `string` | 键名 |

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
[parseQuery.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/parseQuery.ts#L8)
=======
[parseQuery.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/parseQuery.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### parseQueryString

▸ **parseQueryString**<`T`\>(`value`): `T`

解析 url 参数

在不支持 URLSearchParams 的环境下使用该方法

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[parseQueryString.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/parseQueryString.ts#L6)
=======
[parseQueryString.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/parseQueryString.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### pascalCase

▸ **pascalCase**(`str`): `string`

首字母大写的驼峰
pascalCase('hello-world') => HelloWorld

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[pascalCase.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/pascalCase.ts#L8)
=======
[pascalCase.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/pascalCase.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### pick

▸ **pick**<`T`, `K`\>(`obj`, `fields?`): `Pick`<`T`, `K`\>

挑选对象里的某些属性，新对象返回

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `T` | `undefined` |
| `fields` | `K`[] | `[]` |

#### Returns

`Pick`<`T`, `K`\>

#### Defined in

<<<<<<< HEAD
[pick.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/pick.ts#L4)
=======
[pick.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/pick.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### replaceCrlf

▸ **replaceCrlf**(`val`, `replaceVal`): `string`

替换字符串里面的回车换行

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |
| `replaceVal` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[replaceCrlf.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/replaceCrlf.ts#L4)
=======
[replaceCrlf.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/replaceCrlf.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### requestFullScreen

▸ **requestFullScreen**(`ele?`): `Promise`<`any`\>

开启全屏
成功则 resolve , 如果不支持全屏或开启失败则 rejected
[MDN Reference] https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullscreen

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ele` | `HTMLElement` | `window.document.documentElement` |

#### Returns

`Promise`<`any`\>

#### Defined in

<<<<<<< HEAD
[requestFullScreen.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/requestFullScreen.ts#L6)
=======
[requestFullScreen.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/requestFullScreen.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### reserve

▸ **reserve**(`val`, `defaultVal?`): `any`

值为 ''、undefined、null 则取默认值
解决：
0 || '--' => '--'
reserve(0, '--') => 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `defaultVal?` | `any` |

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
[reserve.ts:8](https://github.com/daysnap/utils/blob/59e0309/src/reserve.ts#L8)
=======
[reserve.ts:8](https://github.com/daysnap/utils/blob/bdaccfb/src/reserve.ts#L8)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### rgbToHex

▸ **rgbToHex**(`r`, `g`, `b`): `string`

说明 rgb 转 十六进制值

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `string` \| `number` |
| `g` | `string` \| `number` |
| `b` | `string` \| `number` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[rgbToHex.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/rgbToHex.ts#L4)
=======
[rgbToHex.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/rgbToHex.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### round

▸ **round**(`val`, `fractionDigits`): `string`

四舍五入

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要四舍五入的值 |
| `fractionDigits` | `number` | 需要保留的小数点位数 |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[round.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/round.ts#L6)
=======
[round.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/round.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### scrollToTop

▸ **scrollToTop**(): `void`

滚动到页面顶部

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[scrollToTop.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/scrollToTop.ts#L4)
=======
[scrollToTop.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/scrollToTop.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### setScrollTop

▸ **setScrollTop**(`scrollTop?`): `void`

设置 scrollTop

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scrollTop` | `number` | `0` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[setScrollTop.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/setScrollTop.ts#L4)
=======
[setScrollTop.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/setScrollTop.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### sleep

▸ **sleep**(`ms`, `isSuccess?`): `Promise`<`void`\>

休眠方法

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ms` | `number` | `undefined` | 休眠时长 毫秒 |
| `isSuccess` | `boolean` | `true` | 默认执行成功 |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[sleep.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/sleep.ts#L6)
=======
[sleep.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/sleep.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### splitArray

▸ **splitArray**<`T`\>(`source`, `size`): `T`[][]

分割数组

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `T`[] |
| `size` | `number` |

#### Returns

`T`[][]

#### Defined in

<<<<<<< HEAD
[splitArray.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/splitArray.ts#L4)
=======
[splitArray.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/splitArray.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### stringTrim

▸ **stringTrim**(`str`, `type?`): `string`

去除字符串空格

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 字符串值 |
| `type` | ``1`` \| ``2`` \| ``3`` \| ``4`` | `1` | 方式 1-所有空格，2-前后空格，3-前空格，4-后空格 |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[stringTrim.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/stringTrim.ts#L6)
=======
[stringTrim.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/stringTrim.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### stringifyQuery

▸ **stringifyQuery**(`v`): `string`

对象转 URLSearchParams

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[stringifyQuery.ts:7](https://github.com/daysnap/utils/blob/59e0309/src/stringifyQuery.ts#L7)
=======
[stringifyQuery.ts:7](https://github.com/daysnap/utils/blob/bdaccfb/src/stringifyQuery.ts#L7)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### stringifyQueryString

▸ **stringifyQueryString**(`value`): `string`

将对象转换为查询字符串

在不支持 URLSearchParams 的环境下使用该方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[stringifyQueryString.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/stringifyQueryString.ts#L6)
=======
[stringifyQueryString.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/stringifyQueryString.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### throttle

▸ **throttle**<`T`\>(`fn`, `ms`, `mode?`): (`this`: `unknown`, ...`args`: `Parameters`<`T`\>) => `void`

节流函数
减少事件执行次数，有规律的执行

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fn` | `T` | `undefined` |
| `ms` | `number` | `undefined` |
| `mode` | ``"leading"`` \| ``"trailing"`` | `'trailing'` |

#### Returns

`fn`

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | `Parameters`<`T`\> |

##### Returns

`void`

#### Defined in

<<<<<<< HEAD
[throttle.ts:48](https://github.com/daysnap/utils/blob/59e0309/src/throttle.ts#L48)
=======
[throttle.ts:48](https://github.com/daysnap/utils/blob/bdaccfb/src/throttle.ts#L48)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### throttleLeading

▸ **throttleLeading**<`T`\>(`fn`, `ms`): (`this`: `unknown`, ...`args`: `Parameters`<`T`\>) => `void`

节流函数，时间戳模式
减少事件执行次数，有规律的执行，事件触发后立即执行

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `ms` | `number` |

#### Returns

`fn`

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | `Parameters`<`T`\> |

##### Returns

`void`

#### Defined in

<<<<<<< HEAD
[throttle.ts:5](https://github.com/daysnap/utils/blob/59e0309/src/throttle.ts#L5)
=======
[throttle.ts:5](https://github.com/daysnap/utils/blob/bdaccfb/src/throttle.ts#L5)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### throttleTrailing

▸ **throttleTrailing**<`T`\>(`fn`, `ms`): (`this`: `unknown`, ...`args`: `Parameters`<`T`\>) => `void`

节流函数，定时器模式
减少事件执行次数，有规律的执行，事件触发后延迟执行

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `ms` | `number` |

#### Returns

`fn`

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | `Parameters`<`T`\> |

##### Returns

`void`

#### Defined in

<<<<<<< HEAD
[throttle.ts:25](https://github.com/daysnap/utils/blob/59e0309/src/throttle.ts#L25)
=======
[throttle.ts:25](https://github.com/daysnap/utils/blob/bdaccfb/src/throttle.ts#L25)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### toCDB

▸ **toCDB**(`str`): `string`

全角转换为半角

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[toCDB.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/toCDB.ts#L4)
=======
[toCDB.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/toCDB.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### toDBC

▸ **toDBC**(`str`): `string`

半角转换为全角

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[toDBC.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/toDBC.ts#L4)
=======
[toDBC.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/toDBC.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### typeOf

▸ **typeOf**(`val`): `string`

判断类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 待判断数据 |

#### Returns

`string`

'undefined'|'null'|'boolean'|'string'|'number'|'object'|'array'|'function'|'symbol'|'map'|'weakmap'|'bigint'|'regexp'|'date'

#### Defined in

<<<<<<< HEAD
[typeOf.ts:6](https://github.com/daysnap/utils/blob/59e0309/src/typeOf.ts#L6)
=======
[typeOf.ts:6](https://github.com/daysnap/utils/blob/bdaccfb/src/typeOf.ts#L6)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### withCache

▸ **withCache**<`T`\>(`fn`): `T`

缓存函数

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[withCache.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/withCache.ts#L4)
=======
[withCache.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/withCache.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8

___

### withPreventConsecutiveClicks

▸ **withPreventConsecutiveClicks**<`T`\>(`fn`, `ms?`): `T`

防止连续点击

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `Promise`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `ms?` | `number` |

#### Returns

`T`

#### Defined in

<<<<<<< HEAD
[withPreventConsecutiveClicks.ts:4](https://github.com/daysnap/utils/blob/59e0309/src/withPreventConsecutiveClicks.ts#L4)
=======
[withPreventConsecutiveClicks.ts:4](https://github.com/daysnap/utils/blob/bdaccfb/src/withPreventConsecutiveClicks.ts#L4)
>>>>>>> 66d780be6d5cee068d3994c60fe127322539b7f8
