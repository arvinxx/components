import React from 'react';
import TagSelector from '@arvinxu/tag-selector';
import { Item } from '@arvinxu/tag-selector/type';
export const smallLabel: Item[] = [
  {
    title: '未分组',
    key: '1526132530988',
    value: [
      {
        text: '测试标签1',
        key: 'rJecwftRf',
        refText: '21312',
      },
      {
        text: '测试标签2',
        key: 'rJecwfsdstRf',
        refText: '1352dx',
      },
    ],
  },
];

const Simple = () => {
  return (
    <div>
      <TagSelector value={smallLabel} />
    </div>
  );
};

export default Simple;
