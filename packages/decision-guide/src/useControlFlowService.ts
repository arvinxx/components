import { useState } from 'react';
import produce from 'immer';
import { createContextStore, sleep } from '@arvinxu/utils';

export const optionLibraries = {
  // 第一阶段
  fixed: 'Fixed Installation',
  stage: 'Stage Product',
  // 第二阶段
  '3-10': '3-10feet',
  '10-13': '10-13feet',
  '13-20': '13-20feet',
  // 第三阶段
  front: 'Front',
  rear: 'Rear',

  hang: 'Hang',
  ground: 'Ground',
};

type OptionKey = keyof typeof optionLibraries;

interface Flow {
  title: string;
  options: OptionKey[] | Record<any, OptionKey[]>;
}

export const flows: Flow[] = [
  {
    title: 'Pick your LED needs',
    options: ['fixed', 'stage'],
  },
  {
    title: 'Choose your view distance',
    options: ['3-10', '10-13', '13-20'],
  },
  {
    title: 'Choose your maintenance method',
    options: {
      fixed: ['front', 'rear'],
      stage: ['hang', 'ground'],
    },
  },
];

const list: [string[], any][] = [
  [['fixed', '3-10', 'front'], { product: 'Athos', params: '0.8-0.9mm' }],
  [['fixed', '3-10', 'rear'], { product: 'Porthos', params: '0.8-0.9mm' }],
  [['fixed', '10-13', 'front'], { product: 'Athos', params: '1.2mm' }],
  [['fixed', '10-13', 'rear'], { product: 'Porthos', params: '1.2mm' }],
  [['fixed', '13-20', 'front'], { product: 'Athos', params: '1.5-1.9mm' }],
  [['fixed', '13-20', 'rear'], { product: 'Porthos', params: '1.5-1.9mm' }],
  [
    ['stage', '3-10', 'hang'],
    { product: 'Porthos', params: '0.8-0.9mm + Hanging bar' },
  ],
  [
    ['stage', '3-10', 'ground'],
    { product: 'Porthos', params: '0.8-0.9mm + Ground support' },
  ],
  [
    ['stage', '10-13', 'hang'],
    { product: 'Porthos', params: '1.2mm + Hanging bar' },
  ],
  [
    ['stage', '10-13', 'ground'],
    { product: 'Porthos', params: '1.2mm + Ground support' },
  ],
  [
    ['stage', '13-20', 'hang'],
    { product: 'Porthos', params: '1.5-1.9mm + Hanging bar' },
  ],
  [
    ['stage', '13-20', 'ground'],
    { product: 'Porthos', params: '1.5-1.9mm + Ground support' },
  ],
];

export const productMap = new Map(
  list.map((item) => {
    const [key, value] = item;

    // 还是用字符串做 key 了...
    return [key.join('+'), value];
  }),
);

export const productImageMap: Record<string, any> = {
  Athos: '',
  Porthos: ' porthos',
};

export const useControlFlowService = () => {
  const [step, setStep] = useState(0);
  const [started, setStart] = useState(false);
  const [isFinish, setFinish] = useState(false);

  const [isProductPage, setShowProduct] = useState(false);

  const [answers, setFlow] = useState<string[]>(
    [],
    // ['stage', '13-20', 'hang'], // 测试用
  );

  const isEnd = flows.length - 1 === step;
  const isBegin = step === 0;

  const nextStep = () => {
    if (isEnd) return;
    setStep(step + 1);
  };

  const setActiveItem = async (id: string) => {
    setFlow((current) => {
      return produce(current, (draft) => {
        draft[step] = id;
      });
    });
    await sleep(700);

    if (isEnd) setFinish(true);
    else nextStep();
  };

  const isSelected = (id: string) => answers[step] === id;

  const prevStep = () => {
    if (isBegin) return;
    setStep(step - 1);
  };

  /**
   * 获取选项
   */
  const getOptions = () => {
    const { options } = flows[step];
    let items;

    if (options instanceof Array) {
      items = options;
    } else {
      items = options[answers[0]] || [];
    }

    return items.map((id) => ({ id, text: optionLibraries[id] }));
  };

  const getProduct = () => {
    const product = productMap.get(answers.join('+'));
    if (!product) return;

    return { ...product, image: productImageMap[product.product] };
  };

  const reset = () => {
    setFinish(false);
    setShowProduct(false);
    setFlow([]);
    setStep(0);
  };

  return {
    questionFlow: flows,
    step,
    answers,
    started,
    isEnd,
    isBegin,
    isFinish,
    isProductPage,
    showProduct: () => {
      setShowProduct(true);
    },
    nextStep,
    prevStep,
    start: () => {
      setStart(true);
    },
    isSelected,
    setActiveItem,
    getOptions,
    getProduct,
    reset,
  };
};

export const ControlFlowService = createContextStore(useControlFlowService);
