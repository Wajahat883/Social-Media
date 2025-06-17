import React, { useState } from 'react';

export default function CommentBox({ onAddComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        className="flex-1 text-sm border rounded px-3 py-1"
      />
      <button type="submit" className="text-sm bg-blue-500 text-white px-3 rounded">
        Post
      </button>
    </form>
  );
}
