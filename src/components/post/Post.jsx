import React, { useState } from 'react';
import { MoreHorizontal, Smile } from 'lucide-react';
import CommentBox from './comentbox';

const reactions = ['👍', '❤️', '😂', '😮', '😢', '😡'];

export default function Post({ post }) {
  const [reaction, setReaction] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);

  const handleReaction = (r) => {
    setReaction(r);
    setShowPicker(false);
  };

  const addComment = (text) => {
    if (text.trim()) setComments([...comments, { text }]);
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <img src={post.user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold text-sm">{post.user.name}</h4>
            <p className="text-xs text-gray-500">{post.timestamp.toLocaleString()} · 🌐</p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-500" />
      </div>

      {/* Post Text */}
      <p className="text-sm text-gray-800 mb-2">{post.text}</p>

      {/* Post Image */}
      {post.images?.length > 0 && (
        <div className="rounded-lg overflow-hidden mb-2">
          <img src={post.images[0]} alt="Post" className="w-full object-cover" />
        </div>
      )}

      {/* Reactions Bar */}
      <div className="flex items-center justify-between text-xs text-gray-600 py-2 border-t border-b mb-2">
        <div className="flex items-center gap-1">
          {reaction && <span>{reaction}</span>}
          {reaction && <span className="ml-1">1</span>}
        </div>
        <div>
          {comments.length > 0 && <span>{comments.length} Comment{comments.length > 1 ? 's' : ''}</span>}
        </div>
      </div>

      {/* Actions: Like & Comment */}
      <div className="flex items-center justify-around text-sm text-gray-700 font-medium py-1">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="flex items-center gap-1 hover:text-blue-600"
        >
          {reaction || '👍'} Like
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="flex items-center gap-1 hover:text-blue-600"
        >
          💬 Comment
        </button>
      </div>

      {/* Emoji Picker */}
      {showPicker && (
        <div className="flex gap-2 p-2 border rounded mt-2 bg-gray-50 w-fit">
          {reactions.map((r, i) => (
            <button key={i} onClick={() => handleReaction(r)} className="text-xl hover:scale-125">
              {r}
            </button>
          ))}
        </div>
      )}

      {/* Comment Box */}
      {showCommentBox && <CommentBox onAddComment={addComment} />}

      {/* Comments List */}
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
