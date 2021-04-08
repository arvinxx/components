import { JourneyMapData } from '@arvinxu/journey-map';

type Steps = 'plan' | 'rent' | 'take' | 'play' | 'return';

export const data: JourneyMapData<Steps> = {
  stages: [
    {
      id: 'plan',
      name: '计划租车',
    },
    {
      id: 'rent',
      name: '租车',
    },
    {
      id: 'take',
      name: '提车',
    },
    {
      id: 'play',
      name: '游玩',
    },
    {
      id: 'return',
      name: '还车',
    },
  ],
  actions: {
    plan: [
      { name: '找租车平台', emotion: -1 },
      { name: '对比不同平台', emotion: -2 },
      { name: '确定平台', emotion: 1 },
    ],
    rent: [
      { name: '选择租车日期', emotion: -1 },
      { name: '与同伴讨论车型', emotion: -1 },
      { name: '选择租车类型', emotion: 0 },
      { name: '支付费用', emotion: 1 },
    ],
    take: [
      { name: '打车去提车点', emotion: 2 },
      { name: '确认提车时间和地点', emotion: 2 },
      { name: '确认车况', emotion: 2 },
      { name: '确认还车注意事项', emotion: 1 },
      { name: '取车离开', emotion: 2 },
    ],
    play: [
      { name: '返回接同伴', emotion: 2 },
      { name: '开车游玩一天', emotion: 0 },
      { name: '车出了问题', emotion: -2 },
      { name: '打电话给客服', emotion: -1 },
      { name: '处理车况', emotion: 2 },
    ],
    return: [
      { name: '加油站加油', emotion: -1 },
      { name: '确认使用车况', emotion: -1 },
      { name: '打车返回', emotion: 0 },
      { name: '完成车辆交接', emotion: 1 },
    ],
  },
};
