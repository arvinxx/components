import { useCallback, useRef, useState } from 'react';

export const useHover = () => {
  const [value, setValue] = useState(false);

  // Wrap in useCallback so we can use in dependencies below
  const handleMouseOver = useCallback(() => {
    console.log('ddd');
    setValue(true);
  }, []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners.
  const ref = useRef<HTMLElement[]>([]);

  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = useCallback(
    (node: HTMLElement) => {
      console.log(ref.current);

      if (ref.current) {
        ref.current.forEach((elm) => {
          elm.removeEventListener('mouseover', handleMouseOver);
          elm.removeEventListener('mouseout', handleMouseOut);
        });
      }

      ref.current.push(node);

      if (ref.current) {
        ref.current.forEach((elm) => {
          elm.addEventListener('mouseover', handleMouseOver);
          elm.addEventListener('mouseleave', handleMouseOut);
        });
      }
    },
    [handleMouseOver, handleMouseOut],
  );

  return { hoverRef: callbackRef, isHovered: value };
};
