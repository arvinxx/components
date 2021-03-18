import { graphOpts } from './graphOpts';

describe('graphOpts', () => {
  it('返回正常值', () => {
    const ctn = document.createElement('div');
    const minimap = document.createElement('div');
    expect(graphOpts(ctn, minimap)).toMatchSnapshot();
  });
});
