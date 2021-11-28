import React from 'react';
import TrafficLight from '@arvinxu/macos-traffic-light';

const Basic = () => {
  return (
    <div>
      <TrafficLight
        onClose={() => {
          alert('Pressed closed');
        }}
        onMinimize={() => {
          alert('Pressed minimize');
        }}
        onMaximize={() => {
          alert('Pressed maximize');
        }}
      />
    </div>
  );
};

export default Basic;
