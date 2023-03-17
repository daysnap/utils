# @daysnap/utils

工具库

## 使用

- 安装
```shell
npm install @daysnap/utils

# or
yarn add @daysnap/utils
```

- 引入
```js
import { debounce } from '@daysnap/utils'
```

## 详情文档

[Exports](./docs/modules.md)


## typescript json 配置解析


### `lib`

> https://www.bilibili.com/read/cv13643741

注意：如果未指定 `--lib`，则会注入默认的 `librares` 列表。注入的默认库为：

Typescript 没有任何内置类型，所有类型都来自一组基本定义（位于 libtypescript 安装目录的文件夹中）。默认情况下，包含的target定义libs。例如，文档状态：

- 对于 --target ES5: DOM ES5 ScriptHost

- 对于 --target ES6: DOM ES6 DOM Iterable ScriptHost




### `moduleResolution`

> https://blog.csdn.net/weixin_40013817/article/details/127200965

模块解析策略,是指编译器在查找导入模块内容时所遵循的流程

- `node`
- `classic`

若未指定，那么在使用了 `--module AMD` | `System` | `ES2015` 时的默认值为 `Classic`，其它情况时则为 `Node`。


### `esModuleInterop`

> https://blog.csdn.net/juzipidemimi/article/details/103438437

`esModuleInterop` 选项的作用是支持使用 `import d from 'cjs'` 的方式引入commonjs包。
`allowSyntheticDefaultImports` 去除类型检查(允许从没有设置默认导出的模块中默认导入)

`esModuleInterop` 配置提供的帮助，提供两个helper函数 `__importStar` 和 `__importDefault` 分别处理`import * as` 和 `import default` 。


```js
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__esModule = true;
var foo = __importStar(require("foo"));
var bar_1 = __importDefault(require("bar"));
```

可以看到会主动帮你设置default属性。

开启 `esModuleInterop` 后会默认开启 `allowSyntheticDefaultImports` 选项。

