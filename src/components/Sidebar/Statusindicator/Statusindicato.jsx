// StatusIndicator.js
import React from 'react';

const StatusIndicator = ({ status }) => {
  const statusColors = {
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    offline: 'bg-gray-400'
  };
  
  return (
    <div className={`w-3 h-3 rounded-full ${statusColors[status]} border-2 border-gray-800`}></div>
  );
};

export default StatusIndicator;
