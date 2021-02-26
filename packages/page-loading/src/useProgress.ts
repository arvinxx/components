import { useEffect } from 'react';
import NProgress from 'multi-nprogress';
import { insertCss } from 'insert-css';

const progressColor = (color) => `
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

export const useProgress = (container, color, enable = true) => {
  // 控制 Progress 显示
  useEffect(() => {
    // 如果传入 progress props 且为 false
    if (typeof enable === 'boolean' && !enable) return;

    const np = NProgress();

    np.configure({
      showSpinner: false,
      parent: `#${container}`,
    });

    np.start();
    np.inc();

    return () => {
      np.done();
    };
  }, [container, enable]);

  // 控制 progress 颜色
  useEffect(() => {
    insertCss(progressColor(color));
  }, [color]);
};
