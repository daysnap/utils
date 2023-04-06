[@daysnap/utils](README.md) / Exports

# @daysnap/utils

## Table of contents

### Functions

- [base64ToBlob](modules.md#base64toblob)
- [blobToBase64](modules.md#blobtobase64)
- [camelCase](modules.md#camelcase)
- [canvasToBlob](modules.md#canvastoblob)
- [capitalize](modules.md#capitalize)
- [clone](modules.md#clone)
- [cloneSimple](modules.md#clonesimple)
- [colorGenByHash](modules.md#colorgenbyhash)
- [compareVersion](modules.md#compareversion)
- [compressImage](modules.md#compressimage)
- [debounce](modules.md#debounce)
- [downloadFile](modules.md#downloadfile)
- [each](modules.md#each)
- [filterBankCardNo](modules.md#filterbankcardno)
- [filterCRLF](modules.md#filtercrlf)
- [filterEmoji](modules.md#filteremoji)
- [filterIdCard](modules.md#filteridcard)
- [filterName](modules.md#filtername)
- [filterPhone](modules.md#filterphone)
- [formatAmount](modules.md#formatamount)
- [formatDate](modules.md#formatdate)
- [formatMessage](modules.md#formatmessage)
- [getBlobByUrl](modules.md#getblobbyurl)
- [getCache](modules.md#getcache)
- [getDayMillisecond](modules.md#getdaymillisecond)
- [getImageInfo](modules.md#getimageinfo)
- [getLocal](modules.md#getlocal)
- [getRandomColor](modules.md#getrandomcolor)
- [getVideoInfo](modules.md#getvideoinfo)
- [inBrowser](modules.md#inbrowser)
- [insertLink](modules.md#insertlink)
- [insertScript](modules.md#insertscript)
- [insertStyle](modules.md#insertstyle)
- [isAndroid](modules.md#isandroid)
- [isArray](modules.md#isarray)
- [isBoolean](modules.md#isboolean)
- [isEmail](modules.md#isemail)
- [isEmpty](modules.md#isempty)
- [isEmptyObject](modules.md#isemptyobject)
- [isError](modules.md#iserror)
- [isFunction](modules.md#isfunction)
- [isIOS](modules.md#isios)
- [isIdCard](modules.md#isidcard)
- [isJSONString](modules.md#isjsonstring)
- [isLan](modules.md#islan)
- [isLicenseCode](modules.md#islicensecode)
- [isMobile](modules.md#ismobile)
- [isNull](modules.md#isnull)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isPhone](modules.md#isphone)
- [isPromise](modules.md#ispromise)
- [isRegExp](modules.md#isregexp)
- [isString](modules.md#isstring)
- [isURL](modules.md#isurl)
- [isUndefined](modules.md#isundefined)
- [isWeixin](modules.md#isweixin)
- [isWindow](modules.md#iswindow)
- [kebabCase](modules.md#kebabcase)
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
- [reserve](modules.md#reserve)
- [round](modules.md#round)
- [sleep](modules.md#sleep)
- [stringTrim](modules.md#stringtrim)
- [stringifyQuery](modules.md#stringifyquery)
- [throttle](modules.md#throttle)
- [typeOf](modules.md#typeof)

## Functions

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

[base64ToBlob.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/base64ToBlob.ts#L6)

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

[blobToBase64.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/blobToBase64.ts#L4)

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

camelCase.ts:5

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

[canvasToBlob.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/canvasToBlob.ts#L4)

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

capitalize.ts:5

___

### clone

▸ **clone**<`T`\>(`source`): `T`

深拷贝

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `T` | 需要转换的值 |

#### Returns

`T`

#### Defined in

[clone.ts:8](https://github.com/daysnap/utils/blob/edb8efd/src/clone.ts#L8)

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

[cloneSimple.ts:7](https://github.com/daysnap/utils/blob/edb8efd/src/cloneSimple.ts#L7)

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

[createHexColorByHash.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/createHexColorByHash.ts#L4)

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

[compareVersion.ts:9](https://github.com/daysnap/utils/blob/edb8efd/src/compareVersion.ts#L9)

___

### compressImage

▸ **compressImage**(`image`): `HTMLCanvasElement`

压缩图片

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[compressImage.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/compressImage.ts#L6)

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

[debounce.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/debounce.ts#L5)

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

[downloadFile.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/downloadFile.ts#L4)

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

[each.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/each.ts#L4)

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

[each.ts:8](https://github.com/daysnap/utils/blob/edb8efd/src/each.ts#L8)

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

[filterBankCardNo.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/filterBankCardNo.ts#L4)

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

[filterCRLF.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/filterCRLF.ts#L4)

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

[filterEmoji.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/filterEmoji.ts#L4)

___

### filterIdCard

▸ **filterIdCard**(`val`): `string`

身份证号码加 *

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

#### Defined in

[filterIdCard.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/filterIdCard.ts#L4)

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

[filterName.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/filterName.ts#L4)

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

[filterPhone.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/filterPhone.ts#L6)

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

[formatAmount.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/formatAmount.ts#L4)

___

### formatDate

▸ **formatDate**(`val`, `fmt?`): `string`

格式化日期

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `val` | `string` \| `number` \| `Date` | `undefined` |
| `fmt` | `string` | `'yyyy-MM-dd hh:mm:ss'` |

#### Returns

`string`

#### Defined in

[formatDate.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/formatDate.ts#L6)

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

[formatMessage.ts:11](https://github.com/daysnap/utils/blob/edb8efd/src/formatMessage.ts#L11)

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

[getBlobByUrl.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/getBlobByUrl.ts#L4)

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

[storage/index.ts:7](https://github.com/daysnap/utils/blob/edb8efd/src/storage/index.ts#L7)

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

[getDayMillisecond.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/getDayMillisecond.ts#L4)

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

[getImageInfo.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/getImageInfo.ts#L4)

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

[storage/index.ts:7](https://github.com/daysnap/utils/blob/edb8efd/src/storage/index.ts#L7)

___

### getRandomColor

▸ **getRandomColor**(): `string`

随机颜色

#### Returns

`string`

#### Defined in

[getRandomColor.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/getRandomColor.ts#L4)

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

[getVideoInfo.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/getVideoInfo.ts#L4)

___

### inBrowser

▸ **inBrowser**(): `boolean`

判断是否是浏览器环境

#### Returns

`boolean`

#### Defined in

[inBrowser.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/inBrowser.ts#L4)

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

[insertLink.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/insertLink.ts#L4)

▸ **insertLink**(`href`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLLinkElement`) => `void` |

#### Returns

`void`

#### Defined in

[insertLink.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/insertLink.ts#L5)

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

[insertScript.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/insertScript.ts#L4)

▸ **insertScript**(`src`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `callback` | (`err`: `unknown`, `el`: `HTMLScriptElement`) => `void` |

#### Returns

`void`

#### Defined in

[insertScript.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/insertScript.ts#L5)

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

[insertStyle.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/insertStyle.ts#L4)

___

### isAndroid

▸ **isAndroid**(): `boolean`

校验是否是安卓

#### Returns

`boolean`

#### Defined in

[isAndroid.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isAndroid.ts#L4)

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

[isArray.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/isArray.ts#L6)

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

[isBoolean.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/isBoolean.ts#L5)

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

[isEmail.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isEmail.ts#L4)

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

[isEmpty.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/isEmpty.ts#L6)

___

### isEmptyObject

▸ **isEmptyObject**(`v`): `boolean`

判断是否是空对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `object` | 对象 |

#### Returns

`boolean`

#### Defined in

[isEmptyObject.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/isEmptyObject.ts#L5)

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

[isError.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isError.ts#L4)

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

[isFunction.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isFunction.ts#L4)

___

### isIOS

▸ **isIOS**(): `boolean`

校验是否是ios

#### Returns

`boolean`

#### Defined in

[isIOS.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isIOS.ts#L4)

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

[isIdCard.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isIdCard.ts#L4)

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

[isJSONString.ts:7](https://github.com/daysnap/utils/blob/edb8efd/src/isJSONString.ts#L7)

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

[isLan.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/isLan.ts#L5)

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

[isLicenseCode.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/isLicenseCode.ts#L5)

___

### isMobile

▸ **isMobile**(): `boolean`

校验设备是否是手机

#### Returns

`boolean`

#### Defined in

[isMobile.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isMobile.ts#L4)

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

[isNull.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isNull.ts#L4)

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

[isNumber.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/isNumber.ts#L5)

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

[isObject.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isObject.ts#L4)

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

[isPhone.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isPhone.ts#L4)

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

[isPromise.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isPromise.ts#L4)

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

[isRegExp.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isRegExp.ts#L4)

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

[isString.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isString.ts#L4)

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

[isURL.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isURL.ts#L4)

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

[isUndefined.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isUndefined.ts#L4)

___

### isWeixin

▸ **isWeixin**(): `boolean`

是否是微信环境

#### Returns

`boolean`

#### Defined in

[isWeixin.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/isWeixin.ts#L4)

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

[isWindow.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/isWindow.ts#L5)

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

kebabCase.ts:5

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

[omit.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/omit.ts#L4)

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

[padding.ts:7](https://github.com/daysnap/utils/blob/edb8efd/src/padding.ts#L7)

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

[parseDate.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/parseDate.ts#L4)

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

[parseError.ts:8](https://github.com/daysnap/utils/blob/edb8efd/src/parseError.ts#L8)

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

[parseObject.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/parseObject.ts#L5)

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

[parsePath.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/parsePath.ts#L6)

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

[parseQuery.ts:8](https://github.com/daysnap/utils/blob/edb8efd/src/parseQuery.ts#L8)

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

pascalCase.ts:8

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

[pick.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/pick.ts#L4)

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

[replaceCrlf.ts:4](https://github.com/daysnap/utils/blob/edb8efd/src/replaceCrlf.ts#L4)

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

[reserve.ts:8](https://github.com/daysnap/utils/blob/edb8efd/src/reserve.ts#L8)

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

[round.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/round.ts#L6)

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

[sleep.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/sleep.ts#L6)

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

[stringTrim.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/stringTrim.ts#L6)

___

### stringifyQuery

▸ **stringifyQuery**(`v`): `string`

说明

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[stringifyQuery.ts:7](https://github.com/daysnap/utils/blob/edb8efd/src/stringifyQuery.ts#L7)

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

[throttle.ts:5](https://github.com/daysnap/utils/blob/edb8efd/src/throttle.ts#L5)

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

[typeOf.ts:6](https://github.com/daysnap/utils/blob/edb8efd/src/typeOf.ts#L6)
