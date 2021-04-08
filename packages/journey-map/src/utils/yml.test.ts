import { YMLToJSON } from './yml';

describe('YML 数据转换', () => {
  it('should 正常转换', () => {
    const yml = `
stages:
  - name: 计划租车
    actions:
      - name: 找租车平台
        emotion: -1
      - name: 对比不同平台
        emotion: -2
      - name: 确定平台
        emotion: 0

  - name: 租车
    actions:
      - name: 选择租车日期
        emotion: -1
      - name: 与同伴讨论车型
        emotion: -1
      - name: 选择租车类型
        emotion: 0
      - name: 支付费用
        emotion: 1

  - name: 提车
    actions:
      - name: 打车去提车点
        emotion: 2
      - name: 确认提车时间和地点
        emotion: 2
      - name: 确认车况
        emotion: 1
      - name: 确认还车注意事项
        emotion: 1
      - name: 取车离开
        emotion: 2

  - name: 游玩
    actions:
      - name: 返回接同伴
        emotion: 2
      - name: 开车游玩一天
        emotion: 0
      - name: 车出了问题
        emotion: -2
      - name: 打电话给客服
        emotion: -1
      - name: 处理车况
        emotion: 0

  - name: 还车
    actions:
      - name: 加油站加油
        emotion: -1
      - name: 确认使用车况
        emotion: 0
      - name: 完成车辆交接
        emotion: 1
      - name: 打车返回
        emotion: 0
`;

    expect(YMLToJSON(yml)).toEqual({
      actions: {
        计划租车: [
          {
            emotion: -1,
            name: '找租车平台',
          },
          {
            emotion: -2,
            name: '对比不同平台',
          },
          {
            emotion: 0,
            name: '确定平台',
          },
        ],
        游玩: [
          {
            emotion: 2,
            name: '返回接同伴',
          },
          {
            emotion: 0,
            name: '开车游玩一天',
          },
          {
            emotion: -2,
            name: '车出了问题',
          },
          {
            emotion: -1,
            name: '打电话给客服',
          },
          {
            emotion: 0,
            name: '处理车况',
          },
        ],
        租车: [
          {
            emotion: -1,
            name: '选择租车日期',
          },
          {
            emotion: -1,
            name: '与同伴讨论车型',
          },
          {
            emotion: 0,
            name: '选择租车类型',
          },
          {
            emotion: 1,
            name: '支付费用',
          },
        ],
        还车: [
          {
            emotion: -1,
            name: '加油站加油',
          },
          {
            emotion: 0,
            name: '确认使用车况',
          },
          {
            emotion: 1,
            name: '完成车辆交接',
          },
          {
            emotion: 0,
            name: '打车返回',
          },
        ],
        提车: [
          {
            emotion: 2,
            name: '打车去提车点',
          },
          {
            emotion: 2,
            name: '确认提车时间和地点',
          },
          {
            emotion: 1,
            name: '确认车况',
          },
          {
            emotion: 1,
            name: '确认还车注意事项',
          },
          {
            emotion: 2,
            name: '取车离开',
          },
        ],
      },
      stages: [
        {
          id: '计划租车',
          name: '计划租车',
        },
        {
          id: '租车',
          name: '租车',
        },
        {
          id: '提车',
          name: '提车',
        },
        {
          id: '游玩',
          name: '游玩',
        },
        {
          id: '还车',
          name: '还车',
        },
      ],
    });
  });
});
