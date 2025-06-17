// FriendItem.js
import React from 'react';
import Avatar from '../Avatar/Avatar'; // Import Avatar component

const FriendItem = ({ friend }) => (
  <li className="flex items-center gap-3 p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 cursor-pointer group">
    <Avatar initials={friend.initials} status={friend.status} />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-200 truncate group-hover:text-white transition-colors">
        {friend.name}
      </p>
    </div>
  </li>
);

export default FriendItem;
