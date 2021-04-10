export const data = `
# 标题
title: YML 字符串租车地图

config:
  # 目前支持 stage、emotion、action、thought painPoint 五层
  # 可自行排序（上下切换 section 的位置即可）
  arrange:
    - stage
    - action
    - emotion
    - thought
    - painPoint

  height:
    emotion: 150

# 阶段步骤
stages:
  - name: 计划租车
    # 去掉下方的 # ，即可为阶段和用户行为赋予自定义的背景颜色
    # color: '#d0f0fd'
    actions:
      - name: 找租车平台
        emotion: -1
      - name: 对比不同平台
        emotion: -2
        thoughts:
          - 对比来对比去好麻烦
        painPoints:
          - 能否有一个一键对比的能力

      - name: 确定平台
        emotion: 0
        thoughts:
          - 感觉一嗨好像还不错
          - 神州好贵

  - name: 租车
    # color 除了使用 hex 色值 也支持 rgb 和 hsl 的写法
    # color: 'rgb(209,247,196)'
    actions:
      - name: 选择租车日期
        emotion: -1
        thoughts:
          - 为什么没有价格日历呢
      - name: 与同伴讨论车型
        emotion: -1
        thoughts:
          - 感觉分享上不太方便
      - name: 选择租车类型
        emotion: 0
      - name: 支付费用
        emotion: 1

  - name: 提车
    # color: 'hsl(220,100%,91%)'
    actions:
      - name: 打车去提车点
        emotion: 2
      - name: 确认提车时间和地点
        emotion: 1
      - name: 确认车况
        emotion: 1
      - name: 确认还车注意事项
        emotion: 1
        thoughts:
          - 说了不少温馨提示还挺不错的
      - name: 取车离开
        emotion: 2

  - name: 游玩
    # color: '#ffdaf6'
    actions:
      - name: 返回接同伴
        emotion: 2
      - name: 开车游玩一天
        emotion: 0
      - name: 车出了问题
        emotion: -2
        thoughts:
          - 完了荒山野岭回不去了
      - name: 打电话给客服
        emotion: 1
        thoughts:
          - 客服回复还挺及时 态度挺好

      - name: 处理车况
        emotion: 2
        thoughts:
          - 没想到救援来的很及时
          - 救援很专业

  - name: 还车
    # color: '#ede2fe'
    actions:
      - name: 加油站加油
        emotion: -1
        thoughts:
          - 加油站人真多
      - name: 确认使用车况
        emotion: 0
      - name: 完成车辆交接
        emotion: 1
        thoughts:
          - 工作人员还挺专业的
      - name: 打车返回
        emotion: 0
`;
