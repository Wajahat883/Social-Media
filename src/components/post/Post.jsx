// Post.jsx
import React, { useState } from 'react';
import CommentBox from './comentbox';
import PostDropdownMenu from './Postdropdownmenu';
import PostInteractions from './PostInteractions';



export default function Post({ post, onDelete }) {
  const [reaction, setReaction] = useState(null);
  
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);

  const currentUser = {
    id: "user123",
    name: "Waji"
  };

  const isOwnPost = post.user.id === currentUser.id;


 

  const addComment = (text) => {
    if (text.trim()) setComments([...comments, { text }]);
  };

  const handlePostAction = (action, postId, label) => {
    if (action === 'delete') {
      if (onDelete) onDelete(postId);
    }
    console.log(`Action: ${action} on post ${postId} — ${label}`);
  };

  const handleLike = (postId, liked, reactionType) => {
    setReaction(reactionType || (liked ? '👍' : null));
  };

  const handleShare = (postId) => {
    alert(`Shared post ${postId}`);
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <img src={post.user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold text-sm">{post.user.name}</h4>
            <p className="text-xs text-gray-500">{post.timestamp.toLocaleString()} · 🌐</p>
          </div>
        </div>
        <PostDropdownMenu 
          postId={post.id || Date.now()} 
          isOwnPost={isOwnPost} 
          onAction={handlePostAction} 
        />
      </div>

      <p className="text-sm text-gray-800 mb-2">{post.text}</p>

      {post.images?.length > 0 && (
        <div className="rounded-lg overflow-hidden mb-2">
          <img src={post.images[0]} alt="Post" className="w-full object-cover" />
        </div>
      )}

      <PostInteractions
        postId={post.id}
        initialLikes={reaction ? 1 : 0}
        initialComments={comments.length}
        onLike={handleLike}
        onComment={() => setShowCommentBox(!showCommentBox)}
        onShare={handleShare}
      />

      {showCommentBox && <CommentBox onAddComment={addComment} />}

      <div className="mt-2 space-y-1">
        {comments.map((c, i) => (
          <div key={i} className="bg-gray-100 text-sm p-2 rounded">
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
}