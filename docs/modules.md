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
- [base64ToBlob](modules.md#base64toblob)
- [blobToBase64](modules.md#blobtobase64)
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
- [isURL](modules.md#isurl)
- [isUndefined](modules.md#isundefined)
- [isWeChat](modules.md#iswechat)
- [isWeChatMiniProgram](modules.md#iswechatminiprogram)
- [isWeixin](modules.md#isweixin)
- [isWindow](modules.md#iswindow)
- [kebabCase](modules.md#kebabcase)
- [listGenerator](modules.md#listgenerator)
- [mousewheel](modules.md#mousewheel)
- [normalizePath](modules.md#normalizepath)
- [omit](modules.md#omit)
- [padding](modules.md#padding)
- [parseDate](modules.md#parsedate)
- [parseError](modules.md#parseerror)
- [parseObject](modules.md#parseobject)
- [parsePath](modules.md#parsepath)
- [parseQuery](modules.md#parsequery)
- [pascalCase](modules.md#pascalcase)
- [pick](modules.md#pick)
- [replaceCrlf](modules.md#replacecrlf)
- [requestFullScreen](modules.md#requestfullscreen)
- [reserve](modules.md#reserve)
- [rgbToHex](modules.md#rgbtohex)
- [round](modules.md#round)
- [scrollToTop](modules.md#scrolltotop)
- [sleep](modules.md#sleep)
- [splitArray](modules.md#splitarray)
- [stringTrim](modules.md#stringtrim)
- [stringifyQuery](modules.md#stringifyquery)
- [throttle](modules.md#throttle)
- [toCDB](modules.md#tocdb)
- [toDBC](modules.md#todbc)
- [typeOf](modules.md#typeof)

## Variables

### trap

• `Const` **trap**: [`Trap`](interfaces/Trap.md)

#### Defined in

[trap.ts:15](https://github.com/daysnap/utils/blob/3253702/src/trap.ts#L15)

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

[ato.ts:12](https://github.com/daysnap/utils/blob/3253702/src/ato.ts#L12)

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

[ato.ts:16](https://github.com/daysnap/utils/blob/3253702/src/ato.ts#L16)

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

[base64ToBlob.ts:6](https://github.com/daysnap/utils/blob/3253702/src/base64ToBlob.ts#L6)

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

[blobToBase64.ts:4](https://github.com/daysnap/utils/blob/3253702/src/blobToBase64.ts#L4)

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

[cached.ts:5](https://github.com/daysnap/utils/blob/3253702/src/cached.ts#L5)

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

[camelCase.ts:5](https://github.com/daysnap/utils/blob/3253702/src/camelCase.ts#L5)

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

[canvasToBlob.ts:4](https://github.com/daysnap/utils/blob/3253702/src/canvasToBlob.ts#L4)

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

[capitalize.ts:5](https://github.com/daysnap/utils/blob/3253702/src/capitalize.ts#L5)

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

[clamp.ts:7](https://github.com/daysnap/utils/blob/3253702/src/clamp.ts#L7)

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

[clone.ts:8](https://github.com/daysnap/utils/blob/3253702/src/clone.ts#L8)

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

[cloneSimple.ts:7](https://github.com/daysnap/utils/blob/3253702/src/cloneSimple.ts#L7)

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

[createHexColorByHash.ts:4](https://github.com/daysnap/utils/blob/3253702/src/createHexColorByHash.ts#L4)

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

[compareVersion.ts:9](https://github.com/daysnap/utils/blob/3253702/src/compareVersion.ts#L9)

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

[compressImage.ts:6](https://github.com/daysnap/utils/blob/3253702/src/compressImage.ts#L6)

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

[trap.ts:49](https://github.com/daysnap/utils/blob/3253702/src/trap.ts#L49)

___

### createWithLoading

▸ **createWithLoading**<`O`\>(`showLoading`, `defaultOptions?`): <T\>(`fn`: `T`, `options`: `O`) => (...`params`: [...Parameters<T\>[], O?]) => `Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

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

▸ <`T`\>(`fn`, `options?`): (...`params`: [...Parameters<T\>[], O?]) => `Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `Promise`<`any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `options` | `O` |

##### Returns

`fn`

▸ (`...params`): `Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | [...Parameters<T\>[], O?] |

##### Returns

`Promise`<`Awaited`<`ReturnType`<`T`\>\>\>

#### Defined in

[createWithLoading.ts:9](https://github.com/daysnap/utils/blob/3253702/src/createWithLoading.ts#L9)

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

[debounce.ts:5](https://github.com/daysnap/utils/blob/3253702/src/debounce.ts#L5)

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

[downloadFile.ts:4](https://github.com/daysnap/utils/blob/3253702/src/downloadFile.ts#L4)

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

[each.ts:4](https://github.com/daysnap/utils/blob/3253702/src/each.ts#L4)

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

[each.ts:8](https://github.com/daysnap/utils/blob/3253702/src/each.ts#L8)

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`<`any`\>

退出全屏
成功则 resolve , 如果不支持退出全屏或退出失败则 rejected
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen)

#### Returns

`Promise`<`any`\>

#### Defined in

[exitFullscreen.ts:6](https://github.com/daysnap/utils/blob/3253702/src/exitFullscreen.ts#L6)

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

[storage/factory.ts:8](https://github.com/daysnap/utils/blob/3253702/src/storage/factory.ts#L8)

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

[filterBankCardNo.ts:4](https://github.com/daysnap/utils/blob/3253702/src/filterBankCardNo.ts#L4)

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

[filterCRLF.ts:4](https://github.com/daysnap/utils/blob/3253702/src/filterCRLF.ts#L4)

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

[filterEmoji.ts:4](https://github.com/daysnap/utils/blob/3253702/src/filterEmoji.ts#L4)

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

[filterEmptyValue.ts:12](https://github.com/daysnap/utils/blob/3253702/src/filterEmptyValue.ts#L12)

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

[filterIdCard.ts:5](https://github.com/daysnap/utils/blob/3253702/src/filterIdCard.ts#L5)

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

[filterName.ts:4](https://github.com/daysnap/utils/blob/3253702/src/filterName.ts#L4)

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

[filterPhone.ts:6](https://github.com/daysnap/utils/blob/3253702/src/filterPhone.ts#L6)

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

[filterString.ts:6](https://github.com/daysnap/utils/blob/3253702/src/filterString.ts#L6)

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

[formatAmount.ts:4](https://github.com/daysnap/utils/blob/3253702/src/formatAmount.ts#L4)

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

[formatDate.ts:8](https://github.com/daysnap/utils/blob/3253702/src/formatDate.ts#L8)

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

[formatDateStr.ts:5](https://github.com/daysnap/utils/blob/3253702/src/formatDateStr.ts#L5)

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

[formatMessage.ts:11](https://github.com/daysnap/utils/blob/3253702/src/formatMessage.ts#L11)

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

[formatPathParams.ts:8](https://github.com/daysnap/utils/blob/3253702/src/formatPathParams.ts#L8)

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

[getBlobByUrl.ts:4](https://github.com/daysnap/utils/blob/3253702/src/getBlobByUrl.ts#L4)

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

[storage/index.ts:9](https://github.com/daysnap/utils/blob/3253702/src/storage/index.ts#L9)

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

[getDayMillisecond.ts:4](https://github.com/daysnap/utils/blob/3253702/src/getDayMillisecond.ts#L4)

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

[getImageInfo.ts:4](https://github.com/daysnap/utils/blob/3253702/src/getImageInfo.ts#L4)

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

[storage/index.ts:9](https://github.com/daysnap/utils/blob/3253702/src/storage/index.ts#L9)

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

[getRandom.ts:7](https://github.com/daysnap/utils/blob/3253702/src/getRandom.ts#L7)

___

### getRandomColor

▸ **getRandomColor**(): `string`

随机颜色

#### Returns

`string`

#### Defined in

[getRandomColor.ts:4](https://github.com/daysnap/utils/blob/3253702/src/getRandomColor.ts#L4)

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

[getRandomNumber.ts:7](https://github.com/daysnap/utils/blob/3253702/src/getRandomNumber.ts#L7)

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

[getVideoInfo.ts:4](https://github.com/daysnap/utils/blob/3253702/src/getVideoInfo.ts#L4)

___

### inBrowser

▸ **inBrowser**(): `boolean`

判断是否是浏览器环境

#### Returns

`boolean`

#### Defined in

[inBrowser.ts:4](https://github.com/daysnap/utils/blob/3253702/src/inBrowser.ts#L4)

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

[insertLink.ts:4](https://github.com/daysnap/utils/blob/3253702/src/insertLink.ts#L4)

▸ **insertLink**(`href`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLLinkElement`) => `void` |

#### Returns

`void`

#### Defined in

[insertLink.ts:5](https://github.com/daysnap/utils/blob/3253702/src/insertLink.ts#L5)

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

[insertScript.ts:4](https://github.com/daysnap/utils/blob/3253702/src/insertScript.ts#L4)

▸ **insertScript**(`src`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLScriptElement`) => `void` |

#### Returns

`void`

#### Defined in

[insertScript.ts:5](https://github.com/daysnap/utils/blob/3253702/src/insertScript.ts#L5)

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

[insertStyle.ts:4](https://github.com/daysnap/utils/blob/3253702/src/insertStyle.ts#L4)

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

[isAmount.ts:11](https://github.com/daysnap/utils/blob/3253702/src/isAmount.ts#L11)

___

### isAndroid

▸ **isAndroid**(): `boolean`

校验是否是安卓

#### Returns

`boolean`

#### Defined in

[isAndroid.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isAndroid.ts#L4)

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

[isArray.ts:6](https://github.com/daysnap/utils/blob/3253702/src/isArray.ts#L6)

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

[isBoolean.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isBoolean.ts#L5)

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

[isChinese.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isChinese.ts#L4)

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

[isDate.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isDate.ts#L4)

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

[isEmail.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isEmail.ts#L4)

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

[isEmpty.ts:6](https://github.com/daysnap/utils/blob/3253702/src/isEmpty.ts#L6)

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

[isEmptyArray.ts:6](https://github.com/daysnap/utils/blob/3253702/src/isEmptyArray.ts#L6)

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

[isEmptyObject.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isEmptyObject.ts#L5)

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

[isError.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isError.ts#L4)

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

[isFunction.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isFunction.ts#L4)

___

### isIE

▸ **isIE**(): ``false`` \| `number`

判断浏览器是否是 ie
如果是 ie 则会返回对应 ie 版本
如果不是则返回false

#### Returns

``false`` \| `number`

#### Defined in

[isIE.ts:6](https://github.com/daysnap/utils/blob/3253702/src/isIE.ts#L6)

___

### isIOS

▸ **isIOS**(): `boolean`

校验是否是ios

#### Returns

`boolean`

#### Defined in

[isIOS.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isIOS.ts#L4)

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

[isIdCard.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isIdCard.ts#L4)

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

[isJSONString.ts:7](https://github.com/daysnap/utils/blob/3253702/src/isJSONString.ts#L7)

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

[isLan.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isLan.ts#L5)

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

[isLicenseCode.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isLicenseCode.ts#L5)

___

### isMobile

▸ **isMobile**(): `boolean`

校验设备是否是手机

#### Returns

`boolean`

#### Defined in

[isMobile.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isMobile.ts#L4)

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

[isNativeFunction.ts:7](https://github.com/daysnap/utils/blob/3253702/src/isNativeFunction.ts#L7)

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

[isNull.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isNull.ts#L4)

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

[isNumber.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isNumber.ts#L5)

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

[isObject.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isObject.ts#L4)

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

[isPhone.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isPhone.ts#L4)

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

[isPromise.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isPromise.ts#L4)

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

[isRegExp.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isRegExp.ts#L4)

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

[isString.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isString.ts#L4)

___

### isURL

▸ **isURL**(`val`): `boolean`

判断是否是 url

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

`boolean`

#### Defined in

[isURL.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isURL.ts#L4)

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

[isUndefined.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isUndefined.ts#L4)

___

### isWeChat

▸ **isWeChat**(): `boolean`

判断是否是微信浏览器

#### Returns

`boolean`

#### Defined in

[isWeChat.ts:4](https://github.com/daysnap/utils/blob/3253702/src/isWeChat.ts#L4)

___

### isWeChatMiniProgram

▸ **isWeChatMiniProgram**(): `boolean`

判断是否是微信小程序web-view环境
https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html

#### Returns

`boolean`

#### Defined in

[isWeChatMiniProgram.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isWeChatMiniProgram.ts#L5)

___

### isWeixin

▸ **isWeixin**(): `boolean`

判断是否是微信浏览器

**`Deprecated`**

请使用 isWeChat 方法

#### Returns

`boolean`

#### Defined in

[isWeChat.ts:12](https://github.com/daysnap/utils/blob/3253702/src/isWeChat.ts#L12)

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

[isWindow.ts:5](https://github.com/daysnap/utils/blob/3253702/src/isWindow.ts#L5)

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

[kebabCase.ts:5](https://github.com/daysnap/utils/blob/3253702/src/kebabCase.ts#L5)

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

[listGenerator.ts:5](https://github.com/daysnap/utils/blob/3253702/src/listGenerator.ts#L5)

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

[mousewheel.ts:22](https://github.com/daysnap/utils/blob/3253702/src/mousewheel.ts#L22)

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

[normalizePath.ts:4](https://github.com/daysnap/utils/blob/3253702/src/normalizePath.ts#L4)

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

[omit.ts:4](https://github.com/daysnap/utils/blob/3253702/src/omit.ts#L4)

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

[padding.ts:7](https://github.com/daysnap/utils/blob/3253702/src/padding.ts#L7)

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

[parseDate.ts:4](https://github.com/daysnap/utils/blob/3253702/src/parseDate.ts#L4)

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

[parseError.ts:8](https://github.com/daysnap/utils/blob/3253702/src/parseError.ts#L8)

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

[parseObject.ts:5](https://github.com/daysnap/utils/blob/3253702/src/parseObject.ts#L5)

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

[parsePath.ts:6](https://github.com/daysnap/utils/blob/3253702/src/parsePath.ts#L6)

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

[parseQuery.ts:8](https://github.com/daysnap/utils/blob/3253702/src/parseQuery.ts#L8)

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

[pascalCase.ts:8](https://github.com/daysnap/utils/blob/3253702/src/pascalCase.ts#L8)

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

[pick.ts:4](https://github.com/daysnap/utils/blob/3253702/src/pick.ts#L4)

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

[replaceCrlf.ts:4](https://github.com/daysnap/utils/blob/3253702/src/replaceCrlf.ts#L4)

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

[requestFullScreen.ts:6](https://github.com/daysnap/utils/blob/3253702/src/requestFullScreen.ts#L6)

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

[reserve.ts:8](https://github.com/daysnap/utils/blob/3253702/src/reserve.ts#L8)

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

[rgbToHex.ts:4](https://github.com/daysnap/utils/blob/3253702/src/rgbToHex.ts#L4)

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

[round.ts:6](https://github.com/daysnap/utils/blob/3253702/src/round.ts#L6)

___

### scrollToTop

▸ **scrollToTop**(): `void`

滚动到页面顶部

#### Returns

`void`

#### Defined in

[scrollToTop.ts:4](https://github.com/daysnap/utils/blob/3253702/src/scrollToTop.ts#L4)

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

[sleep.ts:6](https://github.com/daysnap/utils/blob/3253702/src/sleep.ts#L6)

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

[splitArray.ts:4](https://github.com/daysnap/utils/blob/3253702/src/splitArray.ts#L4)

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

[stringTrim.ts:6](https://github.com/daysnap/utils/blob/3253702/src/stringTrim.ts#L6)

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

[stringifyQuery.ts:7](https://github.com/daysnap/utils/blob/3253702/src/stringifyQuery.ts#L7)

___

### throttle

▸ **throttle**<`T`\>(`fn`, `ms`): (`this`: `unknown`, ...`args`: `Parameters`<`T`\>) => `void`

节流函数
减少事件执行次数，有规律的执行

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

[throttle.ts:5](https://github.com/daysnap/utils/blob/3253702/src/throttle.ts#L5)

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

[toCDB.ts:4](https://github.com/daysnap/utils/blob/3253702/src/toCDB.ts#L4)

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

[toDBC.ts:4](https://github.com/daysnap/utils/blob/3253702/src/toDBC.ts#L4)

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

[typeOf.ts:6](https://github.com/daysnap/utils/blob/3253702/src/typeOf.ts#L6)
