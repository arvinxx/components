import type { FC } from 'react';
import React, { useContext } from 'react';

import { ListSection } from '../components';
import { JourneyMapStore } from '../useJourneyMap';

const PainPoints: FC = () => {
  const { config } = useContext(JourneyMapStore);
  const height = config?.height?.painPoint;

  return (
    <ListSection title={'痛点'} sectionKey={'painPoints'} height={height} />
  );
};

export default PainPoints;
