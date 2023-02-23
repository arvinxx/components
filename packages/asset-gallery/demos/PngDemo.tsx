/**
 * compact: true
 */
import AssetGallery from '@arvinxu/asset-gallery';

import { useTheme } from 'antd-style';
import { yml } from './png';

const PngDemo = () => {
  const token = useTheme();
  return (
    <div
      style={{
        background: token.colorBgLayout,
        padding: 24,
      }}
    >
      <AssetGallery data={yml} darkBackground={'black'} />
    </div>
  );
};

export default PngDemo;
