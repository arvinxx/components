import React, { FC, useContext } from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { ControlFlowService } from './useControlFlowService';

import styles from './Product.less';

interface ProductProps {
  text: string;
  image: string;
  url?: string;
}
const Product: FC<ProductProps> = ({ text, image, url }) => {
  const { reset } = useContext(ControlFlowService);

  return (
    <>
      <div className={styles.back}>
        <LeftOutlined
          onClick={() => {
            reset();
          }}
          width={32}
          height={32}
        />
      </div>
      <div>
        <div className={styles.title}>
          We recommend <span className={styles.params}>{text}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img className={styles.image} src={image} alt={text} />
          </div>
          <div className={styles.btnGroup}>
            <div>
              <a href={url} target={'_blank'}>
                <Button className={styles.button}>Learn More</Button>
              </a>
            </div>
            <div style={{ marginTop: 40 }}>
              <Button className={styles.button}>Get a Quote Today</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
