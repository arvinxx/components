import { useCallback, useState } from 'react';

export const useActiveItem = () => {
  const [activeId, setActiveId] = useState<string>(null);

  const activateItem = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const deactivateItem = useCallback(() => {
    setActiveId(null);
  }, []);

  const isDragging = activeId !== null;

  return { isDragging, activeId, activateItem, deactivateItem };
};
