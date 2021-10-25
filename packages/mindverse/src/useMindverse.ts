import {
  addEdge as _addEdge,
  Elements,
  Node,
  removeElements as _removeElements,
  useZoomPanHelper,
  XYPosition,
  useStoreState,
  useStoreActions,
} from 'react-flow-renderer';
import immer from 'immer';
import useMergeValue from 'use-merge-value';
import { createContextStore } from '@arvinxu/utils';
import { randomId } from '@arvinxu/mindverse/utils';

export const useMindverse = (defaultElements: Elements) => {
  const { project } = useZoomPanHelper();
  const [elements, setElements] = useMergeValue([], {
    defaultValue: defaultElements,
  });
  const selectedElements = useStoreState((state) => state.selectedElements);
  const setSelectedElements = useStoreActions(
    (acts) => acts.setSelectedElements,
  );

  const fitView = (reactFlowInstance) => {
    console.log('flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView();
  };

  const removeElements = (elementsToRemove: Elements) => {
    const els = _removeElements(elementsToRemove, elements);
    setElements(els);
  };

  const addEdge = (params) => {
    const els = _addEdge(params, elements);
    setElements(els);
  };

  /**
   * 添加节点
   * @param node
   */
  const addNode = (node: Partial<Node>) => {
    const { id = randomId(), position, ...res } = node;
    const els = immer((drafts) => {
      drafts.push({ id, ...res, position: project(position) });
    }, elements);

    // @ts-ignore
    setElements(els);
  };

  const addTextNode = (text: string, position: XYPosition) => {
    addNode({ type: 'text', data: { text }, position });
  };

  const selectElement = (elementsOrElementId?: Elements | string) => {
    if (!elementsOrElementId) {
      setSelectedElements([]);
    } else if (typeof elementsOrElementId === 'string') {
      console.log('是id');
      //TODO SelectElementById
    } else {
      setSelectedElements(elementsOrElementId);
    }
  };

  return {
    elements,
    selectedElements,
    selectElement,
    addNode,
    addEdge,
    removeElements,
    fitView,
    addTextNode,
  };
};

export const MindverseStore = createContextStore(useMindverse);
