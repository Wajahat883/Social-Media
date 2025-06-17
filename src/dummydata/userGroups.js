export const userGroups = [
  {
    id: 1,
    name: "React Developers Community",
    description: "A place for React developers to share knowledge and help each other",
    coverImage: "/groups/react-cover.jpg",
    profileImage: "/groups/react-logo.jpg",
    memberCount: 45230,
    postCount: 1250,
    dailyPosts: 45,
    category: "Technology",
    privacy: "public",
    joinDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 3 months ago
    role: "member",
    isJoined: true,
    admins: [
      { id: 401, name: "Alex Johnson", avatar: "/avatars/alex.jpg" }
    ],
    recentActivity: {
      postsToday: 45,
      newMembers: 12,
      lastActive: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
    }
  },
  {
    id: 2,
    name: "Photography Enthusiasts",
    description: "Share your best shots and learn from fellow photographers",
    coverImage: "/groups/photo-cover.jpg",
    profileImage: "/groups/camera-logo.jpg",
    memberCount: 32800,
    postCount: 890,
    dailyPosts: 23,
    category: "Art & Photography",
    privacy: "public",
    joinDate: null,
    role: null,
    isJoined: false,
    admins: [
      { id: 402, name: "Maria Rodriguez", avatar: "/avatars/maria.jpg" }
    ],
    recentActivity: {
      postsToday: 23,
      newMembers: 8,
      lastActive: new Date(Date.now() - 2 * 60 * 1000) // 2 minutes ago
    }
  }
];
