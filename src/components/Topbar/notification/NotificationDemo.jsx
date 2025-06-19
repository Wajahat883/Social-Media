import React from 'react';
import { useNotificationActions } from '../../../Hooks/UseNotificationActions';

const NotificationDemo = () => {
  const {
    notifyLike,
    notifyComment,
    notifyFriendRequest,
    notifyEvent,
    notifyBirthday,
    notifyShare,
    notifyMention,
    notifyFollow
  } = useNotificationActions();

  const handleTestNotification = (type) => {
    const users = [
      'Sarah Johnson', 'Mike Chen', 'Emma Wilson', 'Alex Rodriguez', 'Lisa Thompson',
      'David Kim', 'Maria Garcia', 'James Brown', 'Anna Smith', 'Robert Davis'
    ];
    const randomUser = users[Math.floor(Math.random() * users.length)];

    switch (type) {
      case 'like':
        notifyLike(randomUser, 'photo');
        break;
      case 'comment':
        notifyComment(randomUser, 'Amazing shot! Where was this taken?');
        break;
      case 'friend_request':
        notifyFriendRequest(randomUser);
        break;
      case 'event':
        notifyEvent(randomUser, 'JavaScript Workshop');
        break;
      case 'birthday':
        notifyBirthday(randomUser);
        break;
      case 'share':
        notifyShare(randomUser, 'post');
        break;
      case 'mention':
        notifyMention(randomUser, 'a post');
        break;
      case 'follow':
        notifyFollow(randomUser);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Test Notifications</h3>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => handleTestNotification('like')}
          className="px-3 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors text-sm"
        >
          Test Like
        </button>
        <button
          onClick={() => handleTestNotification('comment')}
          className="px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm"
        >
          Test Comment
        </button>
        <button
          onClick={() => handleTestNotification('friend_request')}
          className="px-3 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-sm"
        >
          Test Friend Request
        </button>
        <button
          onClick={() => handleTestNotification('event')}
          className="px-3 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors text-sm"
        >
          Test Event
        </button>
        <button
          onClick={() => handleTestNotification('birthday')}
          className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition-colors text-sm"
        >
          Test Birthday
        </button>
        <button
          onClick={() => handleTestNotification('share')}
          className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors text-sm"
        >
          Test Share
        </button>
        <button
          onClick={() => handleTestNotification('mention')}
          className="px-3 py-2 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition-colors text-sm"
        >
          Test Mention
        </button>
        <button
          onClick={() => handleTestNotification('follow')}
          className="px-3 py-2 bg-pink-100 text-pink-700 rounded-md hover:bg-pink-200 transition-colors text-sm"
        >
          Test Follow
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Click any button to test different notification types. Notifications will appear in real-time!
      </p>
    </div>
  );
};

export default NotificationDemo; 