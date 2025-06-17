export const questionFeed = [
  {
    id: 1,
    title: "What's the best way to learn React in 2025?",
    content: "I'm new to web development and want to start with React. What resources would you recommend?",
    asker: {
      id: 501,
      name: "John Beginner",
      avatar: "/avatars/john-b.jpg",
      reputation: 50
    },
    category: "Programming",
    tags: ["react", "learning", "beginner"],
    askedDate: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    answerCount: 23,
    viewCount: 156,
    upvotes: 15,
    downvotes: 2,
    isFollowing: false,
    hasAcceptedAnswer: false,
    bounty: null
  },
  {
    id: 2,
    title: "How to optimize React performance for large applications?",
    content: "My React app is getting slow with a large dataset. What are the best optimization strategies?",
    asker: {
      id: 502,
      name: "Senior Dev",
      avatar: "/avatars/senior.jpg",
      reputation: 2500
    },
    category: "Performance",
    tags: ["react", "performance", "optimization"],
    askedDate: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    answerCount: 31,
    viewCount: 287,
    upvotes: 28,
    downvotes: 1,
    isFollowing: true,
    hasAcceptedAnswer: true,
    bounty: 100
  }
];