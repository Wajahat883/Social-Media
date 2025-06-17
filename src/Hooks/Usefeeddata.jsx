import { useState, useEffect, useCallback } from 'react';

export const useFeedData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState({ newPosts: 0 });
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Initial data load
  useEffect(() => {
    loadInitialPosts();
  }, []);

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      checkForNewPosts();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const loadInitialPosts = async () => {
    try {
      setLoading(true);
      // Simulate API call
      const response = await fetchPosts(1);
      setPosts(response.data);
      setHasMore(response.hasMore);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const loadMorePosts = useCallback(async () => {
    if (!hasMore || loading) return;

    try {
      setLoading(true);
      const response = await fetchPosts(page + 1);
      setPosts(prev => [...prev, ...response.data]);
      setPage(prev => prev + 1);
      setHasMore(response.hasMore);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  const checkForNewPosts = async () => {
    try {
      const newPostsCount = await getNewPostsCount();
      setNotifications(prev => ({ ...prev, newPosts: newPostsCount }));
    } catch (err) {
      console.error('Failed to check for new posts:', err);
    }
  };

  const likePost = useCallback(async (postId) => {
    try {
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      ));
      await toggleLike(postId);
    } catch (err) {
      // Revert optimistic update
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes + 1 : post.likes - 1 }
          : post
      ));
      setError('Failed to like post');
    }
  }, []);

  const sharePost = useCallback(async (postId) => {
    try {
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      ));
      await sharePostAPI(postId);
    } catch (err) {
      setError('Failed to share post');
    }
  }, []);

  const createPost = useCallback(async (postData) => {
    try {
      const newPost = await createPostAPI(postData);
      setPosts(prev => [newPost, ...prev]);
      return newPost;
    } catch (err) {
      setError('Failed to create post');
      throw err;
    }
  }, []);

  const refreshData = useCallback(async () => {
    await loadInitialPosts();
    setNotifications(prev => ({ ...prev, newPosts: 0 }));
  }, []);

  return {
    posts,
    loading,
    error,
    notifications,
    hasMore,
    loadMorePosts,
    likePost,
    sharePost,
    createPost,
    refreshData
  };
};

// Mock API functions for Feed
const fetchPosts = async (page) => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  
  const mockPosts = [
    {
      id: Date.now() + Math.random(),
      userId: 101,
      userName: "John Smith",
      userAvatar: "/avatars/john.jpg",
      timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000),
      content: "Just finished an amazing React project! The new hooks are incredible.",
      images: [],
      likes: Math.floor(Math.random() * 200),
      comments: Math.floor(Math.random() * 50),
      shares: Math.floor(Math.random() * 20),
      isLiked: Math.random() > 0.5,
      privacy: "public"
    }
  ];

  return {
    data: mockPosts,
    hasMore: page < 5
  };
};

const getNewPostsCount = async () => {
  return Math.floor(Math.random() * 5);
};

const toggleLike = async (postId) => {
  await new Promise(resolve => setTimeout(resolve, 500));
};

const sharePostAPI = async (postId) => {
  await new Promise(resolve => setTimeout(resolve, 500));
};

const createPostAPI = async (postData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: Date.now(),
    ...postData,
    timestamp: new Date(),
    likes: 0,
    comments: 0,
    shares: 0,
    isLiked: false
  };
};