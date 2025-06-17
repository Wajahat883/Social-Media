// Avatar.js
import React from 'react';
import StatusIndicator from '../Statusindicator/Statusindicato';

const Avatar = ({ initials = '', status, size = 'w-8 h-8' }) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500',
    'bg-yellow-500', 'bg-indigo-500', 'bg-red-500', 'bg-teal-500'
  ];

  const char = initials?.charAt?.(0) || 'U';
  const colorIndex = char.charCodeAt(0) % colors.length;

  return (
    <div className="relative">
      <div className={`${size} rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-semibold text-sm`}>
        {initials || 'U'}
      </div>
      {status && (
        <div className="absolute -bottom-1 -right-1">
          <StatusIndicator status={status} />
        </div>
      )}
    </div>
  );
};

export default Avatar;

