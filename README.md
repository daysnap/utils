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


### `moduleResolution`

模块解析策略,是指编译器在查找导入模块内容时所遵循的流程


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

