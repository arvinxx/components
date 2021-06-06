import { useState } from 'react';

/**
 * DarkMode 需要的状态
 */
export const useDarkTheme = () => {
  const [theme] = useState<'light' | 'dark'>('light');

  return { theme };
};
