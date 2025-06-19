import { useCallback } from 'react';
import { useNotification } from '../Context/NotificationContext';

export const useNotificationActions = () => {
  const { addNotification } = useNotification();

  const notifyLike = useCallback((user, postType = 'post') => {
    addNotification({
      type: 'like',
      user,
      message: `liked your ${postType}`,
      time: 'now'
    });
  }, [addNotification]);

  const notifyComment = useCallback((user, comment = '') => {
    const message = comment 
      ? `commented on your post: "${comment}"`
      : 'commented on your post';
    
    addNotification({
      type: 'comment',
      user,
      message,
      time: 'now'
    });
  }, [addNotification]);

  const notifyFriendRequest = useCallback((user) => {
    addNotification({
      type: 'friend_request',
      user,
      message: 'sent you a friend request',
      time: 'now'
    });
  }, [addNotification]);

  const notifyEvent = useCallback((user, eventName) => {
    addNotification({
      type: 'event',
      user,
      message: `invited you to ${eventName}`,
      time: 'now'
    });
  }, [addNotification]);

  const notifyBirthday = useCallback((user) => {
    addNotification({
      type: 'birthday',
      user,
      message: 'has a birthday today',
      time: 'now'
    });
  }, [addNotification]);

  const notifyShare = useCallback((user, postType = 'post') => {
    addNotification({
      type: 'share',
      user,
      message: `shared your ${postType}`,
      time: 'now'
    });
  }, [addNotification]);

  const notifyMention = useCallback((user, context = 'a comment') => {
    addNotification({
      type: 'mention',
      user,
      message: `mentioned you in ${context}`,
      time: 'now'
    });
  }, [addNotification]);

  const notifyFollow = useCallback((user) => {
    addNotification({
      type: 'follow',
      user,
      message: 'started following you',
      time: 'now'
    });
  }, [addNotification]);

  const notifyCustom = useCallback((type, user, message) => {
    addNotification({
      type,
      user,
      message,
      time: 'now'
    });
  }, [addNotification]);

  return {
    notifyLike,
    notifyComment,
    notifyFriendRequest,
    notifyEvent,
    notifyBirthday,
    notifyShare,
    notifyMention,
    notifyFollow,
    notifyCustom
  };
}; 