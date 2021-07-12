import React, { FC, useContext, useRef } from 'react';
import cls from 'classnames';
import { animated, useSpring } from 'react-spring';
import { useSize } from 'ahooks';

import { ControlFlowService } from './useControlFlowService';
import styles from './Option.less';
import { Space } from 'antd';

interface ActionProps {
  id: string;
  text: string;
}

const Option: FC<ActionProps> = ({ id, text }) => {
  const { setActiveItem, isSelected } = useContext(ControlFlowService);

  const selected = isSelected(id);

  const ref = useRef(null);
  const { width } = useSize(ref);

  console.log(width);
  const props = useSpring({ width: selected ? width || 0 : 0 });

  return (
    <div ref={ref}>
      <div
        className={cls(styles.container, selected ? styles.itemActive : '')}
        onClick={() => {
          setActiveItem(id);
        }}
      >
        <Space className={styles.item}>
          <div
            className={cls(styles.checkbox, selected ? styles.checked : '')}
          />
          <div>{text}</div>
        </Space>

        <animated.div className={styles.fill} style={props} />
      </div>
    </div>
  );
};
export default Option;
