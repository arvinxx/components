import React, { useState } from 'react';

import SortableList from '@arvinxu/sortable-list';

const Demo = () => {
  const [list, setList] = useState([
    { text: 'hello', id: 'hello' },
    { text: 'world', id: 'world' },
  ]);

  return <SortableList value={list} onChange={setList} />;
};

export default Demo;
