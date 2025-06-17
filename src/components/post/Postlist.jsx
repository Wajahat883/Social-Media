import React from 'react';
import { usePost } from './postcontext';
import Post from './post';

export default function PostList() {
  const { posts } = usePost();

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
