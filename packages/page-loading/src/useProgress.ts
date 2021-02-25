import { useEffect } from 'react';
import NProgress from 'nprogress';

export const useProgress = (container, enable = true) => {
  // 控制 Progress 显示
  useEffect(() => {
    // 如果传入 progress props 且为 false
    if (typeof enable === 'boolean' && !enable) return;

    NProgress.configure({
      showSpinner: false,
      parent: `#${container}`,
    });

    NProgress.start();
    NProgress.inc();

    return () => {
      NProgress.done();
    };
  }, [container, enable]);
};



export const progressColor = (color) => `
#nprogress .bar {
  background: ${color};
}

#nprogress .peg {
  box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
}

#nprogress .spinner-icon {
  border-top-color: ${color};
  border-left-color: ${color};
}`;
