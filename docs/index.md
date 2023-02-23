---
title: 空谷的组件库
hero:
  title: 空谷的组件库
  desc: 🌈 九层之台 起于累土
  actions:
    - text: 说明
      link: /guide
    - text: 组件库
      link: /components

features:
  - image: 📦
    title: 简单易用
    description: 在 Ant Design 上进行了自己的封装，更加易用
  - image: ⚛
    title: Ant Design
    description: 与 Ant Design 设计体系一脉相承，无缝对接 antd 项目
  - image: ⛑
    title: TypeScript
    description: 使用 TypeScript 开发，提供完整的类型定义文件

footer: Open-source MIT Licensed | Copyright © 2021-present
---

[![Coverage][coverage]][codecov-url] [![Gitmoji][gitmoji]][gitmoji-url] [![semantic-release][semantic-release]][semantic-release-repo] ![][license-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)][lerna-url] [![typedoc](https://img.shields.io/badge/API%20by-typedoc-9600ff.svg)](https://typedoc.org/)

<!-- umi url -->

[lerna-url]: https://lernajs.io/
[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- badage url -->

[gitmoji]: https://img.shields.io/badge/Gitmoji-%20😜%20😍-FFDD67.svg
[gitmoji-url]: https://gitmoji.carloscuesta.me/
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-repo]: https://github.com/semantic-release/semantic-release
[license-url]: https://img.shields.io/github/license/arvinxx/gitmoji-commit-workflow

<!-- Github CI -->

[test-ci]: https://github.com/arvinxx/components/workflows/Test%20CI/badge.svg
[release-ci]: https://github.com/arvinxx/components/workflows/Release%20CI/badge.svg
[test-ci-url]: https://github.com/arvinxx/components/actions?query=workflow%3A%22Test+CI%22
[deploy-ci-url]: https://github.com/arvinxx/components/actions?query=workflow%3A%22Release+CI%22
[coverage]: https://codecov.io/gh/arvinxx/components/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/arvinxx/components/branch/master

## 看板

### 通用组件

| 组件                                                                     | 版本                                                                             | 说明                                   |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------------------------------------- |
| [FloatLabelInput](/packages/float-label-input/src/float-label-input.md)  | [![NPM version][float-label-input-version-image]][float-label-input-version-url] | 标签会跟随 hover 状态浮动的 Input 组件 |
| [PageLoading](/components/common/page-loading)                           | [![NPM version][page-loading-version-image]][page-loading-version-url]           | 页面状态加载                           |
| [Preloader](/components/common/preloader)                                | [![NPM version][preloader-version-image]][preloader-version-url]                 | 加载组件                               |
| [TrafficLight](/packages/macos-traffic-light/src/macos-traffic-light.md) | [![NPM version][traffic-light-version-image]][traffic-light-version-url]         | macOS 右上角控制按钮                   |

[float-label-input-version-image]: http://img.shields.io/npm/v/@arvinxu/float-label-input.svg?color=deepgreen&label=latest
[float-label-input-version-url]: http://npmjs.org/package/@arvinxu/float-label-input
[page-loading-version-image]: http://img.shields.io/npm/v/@arvinxu/page-loading.svg?color=deepgreen&label=latest
[page-loading-version-url]: http://npmjs.org/package/@arvinxu/page-loading
[preloader-version-image]: http://img.shields.io/npm/v/@arvinxu/preloader.svg?color=deepgreen&label=latest
[preloader-version-url]: http://npmjs.org/package/@arvinxu/preloader
[traffic-light-version-image]: http://img.shields.io/npm/v/@arvinxu/macos-traffic-light.svg?color=deepgreen&label=latest
[traffic-light-version-url]: http://npmjs.org/package/@arvinxu/macos-traffic-light

### 业务组件

| 组件                                                         | 版本                                                                     | 说明                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| [MindFlow](/packages/mindflow/src/mindflow.md)               | [![NPM version][mindflow-version-image]][mindflow-version-url]           | 基于溯因推理与图尔敏推论模型为理论基础构建的思维推理组件 |
| [AssetGallery](/packages/asset-gallery/src/asset-gallery.md) | [![NPM version][asset-gallery-version-image]][asset-gallery-version-url] | 方便物料分发的图片画廊组件                               |
| [JourneyMap](/packages/journey-map/src/journey-map.md)       | [![NPM version][journey-map-version-image]][journey-map-version-url]     | 用户旅程地图组件                                         |

[mindflow-version-image]: http://img.shields.io/npm/v/@arvinxu/mindflow.svg?color=deepgreen&label=latest
[mindflow-version-url]: http://npmjs.org/package/@arvinxu/mindflow
[asset-gallery-version-image]: http://img.shields.io/npm/v/@arvinxu/asset-gallery.svg?color=deepgreen&label=latest
[asset-gallery-version-url]: http://npmjs.org/package/@arvinxu/asset-gallery
[journey-map-version-image]: http://img.shields.io/npm/v/@arvinxu/journey-map.svg?color=deepgreen&label=latest
[journey-map-version-url]: http://npmjs.org/package/@arvinxu/journey-map
