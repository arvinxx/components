import React from 'react';
import type { FC } from 'react';
import ReactFlow, {
  MiniMap,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import ErrorBoundary from './components/ErrorBoundary';
import type { MindflowProps } from './types';

import { layoutNodes } from './utils';

import './style.less';
import { FLOW_NODE_TYPES } from './config';
import { useFlowDataSource } from './hooks/useFlowDataSource';

const Mindflow: FC<MindflowProps> = ({
  data,
  width,
  height,
  onEdgesChange: outEdgesChange,
  onNodesChange: outNodesChange,
}) => {
  const withTypeData = useFlowDataSource(data);

  const [nodes, , onNodesChange] = useNodesState(
    layoutNodes(withTypeData.nodes, withTypeData.edges),
  );
  const [edges, , onEdgesChange] = useEdgesState(withTypeData.edges);

  return (
    <ErrorBoundary>
      <div
        className="avx-mindflow"
        style={{ width: width || '100%', height: height || 400, flex: 1 }}
      >
        <ReactFlow
          nodeTypes={FLOW_NODE_TYPES}
          panOnScroll
          nodes={nodes}
          onNodesChange={(n) => {
            console.log(n);
            onNodesChange(n);

            if (outNodesChange) {
              outNodesChange?.(n);
            }
          }}
          edges={edges}
          onEdgesChange={(e) => {
            console.log(e);
            onEdgesChange(e);

            if (outEdgesChange) {
              outEdgesChange?.(e);
            }
          }}
        >
          <MiniMap />
          <Background
            gap={16}
            size={1}
            color={'hsl(0,0%,92%)'}
            style={{ background: 'hsl(0,0%,98%)' }}
          />
        </ReactFlow>
      </div>
    </ErrorBoundary>
  );
};

export default Mindflow;
