/**
 * compact: true
 */
import SortableList from '@arvinxu/sortable-list';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const Demo = () => {
  const [list, setList] = useState([{ id: 'hello' }, { id: 'world' }]);

  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList dataSource={list} onChange={(value) => setList(value)} />
    </Flexbox>
  );
};

export default Demo;
