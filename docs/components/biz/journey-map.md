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

## 默认

<code src='./examples/JourneyMap/Demo.tsx' />

## 自定义颜色

<code src='./examples/JourneyMap/CustomColor.tsx' />

## 使用 YML

该组件支持使用 YML 格式的数据

<code src='./examples/JourneyMap/YAML.tsx' />

数据

```yaml
steps:
  - id: plan
    name: 计划租车
  - id: rent
    name: 租车
  - id: take
    name: 提车
  - id: play
    name: 游玩
  - id: return
    name: 还车

actions:
  plan:
    - 找租车平台: -1
    - 对比不同平台: -2
    - 确定平台: 1
  rent:
    - 选择租车日期: -1
    - 与同伴讨论车型: -1
    - 选择租车类型: 0
    - 支付费用: 1
  take:
    - 打车去提车点: 2
    - 确认提车时间和地点: 2
    - 确认车况: 2
    - 确认还车注意事项: 1
    - 取车离开: 2
  play:
    - 返回接同伴: 2
    - 开车游玩一天: 0
    - 车出了问题: -2
    - 打电话给客服: -1
    - 处理车况: 2
  return:
    - 加油站加油: -1
    - 确认使用车况: -1
    - 打车返回: 0
    - 完成车辆交接: 1
```

<API src='../../../packages/journey-map/src/index.tsx'></API>
