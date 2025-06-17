// src/components/post/postcontext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // ✅ Load posts from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('myPosts');
    if (stored) {
      setPosts(JSON.parse(stored));
    }
  }, []);

  // ✅ Save to localStorage when posts change
  useEffect(() => {
      if (posts.length > 0) {
    localStorage.setItem('myPosts', JSON.stringify(posts));
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
