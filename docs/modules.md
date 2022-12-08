[@daysnap/utils](README.md) / Exports

# @daysnap/utils

## Table of contents

### Functions

- [base64ToBlob](modules.md#base64toblob)
- [blobToBase64](modules.md#blobtobase64)
- [colorGenByHash](modules.md#colorgenbyhash)
- [compareVersion](modules.md#compareversion)
- [compressImage](modules.md#compressimage)
- [downloadFile](modules.md#downloadfile)
- [each](modules.md#each)
- [filterBankCardNo](modules.md#filterbankcardno)
- [filterEmoji](modules.md#filteremoji)
- [filterIdCard](modules.md#filteridcard)
- [filterName](modules.md#filtername)
- [filterPhone](modules.md#filterphone)
- [formatAmount](modules.md#formatamount)
- [formatDate](modules.md#formatdate)
- [getBlobByUrl](modules.md#getblobbyurl)
- [getCache](modules.md#getcache)
- [getDayMillisecond](modules.md#getdaymillisecond)
- [getImageInfo](modules.md#getimageinfo)
- [getLocal](modules.md#getlocal)
- [getVideoInfo](modules.md#getvideoinfo)
- [inBrowser](modules.md#inbrowser)
- [isAndroid](modules.md#isandroid)
- [isEmail](modules.md#isemail)
- [isEmpty](modules.md#isempty)
- [isEmptyObject](modules.md#isemptyobject)
- [isError](modules.md#iserror)
- [isFunction](modules.md#isfunction)
- [isIOS](modules.md#isios)
- [isIdCard](modules.md#isidcard)
- [isJSONString](modules.md#isjsonstring)
- [isLicenseCode](modules.md#islicensecode)
- [isMobile](modules.md#ismobile)
- [isNull](modules.md#isnull)
- [isObject](modules.md#isobject)
- [isPhone](modules.md#isphone)
- [isPromise](modules.md#ispromise)
- [isRegExp](modules.md#isregexp)
- [isString](modules.md#isstring)
- [isUndefined](modules.md#isundefined)
- [isWindow](modules.md#iswindow)
- [omit](modules.md#omit)
- [parseDate](modules.md#parsedate)
- [parseError](modules.md#parseerror)
- [parsePath](modules.md#parsepath)
- [parseQuery](modules.md#parsequery)
- [pick](modules.md#pick)
- [replaceCrlf](modules.md#replacecrlf)
- [reserve](modules.md#reserve)
- [sleep](modules.md#sleep)
- [stringifyQuery](modules.md#stringifyquery)

## Functions

### base64ToBlob

▸ **base64ToBlob**(`base64`, `contentType?`): `Blob`

base64 转 blob

#### Parameters

| Name | Type |
| :------ | :------ |
| `base64` | `string` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Defined in

[base64ToBlob.ts:4](https://github.com/daysnap/utils/blob/d990909/src/base64ToBlob.ts#L4)

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

[blobToBase64.ts:4](https://github.com/daysnap/utils/blob/d990909/src/blobToBase64.ts#L4)

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

[createHexColorByHash.ts:4](https://github.com/daysnap/utils/blob/d990909/src/createHexColorByHash.ts#L4)

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

[compareVersion.ts:9](https://github.com/daysnap/utils/blob/d990909/src/compareVersion.ts#L9)

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

[compressImage.ts:6](https://github.com/daysnap/utils/blob/d990909/src/compressImage.ts#L6)

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

[downloadFile.ts:4](https://github.com/daysnap/utils/blob/d990909/src/downloadFile.ts#L4)

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

[each.ts:4](https://github.com/daysnap/utils/blob/d990909/src/each.ts#L4)

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

[each.ts:8](https://github.com/daysnap/utils/blob/d990909/src/each.ts#L8)

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

[filterBankCardNo.ts:4](https://github.com/daysnap/utils/blob/d990909/src/filterBankCardNo.ts#L4)

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

[filterEmoji.ts:4](https://github.com/daysnap/utils/blob/d990909/src/filterEmoji.ts#L4)

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

[filterIdCard.ts:4](https://github.com/daysnap/utils/blob/d990909/src/filterIdCard.ts#L4)

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

[filterName.ts:4](https://github.com/daysnap/utils/blob/d990909/src/filterName.ts#L4)

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

[filterPhone.ts:6](https://github.com/daysnap/utils/blob/d990909/src/filterPhone.ts#L6)

___

### formatAmount

▸ **formatAmount**(`s`, `radix?`): `string`

格式化金额，默认元

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` | `undefined` |
| `radix` | `number` | `1` |

#### Returns

`string`

#### Defined in

[formatAmount.ts:4](https://github.com/daysnap/utils/blob/d990909/src/formatAmount.ts#L4)

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

[formatDate.ts:6](https://github.com/daysnap/utils/blob/d990909/src/formatDate.ts#L6)

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

[getBlobByUrl.ts:4](https://github.com/daysnap/utils/blob/d990909/src/getBlobByUrl.ts#L4)

___

### getCache

▸ **getCache**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `generate` | <T\>(`key`: `string`) => { `getItem`: (`defaultVal?`: `Partial`<`T`\>) => `any` ; `removeItem`: () => `void` ; `setItem`: (`val`: `T`) => `T` ; `updateItem`: (`val`: `Partial`<`T`\>) => `T`  } |
| `getItem` | <T\>(`key`: `string`, `defaultVal`: `Partial`<`T`\>) => `any` |
| `removeItem` | (`key`: `string`) => `void` |
| `setItem` | <T\>(`key`: `string`, `val`: `T`) => `T` |
| `updateItem` | <T\>(`key`: `string`, `val`: `Partial`<`T`\>) => `T` |

#### Defined in

[storage/index.ts:7](https://github.com/daysnap/utils/blob/d990909/src/storage/index.ts#L7)

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

[getDayMillisecond.ts:4](https://github.com/daysnap/utils/blob/d990909/src/getDayMillisecond.ts#L4)

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

[getImageInfo.ts:4](https://github.com/daysnap/utils/blob/d990909/src/getImageInfo.ts#L4)

___

### getLocal

▸ **getLocal**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `generate` | <T\>(`key`: `string`) => { `getItem`: (`defaultVal?`: `Partial`<`T`\>) => `any` ; `removeItem`: () => `void` ; `setItem`: (`val`: `T`) => `T` ; `updateItem`: (`val`: `Partial`<`T`\>) => `T`  } |
| `getItem` | <T\>(`key`: `string`, `defaultVal`: `Partial`<`T`\>) => `any` |
| `removeItem` | (`key`: `string`) => `void` |
| `setItem` | <T\>(`key`: `string`, `val`: `T`) => `T` |
| `updateItem` | <T\>(`key`: `string`, `val`: `Partial`<`T`\>) => `T` |

#### Defined in

[storage/index.ts:7](https://github.com/daysnap/utils/blob/d990909/src/storage/index.ts#L7)

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

[getVideoInfo.ts:4](https://github.com/daysnap/utils/blob/d990909/src/getVideoInfo.ts#L4)

___

### inBrowser

▸ **inBrowser**(): `boolean`

判断是否是浏览器环境

#### Returns

`boolean`

#### Defined in

[inBrowser.ts:4](https://github.com/daysnap/utils/blob/d990909/src/inBrowser.ts#L4)

___

### isAndroid

▸ **isAndroid**(): `boolean`

校验是否是安卓

#### Returns

`boolean`

#### Defined in

[isAndroid.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isAndroid.ts#L4)

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

[isEmail.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isEmail.ts#L4)

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

[isEmpty.ts:6](https://github.com/daysnap/utils/blob/d990909/src/isEmpty.ts#L6)

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

[isEmptyObject.ts:5](https://github.com/daysnap/utils/blob/d990909/src/isEmptyObject.ts#L5)

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

[isError.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isError.ts#L4)

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

[isFunction.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isFunction.ts#L4)

___

### isIOS

▸ **isIOS**(): `boolean`

校验是否是ios

#### Returns

`boolean`

#### Defined in

[isIOS.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isIOS.ts#L4)

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

[isIdCard.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isIdCard.ts#L4)

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

[isJSONString.ts:7](https://github.com/daysnap/utils/blob/d990909/src/isJSONString.ts#L7)

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

[isLicenseCode.ts:5](https://github.com/daysnap/utils/blob/d990909/src/isLicenseCode.ts#L5)

___

### isMobile

▸ **isMobile**(): `boolean`

校验设备是否是手机

#### Returns

`boolean`

#### Defined in

[isMobile.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isMobile.ts#L4)

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

[isNull.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isNull.ts#L4)

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

[isObject.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isObject.ts#L4)

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

[isPhone.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isPhone.ts#L4)

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

[isPromise.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isPromise.ts#L4)

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

[isRegExp.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isRegExp.ts#L4)

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

[isString.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isString.ts#L4)

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

[isUndefined.ts:4](https://github.com/daysnap/utils/blob/d990909/src/isUndefined.ts#L4)

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

[isWindow.ts:5](https://github.com/daysnap/utils/blob/d990909/src/isWindow.ts#L5)

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

[omit.ts:4](https://github.com/daysnap/utils/blob/d990909/src/omit.ts#L4)

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

[parseDate.ts:4](https://github.com/daysnap/utils/blob/d990909/src/parseDate.ts#L4)

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

[parseError.ts:8](https://github.com/daysnap/utils/blob/d990909/src/parseError.ts#L8)

___

### parsePath

▸ **parsePath**(`obj`, `path`): `Record`<`string`, `any`\>

根据路径解析值

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |
| `path` | `string` |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[parsePath.ts:4](https://github.com/daysnap/utils/blob/d990909/src/parsePath.ts#L4)

___

### parseQuery

▸ **parseQuery**(`v?`, `k?`): `Object`

解析url参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v?` | `string` | URl |
| `k?` | `string` | 键名 |

#### Returns

`Object`

#### Defined in

[parseQuery.ts:8](https://github.com/daysnap/utils/blob/d990909/src/parseQuery.ts#L8)

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

[pick.ts:4](https://github.com/daysnap/utils/blob/d990909/src/pick.ts#L4)

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

[replaceCrlf.ts:4](https://github.com/daysnap/utils/blob/d990909/src/replaceCrlf.ts#L4)

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

[reserve.ts:8](https://github.com/daysnap/utils/blob/d990909/src/reserve.ts#L8)

___

### sleep

▸ **sleep**(`timeout`, `isSuccess?`): `Promise`<`void`\>

说明

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timeout` | `number` | `undefined` |
| `isSuccess` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sleep.ts:4](https://github.com/daysnap/utils/blob/d990909/src/sleep.ts#L4)

___

### stringifyQuery

▸ **stringifyQuery**(`v`): `string`

说明

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `object` |

#### Returns

`string`

#### Defined in

[stringifyQuery.ts:6](https://github.com/daysnap/utils/blob/d990909/src/stringifyQuery.ts#L6)
