import { useEffect, useState } from 'react';

export const useTrafficLight = () => {
  const [hover, handleHover] = useState(false);

  const [isFocus, setIsFocus] = useState(true);

  const focus = () => {
    setIsFocus(true);
  };
  const blur = () => {
    setIsFocus(false);
  };

  const hoverOn = () => {
    handleHover(true);
  };
  const hoverOff = () => {
    handleHover(false);
  };

  useEffect(() => {
    window.addEventListener('focus', focus);
    window.addEventListener('blur', blur);

    return () => {
      window.removeEventListener('focus', focus);
      window.removeEventListener('blur', blur);
    };
  }, []);

  return { hover, isFocus, hoverOn, hoverOff };
};
