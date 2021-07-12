import React, { FC, useContext } from 'react';
import cls from 'classnames';

import { RightOutlined, LeftOutlined, CheckOutlined } from '@ant-design/icons';

import { ControlFlowService } from './useControlFlowService';

import styles from './Pagination.less';

const Pagination: FC = () => {
  const {
    prevStep,
    nextStep,
    questionFlow,
    step,
    isBegin,
    isEnd,
    answers,
    showProduct,
  } = useContext(ControlFlowService);

  const canClickNext = !!answers[step];

  const size = 56;
  const bound = {
    width: size,
    height: size,
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={prevStep}>
        <LeftOutlined
          className={!isBegin ? styles.activeIcon : null}
          {...bound}
        />
      </div>

      {questionFlow.map((_, index) => (
        <div
          key={index}
          className={cls(styles.step, index <= step ? styles.active : '')}
        />
      ))}
      <div className={styles.arrow}>
        {isEnd ? (
          <CheckOutlined
            className={canClickNext ? styles.activeIcon : null}
            onClick={() => {
              if (!canClickNext) return;
              showProduct();
            }}
            {...bound}
          />
        ) : (
          <RightOutlined
            onClick={() => {
              if (!canClickNext) return;

              nextStep();
            }}
            className={!isBegin ? styles.activeIcon : null}
            {...bound}
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;
