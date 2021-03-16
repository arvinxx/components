import React, { useState } from 'react';
import { Button, Card } from 'antd';

import PageLoading from '@arvinxu/page-loading';

const { Group } = Button;
const Loading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Group>
        <Button onClick={() => setLoading(true)}>加载中</Button>
        <Button onClick={() => setLoading(false)}>加载完成</Button>
      </Group>
      <span style={{ marginLeft: 8 }}>
        状态: {loading ? '加载中' : '加载完成'}
      </span>
      <div style={{ height: 300, marginTop: 16 }}>
        <PageLoading loading={loading} id={'loading'}>
          <Card>内容卡片</Card>
        </PageLoading>
      </div>
    </div>
  );
};

export default Loading;
