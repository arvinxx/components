import { JournalMapData } from '@arvinxu/journal-map';

type Steps = 'plan' | 'rent' | 'take' | 'play' | 'return';

export const customColor: JournalMapData<Steps> = {
  steps: [
    {
      id: 'plan',
      name: '计划租车',
      color: '#d0f0fd',
    },
    {
      id: 'rent',
      name: '租车',
      color: '#d1f7c4',
    },
    {
      id: 'take',
      name: '提车',
      color: '#cfdfff',
    },
    {
      id: 'play',
      name: '游玩',
      color: '#ffdaf6',
    },
    {
      id: 'return',
      name: '还车',
      color: '#ede2fe',
    },
  ],
  actions: {
    plan: [
      { title: '找租车平台', emotion: -1 },
      { title: '对比不同平台', emotion: -2 },
      { title: '确定平台', emotion: 1 },
    ],
    rent: [
      { title: '选择租车日期', emotion: -1 },
      { title: '与同伴讨论车型', emotion: -1 },
      { title: '选择租车类型', emotion: 0 },
      { title: '支付费用', emotion: 1 },
    ],
    take: [
      { title: '打车去提车点', emotion: 2 },
      { title: '确认提车时间和地点', emotion: 2 },
      { title: '确认车况', emotion: 2 },
      { title: '确认还车注意事项', emotion: 1 },
      { title: '取车离开', emotion: 2 },
    ],
    play: [
      { title: '返回接同伴', emotion: 2 },
      { title: '开车游玩一天', emotion: 0 },
      { title: '车出了问题', emotion: -2 },
      { title: '打电话给客服', emotion: -1 },
      { title: '处理车况', emotion: 2 },
    ],
    return: [
      { title: '加油站加油', emotion: -1 },
      { title: '确认使用车况', emotion: -1 },
      { title: '打车返回', emotion: 0 },
      { title: '完成车辆交接', emotion: 1 },
    ],
  },
};
