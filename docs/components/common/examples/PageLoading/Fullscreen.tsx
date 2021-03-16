import React, { useState } from 'react';
import { Button, Card } from 'antd';

import PageLoading from '@arvinxu/page-loading';

const FullScreenLoading = () => {
  const [fullscreen, setFullScreen] = useState(false);

  return (
    <div>
      {fullscreen ? (
        <Button style={{ zIndex: 100000 }} onClick={() => setFullScreen(false)}>
          取消全屏
        </Button>
      ) : (
        <Button onClick={() => setFullScreen(true)}>全屏</Button>
      )}

      <div style={{ height: 300, marginTop: 16 }}>
        <PageLoading fullscreen={fullscreen} id={'fullscreen'}>
          <Card>内容卡片</Card>
        </PageLoading>
      </div>
    </div>
  );
};

export default FullScreenLoading;
