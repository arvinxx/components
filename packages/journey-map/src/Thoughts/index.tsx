import type { FC } from 'react';
import React, { useContext } from 'react';

import { ListSection } from '../components';
import { JourneyMapStore } from '../useJourneyMap';

const Thoughts: FC = () => {
  const { config } = useContext(JourneyMapStore);
  const height = config?.height?.thought;
  return <ListSection title={'想法'} sectionKey={'thoughts'} height={height} />;
};

export default Thoughts;
