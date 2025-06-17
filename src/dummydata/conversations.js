export const conversations = [
  {
    id: 1,
    participants: [
      { id: 201, name: "Emma Wilson", avatar: "/avatars/emma.jpg", isOnline: true },
      { id: 202, name: "Current User", avatar: "/avatars/me.jpg", isOnline: true }
    ],
    lastMessage: {
      id: 1001,
      senderId: 201,
      content: "Hey! Are we still meeting for coffee tomorrow?",
      timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      isRead: false
    },
    unreadCount: 2,
    isActive: true
  },
  {
    id: 2,
    participants: [
      { id: 203, name: "Mike Chen", avatar: "/avatars/mike.jpg", isOnline: false },
      { id: 202, name: "Current User", avatar: "/avatars/me.jpg", isOnline: true }
    ],
    lastMessage: {
      id: 1002,
      senderId: 202,
      content: "Thanks for the help with the project!",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isRead: true
    },
    unreadCount: 0,
    isActive: false
  }
];
