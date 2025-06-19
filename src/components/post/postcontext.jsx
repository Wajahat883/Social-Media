// src/components/post/postcontext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // ✅ Load posts from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('myPosts');
      if (stored) {
        setPosts(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading posts from localStorage:', error);
    }
  }, []);

  // ✅ Save to localStorage when posts change (limit to 50 posts)
  useEffect(() => {
    try {
      if (posts.length > 0) {
        const limitedPosts = posts.slice(0, 50); // only keep latest 50 posts
        localStorage.setItem('myPosts', JSON.stringify(limitedPosts));
      }
    } catch (error) {
      console.error('Storage Limit Exceeded:', error);
    }
  }, [posts]);

  // ✅ Add post function
  const addPost = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
