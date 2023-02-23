/**
 * compact: true
 */
import AssetGallery from '@arvinxu/asset-gallery';

import { useTheme } from 'antd-style';
import { yml } from './yml';

const YAMLDemo = () => {
  const token = useTheme();
  return (
    <AssetGallery
      data={yml}
      darkBackground={'black'}
      coverPadding={24}
      style={{
        background: token.colorBgLayout,
        padding: 24,
      }}
    />
  );
};

export default YAMLDemo;
