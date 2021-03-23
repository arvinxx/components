import React from 'react';
import TrafficLight from '@arvinxu/macos-traffic-light';

const Basic = () => {
  return (
    <div>
      <TrafficLight
        close={() => {
          alert('Pressed closed');
        }}
        minimize={() => {
          alert('Pressed minimize');
        }}
        maximize={() => {
          alert('Pressed maximize');
        }}
      />
    </div>
  );
};

export default Basic;
