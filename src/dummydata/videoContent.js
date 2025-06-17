export const videoContent = [
  {
    id: 1,
    title: "Building a Startup from Scratch",
    creator: {
      id: 301,
      name: "Tech Entrepreneur",
      avatar: "/avatars/tech-guy.jpg",
      verified: true,
      subscribers: 125000
    },
    thumbnail: "/videos/startup-thumb.jpg",
    duration: "15:42",
    views: 2300000,
    uploadDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    description: "Complete guide to starting your own tech company",
    likes: 45000,
    dislikes: 890,
    category: "Business",
    isLiked: false,
    isWatched: false
  },
  {
    id: 2,
    title: "Amazing Wildlife Documentary",
    creator: {
      id: 302,
      name: "Nature Explorer",
      avatar: "/avatars/nature.jpg",
      verified: true,
      subscribers: 890000
    },
    thumbnail: "/videos/wildlife-thumb.jpg",
    duration: "23:15",
    views: 1800000,
    uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    description: "Incredible footage of rare animals in their natural habitat",
    likes: 67000,
    dislikes: 1200,
    category: "Nature",
    isLiked: true,
    isWatched: true
  }
];