import { useState, useEffect, useCallback } from 'react';

export const useMessagesData = () => {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState({ unreadMessages: 0 });
  const [typingUsers, setTypingUsers] = useState({});

  useEffect(() => {
    loadConversations();
  }, []);

  // Real-time message updates
  useEffect(() => {
    const interval = setInterval(() => {
      checkForNewMessages();
      updateTypingStatus();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const loadConversations = async () => {
    try {
      setLoading(true);
      const data = await fetchConversations();
      setConversations(data);
      const unreadCount = data.reduce((sum, conv) => sum + conv.unreadCount, 0);
      setNotifications({ unreadMessages: unreadCount });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const loadMessages = useCallback(async (conversationId) => {
    try {
      if (!messages[conversationId]) {
        const messageData = await fetchMessages(conversationId);
        setMessages(prev => ({
          ...prev,
          [conversationId]: messageData
        }));
      }
      setActiveConversation(conversationId);
    } catch (err) {
      setError('Failed to load messages');
    }
  }, [messages]);

  const sendMessage = useCallback(async (conversationId, content, type = 'text') => {
    const tempMessage = {
      id: 'temp-' + Date.now(),
      senderId: 'currentUser',
      content,
      type,
      timestamp: new Date(),
      status: 'sending'
    };

    // Optimistic update
    setMessages(prev => ({
      ...prev,
      [conversationId]: [...(prev[conversationId] || []), tempMessage]
    }));

    try {
      const sentMessage = await sendMessageAPI(conversationId, content, type);
      setMessages(prev => ({
        ...prev,
        [conversationId]: prev[conversationId].map(msg => 
          msg.id === tempMessage.id ? sentMessage : msg
        )
      }));
    } catch (err) {
      // Mark message as failed
      setMessages(prev => ({
        ...prev,
        [conversationId]: prev[conversationId].map(msg => 
          msg.id === tempMessage.id ? { ...msg, status: 'failed' } : msg
        )
      }));
      setError('Failed to send message');
    }
  }, []);

  const markAsRead = useCallback(async (conversationId) => {
    try {
      await markConversationAsRead(conversationId);
      setConversations(prev => prev.map(conv => 
        conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv
      ));
      setNotifications(prev => ({ 
        unreadMessages: Math.max(0, prev.unreadMessages - 1) 
      }));
    } catch (err) {
      setError('Failed to mark as read');
    }
  }, []);

  const checkForNewMessages = async () => {
    try {
      const updates = await getMessageUpdates();
      if (updates.length > 0) {
        setConversations(prev => {
          const updated = [...prev];
          updates.forEach(update => {
            const index = updated.findIndex(c => c.id === update.conversationId);
            if (index !== -1) {
              updated[index] = { ...updated[index], ...update };
            }
          });
          return updated;
        });
        
        const newUnreadCount = updates.reduce((sum, update) => sum + (update.unreadCount || 0), 0);
        setNotifications(prev => ({ 
          unreadMessages: prev.unreadMessages + newUnreadCount 
        }));
      }
    } catch (err) {
      console.error('Failed to check for new messages:', err);
    }
  };

  const updateTypingStatus = async () => {
    try {
      const typingData = await getTypingStatus();
      setTypingUsers(typingData);
    } catch (err) {
      console.error('Failed to get typing status:', err);
    }
  };

  const startTyping = useCallback(async (conversationId) => {
    try {
      await sendTypingStatus(conversationId, true);
    } catch (err) {
      console.error('Failed to send typing status:', err);
    }
  }, []);

  const stopTyping = useCallback(async (conversationId) => {
    try {
      await sendTypingStatus(conversationId, false);
    } catch (err) {
      console.error('Failed to send typing status:', err);
    }
  }, []);

  return {
    conversations,
    activeConversation,
    messages,
    loading,
    error,
    notifications,
    typingUsers,
    loadMessages,
    sendMessage,
    markAsRead,
    startTyping,
    stopTyping,
    refreshData: loadConversations
  };
};

// Mock API functions for Messages
const fetchConversations = async () => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    {
      id: 1,
      participants: [
        { id: 201, name: "Emma Wilson", avatar: "/avatars/emma.jpg", isOnline: true }
      ],
      lastMessage: {
        content: "Hey! Are we still meeting for coffee tomorrow?",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        senderId: 201
      },
      unreadCount: 2,
      isActive: true
    },
    {
      id: 2,
      participants: [
        { id: 203, name: "Mike Chen", avatar: "/avatars/mike.jpg", isOnline: false }
      ],
      lastMessage: {
        content: "Thanks for the help with the project!",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        senderId: 203
      },
      unreadCount: 0,
      isActive: false
    }
  ];
};

const fetchMessages = async (conversationId) => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return [
    {
      id: 1001,
      senderId: 201,
      content: "Hey! Are we still meeting for coffee tomorrow?",
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      type: "text",
      status: "delivered"
    }
  ];
};

const sendMessageAPI = async (conversationId, content, type) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: Date.now(),
    senderId: 'currentUser',
    content,
    type,
    timestamp: new Date(),
    status: 'delivered'
  };
};

const markConversationAsRead = async (conversationId) => {
  await new Promise(resolve => setTimeout(resolve, 300));
};

const getMessageUpdates = async () => {
  if (Math.random() > 0.7) {
    return [{
      conversationId: 1,
      unreadCount: 1,
      lastMessage: {
        content: "Just got your message!",
        timestamp: new Date(),
        senderId: 201
      }
    }];
  }
  return [];
};

const getTypingStatus = async () => {
  return Math.random() > 0.8 ? { 1: [201] } : {};
};

const sendTypingStatus = async (conversationId, isTyping) => {
  await new Promise(resolve => setTimeout(resolve, 100));
};
