---
title: SortableList 可排序列表
order: 2
atomId: SortableList
group: 可排序
apiHeader:
  pkg: '@arvinxu/sortable-list'
  defaultImport: true
  docUrl: https://github.com/arvinxx/components/blob/master/packages/sortable-list/src/sortable-list.md
  sourceUrl: https://github.com/arvinxx/components/blob/master/packages/sortable-list/src/index.ts
---

# SortableList 可排序列表

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/@arvinxu/sortable-list.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@arvinxu/sortable-list
[download-image]: https://img.shields.io/npm/dm/@arvinxu/sortable-list.svg
[download-url]: https://npmjs.org/package/@arvinxu/sortable-list

## 说明

本组件是基于 `dnd-kit` 二次封装的组件。 API 设计上和 antd 的 List 组件保持一致，可以开箱即用。

### 默认

<code src="../demos/Basic" ></code>

### 自定义样式

可以使用 `getItemStyle` 来调整样式，该方法的签名为：

```typescript
interface GetItemStylesArgs {
  index: number;
  isDragging: boolean;
  id: string;
  isSorting: boolean;
  overIndex: number;
  isDragOverlay: boolean;
}

type GetItemStyles = (status: GetItemStylesArgs) => React.CSSProperties;
```

基于相应参数，可以自由控制列项的样式

<code src="../demos/CustomStyle" ></code>

### 自定义渲染

可自定义 itemRender 方法，第二个参数会传入组件相应状态和功能方法

<code src="../demos/CustomRender" ></code>
