/**
 * compact: true
 */
import AssetGallery from '@arvinxu/asset-gallery';

import { useTheme } from 'antd-style';
import { sketch } from './sketch';

const SketchDemo = () => {
  const token = useTheme();
  return (
    <div
      style={{
        background: token.colorBgLayout,
        padding: 24,
      }}
    >
      <AssetGallery
        logo={'https://gw.alipayobjects.com/zos/antfincdn/mj85r7V5aX/konggu.svg'}
        data={sketch}
        darkBackground={'black'}
        layout={'grid'}
        columns={2}
      />
    </div>
  );
};

export default SketchDemo;
