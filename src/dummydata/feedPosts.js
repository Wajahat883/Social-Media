export const feedPosts = [
  {
    id: 1,
    userId: 101,
    userName: "John Smith",
    userAvatar: "/avatars/john.jpg",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    content: "Just launched our new product! Excited to share this milestone with everyone.",
    images: ["/posts/product-launch.jpg"],
    likes: 47,
    comments: 12,
    shares: 5,
    isLiked: false,
    privacy: "public"
  },
  {
    id: 2,
    userId: 102,
    userName: "Sarah Johnson",
    userAvatar: "/avatars/sarah.jpg",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    content: "Beautiful sunset from my office window today. Sometimes work has its perks! 🌅",
    images: ["/posts/sunset.jpg"],
    likes: 128,
    comments: 23,
    shares: 8,
    isLiked: true,
    privacy: "friends"
  }
];