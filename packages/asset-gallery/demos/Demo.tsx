/**
 * compact: true
 */
import AssetGallery from '@arvinxu/asset-gallery';

import { useTheme } from 'antd-style';
import { images } from './data';

const Demo = () => {
  const token = useTheme();
  return (
    <AssetGallery
      style={{
        background: token.colorBgLayout,
        padding: 24,
      }}
      data={images}
      darkBackground={'black'}
      coverPadding={24}
    />
  );
};

export default Demo;
