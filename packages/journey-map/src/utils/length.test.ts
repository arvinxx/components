import { calcStageLength } from './length';

describe('calcStageLength', () => {
  it('前后符合目标值', () => {
    expect(
      calcStageLength({
        totalCount: 21,
        actionCount: 3,
        stageCount: 5,
        index: 0,
      }).width,
    ).toEqual(11.25);
  });
  it('中间符合目标值', () => {
    expect(
      calcStageLength({
        totalCount: 21,
        actionCount: 4,
        stageCount: 5,
        index: 1,
      }).width,
    ).toEqual(17.5);
  });
});
