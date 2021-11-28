---
title: HeatmapCalendar 活跃日历
group:
  path: /
nav:
  path: /components
---

# HeatmapCalendar 活跃日历

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

[version-image]: http://img.shields.io/npm/v/@arvinxu/heatmap-calendar.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@arvinxu/heatmap-calendar
[download-image]: https://img.shields.io/npm/dm/@arvinxu/heatmap-calendar.svg
[download-url]: https://github.com/arvinxx/components/tree/master/packages/heatmap-calendar

活跃日历

## 数据需求

每一项需要传入的数据如下:

```typescript
interface Item {
  total: number; // 数量

  date: string; // 日期
  day: number; // 天数
  month: number; // 月份
  week: number; // 周
  year: number; // 年
}
```

示例:

```json
{
  "date": "2020-03-31",
  "day": 2,
  "month": 3,
  "total": 0,
  "week": 14,
  "year": 2020
}
```

## 演示

<code src='../demos/Demo.tsx' />

<API src='./index.tsx'></API>
