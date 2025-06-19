import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useNotification } from '../../../Context/NotificationContext';

const Notification = ({ onClose }) => {
  const containerRef = useRef(null);
  const { notifications, markAsRead, markAllAsRead, deleteNotification } = useNotification();

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      className="w-96 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-96 overflow-hidden"
      ref={containerRef}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
            Notifications
          </h3>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-purple-600 hover:text-purple-800 text-sm font-semibold transition-colors px-3 py-1 rounded-full hover:bg-purple-50"
              >
                Mark all as read
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Notification List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg font-medium">No notifications yet</p>
            <p className="text-sm text-gray-400 mt-1">When you get notifications, they'll show up here</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b hover:bg-gray-50 cursor-pointer group ${
                !notification.isRead ? 'bg-purple-50 border-l-4 border-purple-400' : ''
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <p className="text-sm text-gray-800">
                <span className="font-bold">{notification.user}</span> {notification.message}
              </p>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>{notification.time} ago</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(notification.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition"
                >
                  <X className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;
