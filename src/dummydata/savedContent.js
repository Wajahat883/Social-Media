export const savedContent = [
  {
    id: 1,
    type: "article",
    title: "Advanced React Patterns and Best Practices",
    url: "https://medium.com/react-patterns",
    source: "Medium",
    author: "React Expert",
    savedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    thumbnail: "/bookmarks/react-article.jpg",
    description: "Learn advanced patterns that will make your React code more maintainable",
    tags: ["react", "javascript", "programming"],
    readTime: "12 min read",
    isRead: false
  },
  {
    id: 2,
    type: "video",
    title: "UI/UX Design Principles",
    url: "https://youtube.com/watch?v=design123",
    source: "YouTube",
    author: "Design Guru",
    savedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    thumbnail: "/bookmarks/design-video.jpg",
    description: "Essential design principles every developer should know",
    tags: ["design", "ui", "ux"],
    duration: "18:30",
    isWatched: true
  }
];