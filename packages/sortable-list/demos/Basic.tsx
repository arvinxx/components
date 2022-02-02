import React, { useState } from 'react';

import SortableList from '@arvinxu/sortable-list';

const Demo = () => {
  const [list, setList] = useState([{ id: 'hello' }, { id: 'world' }]);

  return (
    <SortableList dataSource={list} onChange={(value) => setList(value)} />
  );
};

export default Demo;
