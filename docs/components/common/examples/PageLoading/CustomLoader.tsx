import React from 'react';

import PageLoading from '@arvinxu/page-loading';

const Loading = () => {
  return (
    <div style={{ height: 300 }}>
      <PageLoading loader={<div>loading...</div>} id={'custom'} />
    </div>
  );
};

export default Loading;
