import React from 'react';
import { Alert, Typography } from 'antd';

import './ErrorFallback.less';

const { Title, Text } = Typography;
const ErrorFallback = ({ error }) => (
  <Alert
    type={'error'}
    message={
      <div>
        <Title level={5} className="avx-journey-error-title">
          渲染出错啦 😮
        </Title>
        <Text className="avx-journey-error-desc">
          请检查输入语法是否存在问题，错误详情如下:
        </Text>
        <pre>
          <Text ellipsis copyable className="avx-journey-error-detail">
            {error.message}
          </Text>
        </pre>
        <Text className="avx-journey-error-desc">
          若检查后无语法错误，请
          <a
            href="https://github.com/arvinxx/components/issues/new"
            style={{ margin: '0 4px' }}
          >
            点击这里
          </a>
          提交 bug
        </Text>
      </div>
    }
  />
);
export default ErrorFallback;
