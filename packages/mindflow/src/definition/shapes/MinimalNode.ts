/* istanbul ignore file */
import { NodeView } from '@antv/x6';

export class MinimalNode extends NodeView {
  protected renderMarkup() {
    return this.renderJSONMarkup({
      tagName: 'rect',
      selector: 'body',
    });
  }

  update() {
    super.update({
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: '#1890ff',
      },
    });
  }
}
