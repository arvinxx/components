---
title: JourneyMap
order: 3
---

# Journey Map 用户旅程地图

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

[version-image]: http://img.shields.io/npm/v/@arvinxu/journey-map.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@arvinxu/journey-map
[download-image]: https://img.shields.io/npm/dm/@arvinxu/journey-map.svg
[download-url]: https://github.com/arvinxx/components/tree/master/packages/journey-map

展示用户旅程地图的组件

[![Journey Map  YAML Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/journey-map-yaml-template-lmxez?file=/map.yml)

## 默认

<code src='./examples/JourneyMap/Demo.tsx' />

## 自定义颜色

<code src='./examples/JourneyMap/CustomColor.tsx' />

## 使用 YML

支持使用 YML 格式的数据

### 数据示例

```yaml
# 阶段步骤
stages:
  - name: 计划租车
    actions:
      - name: 找租车平台
        emotion: -1
      - name: 对比不同平台
        emotion: -2
      - name: 确定平台
        emotion: 0

  - name: 租车
    actions:
      - name: 选择租车日期
        emotion: -1
      - name: 与同伴讨论车型
        emotion: -1
      - name: 选择租车类型
        emotion: 0
      - name: 支付费用
        emotion: 1

  - name: 提车
    actions:
      - name: 打车去提车点
        emotion: 2
      - name: 确认提车时间和地点
        emotion: 2
      - name: 确认车况
        emotion: 1
      - name: 确认还车注意事项
        emotion: 1
      - name: 取车离开
        emotion: 2

  - name: 游玩
    actions:
      - name: 返回接同伴
        emotion: 2
      - name: 开车游玩一天
        emotion: 0
      - name: 车出了问题
        emotion: -2
      - name: 打电话给客服
        emotion: -1
      - name: 处理车况
        emotion: 0

  - name: 还车
    actions:
      - name: 加油站加油
        emotion: -1
      - name: 确认使用车况
        emotion: 0
      - name: 完成车辆交接
        emotion: 1
      - name: 打车返回
        emotion: 0
      - name: 处理车况
        emotion: 0
```

### 加载字符串

<code src='./examples/JourneyMap/YAMLWithString.tsx' />

### 加载网址

<code src='./examples/JourneyMap/YAMLWithURL.tsx' />

<API src='../../../packages/journey-map/src/index.tsx'></API>
