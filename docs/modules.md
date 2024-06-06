[@daysnap/utils](README.md) / Exports

# @daysnap/utils

## Table of contents

### Interfaces

- [StorageManager](interfaces/StorageManager.md)
- [Trap](interfaces/Trap.md)

### Variables

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
- [clamp](modules.md#clamp)
- [clone](modules.md#clone)
- [cloneSimple](modules.md#clonesimple)
- [colorGenByHash](modules.md#colorgenbyhash)
- [compareVersion](modules.md#compareversion)
- [compressImage](modules.md#compressimage)
- [createLinearFunction](modules.md#createlinearfunction)
- [createTrapInstance](modules.md#createtrapinstance)
- [createWithLoading](modules.md#createwithloading)
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
- [formatMessage](modules.md#formatmessage)
- [formatPathParams](modules.md#formatpathparams)
- [getBlobByUrl](modules.md#getblobbyurl)
- [getCache](modules.md#getcache)
- [getDayMillisecond](modules.md#getdaymillisecond)
- [getImageInfo](modules.md#getimageinfo)
- [getLocal](modules.md#getlocal)
- [getRandom](modules.md#getrandom)
- [getRandomColor](modules.md#getrandomcolor)
- [getRandomNumber](modules.md#getrandomnumber)
- [getScrollTop](modules.md#getscrolltop)
- [getVideoInfo](modules.md#getvideoinfo)
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
- [isUndefined](modules.md#isundefined)
- [isUrl](modules.md#isurl)
- [isWeChat](modules.md#iswechat)
- [isWeChatMiniProgram](modules.md#iswechatminiprogram)
- [isWeixin](modules.md#isweixin)
- [isWindow](modules.md#iswindow)
- [kebabCase](modules.md#kebabcase)
- [listGenerator](modules.md#listgenerator)
- [mousewheel](modules.md#mousewheel)
- [nf](modules.md#nf)
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
- [withPreventConsecutiveClicks](modules.md#withpreventconsecutiveclicks)

## Variables

### trap

• `Const` **trap**: [`Trap`](interfaces/Trap.md)

#### Defined in

[trap.ts:15](https://github.com/daysnap/utils/blob/4caac97/src/trap.ts#L15)

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

[ato.ts:12](https://github.com/daysnap/utils/blob/4caac97/src/ato.ts#L12)

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

[ato.ts:16](https://github.com/daysnap/utils/blob/4caac97/src/ato.ts#L16)

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

[decode.ts:41](https://github.com/daysnap/utils/blob/4caac97/src/decode.ts#L41)

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

[base64ToBlob.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/base64ToBlob.ts#L6)

___

### blobToBase64

▸ **blobToBase64**(`blob`): `Promise`<`string` \| `ArrayBuffer`\>

blob 转 base64

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `Blob` |

#### Returns

`Promise`<`string` \| `ArrayBuffer`\>

#### Defined in

[blobToBase64.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/blobToBase64.ts#L4)

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

[decode.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/decode.ts#L8)

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

[cached.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/cached.ts#L5)

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

[camelCase.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/camelCase.ts#L5)

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

[canvasToBlob.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/canvasToBlob.ts#L4)

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

[capitalize.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/capitalize.ts#L5)

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

[clamp.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/clamp.ts#L7)

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

[clone.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/clone.ts#L8)

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

[cloneSimple.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/cloneSimple.ts#L7)

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

[createHexColorByHash.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/createHexColorByHash.ts#L4)

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

[compareVersion.ts:9](https://github.com/daysnap/utils/blob/4caac97/src/compareVersion.ts#L9)

___

### compressImage

▸ **compressImage**(`image`): `HTMLCanvasElement`

压缩图片

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `HTMLImageElement` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[compressImage.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/compressImage.ts#L6)

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

[createLinearFunction.ts:9](https://github.com/daysnap/utils/blob/4caac97/src/createLinearFunction.ts#L9)

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

[trap.ts:49](https://github.com/daysnap/utils/blob/4caac97/src/trap.ts#L49)

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

[createWithLoading.ts:11](https://github.com/daysnap/utils/blob/4caac97/src/createWithLoading.ts#L11)

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

[debounce.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/debounce.ts#L5)

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

[downloadFile.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/downloadFile.ts#L4)

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

[each.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/each.ts#L4)

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

[each.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/each.ts#L8)

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`<`any`\>

退出全屏
成功则 resolve , 如果不支持退出全屏或退出失败则 rejected
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen)

#### Returns

`Promise`<`any`\>

#### Defined in

[exitFullscreen.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/exitFullscreen.ts#L6)

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

[storage/factory.ts:11](https://github.com/daysnap/utils/blob/4caac97/src/storage/factory.ts#L11)

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

[filterBankCardNo.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/filterBankCardNo.ts#L4)

___

### filterCRLF

▸ **filterCRLF**(`v`): `string`

替换字符串里面的回车换行符

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`string`

#### Defined in

[filterCRLF.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/filterCRLF.ts#L4)

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

[filterEmoji.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/filterEmoji.ts#L4)

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

[filterEmptyValue.ts:12](https://github.com/daysnap/utils/blob/4caac97/src/filterEmptyValue.ts#L12)

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

[filterIdCard.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/filterIdCard.ts#L5)

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

[filterName.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/filterName.ts#L4)

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

[filterPhone.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/filterPhone.ts#L6)

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

[filterString.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/filterString.ts#L6)

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

[formatAmount.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/formatAmount.ts#L4)

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

[formatDate.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/formatDate.ts#L8)

___

### formatDateStr

▸ **formatDateStr**(`v`): `Date`

str 转换成 date
fix iOS 日期时间格式如果是 - 就会报错的问题

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`Date`

#### Defined in

[formatDateStr.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/formatDateStr.ts#L5)

___

### formatDateToZN

▸ **formatDateToZN**(`v`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[formartDateToZN.ts:3](https://github.com/daysnap/utils/blob/4caac97/src/formartDateToZN.ts#L3)

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

[formatFileSize.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/formatFileSize.ts#L4)

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

[formatMessage.ts:11](https://github.com/daysnap/utils/blob/4caac97/src/formatMessage.ts#L11)

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

[formatPathParams.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/formatPathParams.ts#L8)

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

[getBlobByUrl.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/getBlobByUrl.ts#L4)

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

[storage/index.ts:9](https://github.com/daysnap/utils/blob/4caac97/src/storage/index.ts#L9)

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

[getDayMillisecond.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/getDayMillisecond.ts#L4)

___

### getImageInfo

▸ **getImageInfo**(`src`): `Promise`<`HTMLImageElement`\>

获取图片信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`Promise`<`HTMLImageElement`\>

#### Defined in

[getImageInfo.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/getImageInfo.ts#L4)

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

[storage/index.ts:9](https://github.com/daysnap/utils/blob/4caac97/src/storage/index.ts#L9)

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

[getRandom.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/getRandom.ts#L7)

___

### getRandomColor

▸ **getRandomColor**(): `string`

随机颜色

#### Returns

`string`

#### Defined in

[getRandomColor.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/getRandomColor.ts#L4)

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

[getRandomNumber.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/getRandomNumber.ts#L7)

___

### getScrollTop

▸ **getScrollTop**(): `number`

获取 scrollTop

#### Returns

`number`

#### Defined in

[getScrollTop.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/getScrollTop.ts#L4)

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

[getVideoInfo.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/getVideoInfo.ts#L4)

___

### inBrowser

▸ **inBrowser**(): `boolean`

判断是否是浏览器环境

#### Returns

`boolean`

#### Defined in

[inBrowser.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/inBrowser.ts#L4)

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

[insertLink.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/insertLink.ts#L4)

▸ **insertLink**(`href`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLLinkElement`) => `void` |

#### Returns

`void`

#### Defined in

[insertLink.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/insertLink.ts#L5)

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

[insertScript.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/insertScript.ts#L4)

▸ **insertScript**(`src`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLScriptElement`) => `void` |

#### Returns

`void`

#### Defined in

[insertScript.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/insertScript.ts#L5)

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

[insertStyle.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/insertStyle.ts#L4)

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

[isAmount.ts:11](https://github.com/daysnap/utils/blob/4caac97/src/isAmount.ts#L11)

___

### isAndroid

▸ **isAndroid**(): `boolean`

校验是否是安卓

#### Returns

`boolean`

#### Defined in

[isAndroid.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isAndroid.ts#L4)

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

[isArray.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/isArray.ts#L6)

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

[isBoolean.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isBoolean.ts#L5)

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

[isChinese.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isChinese.ts#L4)

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

[isDate.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isDate.ts#L4)

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

[isEmail.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isEmail.ts#L4)

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

[isEmpty.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/isEmpty.ts#L6)

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

[isEmptyArray.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/isEmptyArray.ts#L6)

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

[isEmptyObject.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isEmptyObject.ts#L5)

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

[isError.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isError.ts#L4)

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

[isFunction.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isFunction.ts#L4)

___

### isIE

▸ **isIE**(): ``false`` \| `number`

判断浏览器是否是 ie
如果是 ie 则会返回对应 ie 版本
如果不是则返回false

#### Returns

``false`` \| `number`

#### Defined in

[isIE.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/isIE.ts#L6)

___

### isIOS

▸ **isIOS**(): `boolean`

校验是否是ios

#### Returns

`boolean`

#### Defined in

[isIOS.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isIOS.ts#L4)

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

[isIdCard.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isIdCard.ts#L4)

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

[isJSONString.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/isJSONString.ts#L7)

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

[isLan.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isLan.ts#L5)

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

[isLicenseCode.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isLicenseCode.ts#L5)

___

### isMobile

▸ **isMobile**(): `boolean`

校验设备是否是手机

#### Returns

`boolean`

#### Defined in

[isMobile.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isMobile.ts#L4)

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

[isNativeFunction.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/isNativeFunction.ts#L7)

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

[isNull.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isNull.ts#L4)

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

[isNumber.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isNumber.ts#L5)

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

[isObject.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isObject.ts#L4)

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

[isPhone.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isPhone.ts#L4)

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

[isPromise.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isPromise.ts#L4)

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

[isRegExp.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isRegExp.ts#L4)

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

[isString.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isString.ts#L4)

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

[isUndefined.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isUndefined.ts#L4)

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

isUrl.ts:4

___

### isWeChat

▸ **isWeChat**(): `boolean`

判断是否是微信浏览器

#### Returns

`boolean`

#### Defined in

[isWeChat.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/isWeChat.ts#L4)

___

### isWeChatMiniProgram

▸ **isWeChatMiniProgram**(): `boolean`

判断是否是微信小程序web-view环境
https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html

#### Returns

`boolean`

#### Defined in

[isWeChatMiniProgram.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isWeChatMiniProgram.ts#L5)

___

### isWeixin

▸ **isWeixin**(): `boolean`

判断是否是微信浏览器

**`Deprecated`**

请使用 isWeChat 方法

#### Returns

`boolean`

#### Defined in

[isWeChat.ts:12](https://github.com/daysnap/utils/blob/4caac97/src/isWeChat.ts#L12)

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

[isWindow.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/isWindow.ts#L5)

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

[kebabCase.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/kebabCase.ts#L5)

___

### listGenerator

▸ **listGenerator**<`T`\>(`length`, `fn`): `T`[]

list 生成器，快速生成数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | 个数 |
| `fn` | (`index`: `number`) => `T` | - |

#### Returns

`T`[]

#### Defined in

[listGenerator.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/listGenerator.ts#L5)

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

[mousewheel.ts:22](https://github.com/daysnap/utils/blob/4caac97/src/mousewheel.ts#L22)

___

### nf

▸ **nf**(): `void`

空函数

#### Returns

`void`

#### Defined in

[nf.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/nf.ts#L4)

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

[normalizePath.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/normalizePath.ts#L4)

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

[omit.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/omit.ts#L4)

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

[padding.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/padding.ts#L7)

___

### parseDate

▸ **parseDate**(`v`): `Date`

解析成Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` \| `number` \| `Date` |

#### Returns

`Date`

#### Defined in

[parseDate.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/parseDate.ts#L4)

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

[parseError.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/parseError.ts#L8)

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

[parseObject.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/parseObject.ts#L5)

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

[parsePath.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/parsePath.ts#L6)

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

[parseQuery.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/parseQuery.ts#L8)

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

[parseQueryString.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/parseQueryString.ts#L6)

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

[pascalCase.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/pascalCase.ts#L8)

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

[pick.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/pick.ts#L4)

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

[replaceCrlf.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/replaceCrlf.ts#L4)

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

[requestFullScreen.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/requestFullScreen.ts#L6)

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

[reserve.ts:8](https://github.com/daysnap/utils/blob/4caac97/src/reserve.ts#L8)

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

[rgbToHex.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/rgbToHex.ts#L4)

___

### round

▸ **round**(`val`, `fractionDigits`): `any`

四舍五入

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 需要四舍五入的值 |
| `fractionDigits` | `number` | 需要保留的小数点位数 |

#### Returns

`any`

#### Defined in

[round.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/round.ts#L6)

___

### scrollToTop

▸ **scrollToTop**(): `void`

滚动到页面顶部

#### Returns

`void`

#### Defined in

[scrollToTop.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/scrollToTop.ts#L4)

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

[setScrollTop.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/setScrollTop.ts#L4)

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

[sleep.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/sleep.ts#L6)

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

[splitArray.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/splitArray.ts#L4)

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

[stringTrim.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/stringTrim.ts#L6)

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

[stringifyQuery.ts:7](https://github.com/daysnap/utils/blob/4caac97/src/stringifyQuery.ts#L7)

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

[stringifyQueryString.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/stringifyQueryString.ts#L6)

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

[throttle.ts:48](https://github.com/daysnap/utils/blob/4caac97/src/throttle.ts#L48)

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

[throttle.ts:5](https://github.com/daysnap/utils/blob/4caac97/src/throttle.ts#L5)

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

[throttle.ts:25](https://github.com/daysnap/utils/blob/4caac97/src/throttle.ts#L25)

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

[toCDB.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/toCDB.ts#L4)

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

[toDBC.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/toDBC.ts#L4)

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

[typeOf.ts:6](https://github.com/daysnap/utils/blob/4caac97/src/typeOf.ts#L6)

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

[withPreventConsecutiveClicks.ts:4](https://github.com/daysnap/utils/blob/4caac97/src/withPreventConsecutiveClicks.ts#L4)
