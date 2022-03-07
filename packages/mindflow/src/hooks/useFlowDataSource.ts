import { preprocessData } from '../utils';
import { useCollapseList } from '../store/globalStore';

export const useFlowDataSource = (data) => {
  const collapseList = useCollapseList((state) => state.list);

  return preprocessData(data, collapseList);
};
