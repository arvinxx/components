import React from 'react';
import type { FC } from 'react';
import ReactFlow, {
  ReactFlowProps,
  MiniMap,
  Background,
  Controls,
  ReactFlowProvider,
} from 'react-flow-renderer';

import { MindverseStore, useMindverse } from './useMindverse';
import nodeTypes from './nodes';

export { Elements, ArrowHeadType } from 'react-flow-renderer';

export interface MindverseProps {
  elements?: ReactFlowProps['elements'];
  /**
   * 高度
   */
  height?: number;
}

const Mindverse: FC<MindverseProps> = ({ elements, height = 300 }) => {
  const appState = useMindverse(elements);
  const {
    elements: eles,
    selectedElements,
    selectElement,
    addEdge,
    addNode,
    removeElements,
    fitView,
  } = appState;

  return (
    <div style={{ height }}>
      <MindverseStore.Provider value={appState}>
        <ReactFlow
          elements={eles}
          onSelectionChange={(element) => {
            selectElement(element);
          }}
          onElementsRemove={removeElements}
          onConnect={addEdge}
          onLoad={fitView}
          onDoubleClick={(e) => {
            if (selectedElements.length !== 0) return;

            addNode({
              data: {
                label: '新的节点',
              },
              position: {
                x: e.clientX,
                y: e.clientY,
              },
            });
          }}
          zoomOnDoubleClick={false}
          nodeTypes={nodeTypes}
          style={{ background: '#f5f5f5' }}
        >
          <MiniMap />
          <Controls />

          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </MindverseStore.Provider>
    </div>
  );
};

export default (props: MindverseProps) => (
  <ReactFlowProvider>
    <Mindverse {...props} />
  </ReactFlowProvider>
);
