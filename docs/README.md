---
title: 使用指南
---

## 安装

可直接从下面链接中 clone 或下载到本地<br/>
[github 地址](https://github.com/wangli66/vue3-leaflet.git)
https://github.com/wangli66/vue3-leaflet.git

推荐：[gitee 地址](https://gitee.com/wangli66/vue3-leaflet.git)
https://gitee.com/wangli66/vue3-leaflet.git

前言说明：由于 vite 支持 esm 的写法，本组件依赖的 leaflet 是 common 写法；故续安装插件@originjs/vite-plugin-commonjs；
然后在 vite.config.js 的配置文件加入插件

```js
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
export default defineConfig({
	plugins: [viteCommonjs()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
```

1、安装

```js
    npm install vue3-leaflet leaflet
```

2、使用

```js
import vue3Leaflet from "vue3-leaflet";
Vue.use(vue3Leaflet);
```

## 本地运行查看说明文档

可以使用 npm 或者 yarn 进行安装包和其他操作,本例使用 npm 做示例

1、安装依赖包

```js
    npm install
```

2、启动项目

```js
    npm run docs:dev
```

## 其他

如果你在项目的使用过程中，有什么建议或意见，可以 issue 我
