# @arvinxu/macos-traffic-light

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

macOS 上的控制按钮

![](https://gw.alipayobjects.com/zos/antfincdn/o6BBRY4gaO/5d51620f-922e-4090-9546-8cc7d60b635b.png)

## Install

```shell
yarn add @arvinxu/macos-traffic-light
```

## Usage

```typescript jsx
import React from 'react';
import TrafficLight from '@arvinxu/macos-traffic-light';

const Demo = () => {
  return (
    <TrafficLight
      onClose={() => {
        alert('Pressed closed');
      }}
      onMinimize={() => {
        alert('Pressed onMinimize');
      }}
      onMaximize={() => {
        alert('Pressed onMaximize');
      }}
    />
  );
};

export default Demo;
```

## Demo

[Demo](https://components.arvinx.com/components/common/macos-traffic-light)

## License

[MIT](../../LICENSE) ® Arvin Xu

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/@arvinxu/macos-traffic-light.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@arvinxu/macos-traffic-light
[download-image]: https://img.shields.io/npm/dm/@arvinxu/macos-traffic-light.svg
[download-url]: https://npmjs.org/package/@arvinxu/macos-traffic-light
