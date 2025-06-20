import React from 'react';
import Share from '../Sharedata/Share';
import Post from '../post/Post';
import { memo } from 'react';
import { usePost } from '../post/postcontext';
import { useLocation } from 'react-router-dom';

 function Feed() {
  const { posts } = usePost();
  const location = useLocation();

  return (
    <div className="basis-1/2 bg-white p-4 space-y-4 overflow-y-auto max-h-[97vh]">
      {(location.pathname === '/' || location.pathname === '/home') && <Share />}
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Posts key={index} post={post} />
        ))
      ) : (
        <p className="text-center text-gray-400">No posts yet</p>
      )}
    </div>
  );
}
export default memo(Feed)