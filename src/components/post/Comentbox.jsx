// CommentBox.jsx
import React, { useState } from 'react';
import { Smile, Send } from 'lucide-react';

export default function CommentBox({ onAddComment }) {
  const [text, setText] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddComment(text.trim());
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-start gap-2 mt-2 border-t pt-3"
    >
      {/* Profile pic (dummy) */}
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="w-9 h-9 rounded-full object-cover mt-1"
      />

      {/* Input + Emoji + Button */}
      <div className="flex-1 bg-gray-100 rounded-xl px-3 py-1.5 relative">
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-transparent outline-none text-sm"
        />

        {/* Emoji Icon */}
        <button
          type="button"
          onClick={() => setShowEmoji(!showEmoji)}
          className="absolute right-8 top-1.5 text-gray-500 hover:text-gray-700"
        >
          <Smile size={18} />
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="absolute right-2 top-1.5 text-blue-500 hover:text-blue-700"
        >
          <Send size={18} />
        </button>

        {/* Emoji Dropdown (basic) */}
        {showEmoji && (
          <div className="absolute bottom-full right-0 mb-2 bg-white border rounded shadow-lg p-2 z-10 flex flex-wrap gap-1 text-xl">
            {['😊', '😂', '😍', '😢', '😡', '👍', '🎉'].map((emoji, idx) => (
              <span
                key={idx}
                onClick={() => setText(text + emoji)}
                className="cursor-pointer hover:scale-125 transition-transform"
              >
                {emoji}
              </span>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
