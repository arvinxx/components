import type { FC } from 'react';

import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import ProCard from '@ant-design/pro-card';

import {
  useControlFlowService,
  ControlFlowService,
} from './useControlFlowService';

import Option from './Option';
import Pagination from './Pagination';
import Product from './Product';

import styles from './index.less';
import './index.less';

export interface DecisionGuideProps {}

const DecisionGuide: FC<DecisionGuideProps> = () => {
  const controlFlowService = useControlFlowService();
  const {
    started,
    step,
    start,
    questionFlow,
    isProductPage,
    getOptions,
    getProduct,
  } = controlFlowService;

  const size = 56;

  const Start = () => (
    <ProCard title={'决策引导'} onClick={start}>
      <Space className="avx-guide-item">
        <div>开始</div>
        <RightOutlined width={size} height={size} />
      </Space>
    </ProCard>
  );

  const ProductBlock = () => {
    const item = getProduct();
    return !item ? null : (
      <Product text={`${item.product} ${item.params}`} image={item.image} />
    );
  };

  return (
    <ControlFlowService.Provider value={controlFlowService}>
      <div>
        {
          // eslint-disable-next-line no-nested-ternary
          isProductPage ? (
            <ProductBlock />
          ) : !started ? (
            <Start />
          ) : (
            <>
              <div>{questionFlow[step].title}</div>
              <div className={styles.selection}>
                {getOptions().map((action) => (
                  <Option key={action.id} text={action.text} id={action.id} />
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <Pagination />
              </div>
            </>
          )
        }
      </div>
    </ControlFlowService.Provider>
  );
};
export default DecisionGuide;
