import { Graph, Path } from '@antv/x6';

Graph.registerConnector(
  'curve',
  (sourcePoint, targetPoint) => {
    const path = new Path();
    path.appendSegment(Path.createSegment('M', sourcePoint));
    const distance = (targetPoint.x - sourcePoint.x) / 2;
    path.appendSegment(
      Path.createSegment(
        'C',
        sourcePoint.x + distance,
        sourcePoint.y,
        targetPoint.x - distance,
        targetPoint.y,
        targetPoint.x,
        targetPoint.y,
      ),
    );
    return path.serialize();
  },
  true,
);
