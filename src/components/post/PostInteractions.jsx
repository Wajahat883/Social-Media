// PostInteractions.jsx
import React, { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Share,
  ThumbsUp,
  Angry,
  Laugh,
  Frown,
} from 'lucide-react';

export default function PostInteractions({
  postId,
  initialLikes = 0,
  initialComments = 0,
  initialShares = 0,
  onLike,
  onComment,
  onShare,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);

  const reactions = [
    { type: 'like', icon: ThumbsUp, color: 'text-blue-600', bg: 'bg-blue-600' },
    { type: 'love', icon: Heart, color: 'text-red-500', bg: 'bg-red-500' },
    { type: 'laugh', icon: Laugh, color: 'text-yellow-500', bg: 'bg-yellow-500' },
    { type: 'angry', icon: Angry, color: 'text-red-600', bg: 'bg-red-600' },
    { type: 'sad', icon: Frown, color: 'text-yellow-600', bg: 'bg-yellow-600' }
  ];

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikeCount(prev => newLikedState ? prev + 1 : prev - 1);
    onLike && onLike(postId, newLikedState);
  };

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction);
    setIsLiked(true);
    setShowReactions(false);
    if (!isLiked) setLikeCount(prev => prev + 1);
    onLike && onLike(postId, true, reaction.type);
  };

  const getLikeButtonContent = () => {
    if (selectedReaction) {
      const ReactionIcon = selectedReaction.icon;
      return (
        <>
          <ReactionIcon size={18} className={selectedReaction.color} />
          <span className={`text-sm font-medium ${selectedReaction.color}`}>
            {selectedReaction.type.charAt(0).toUpperCase() + selectedReaction.type.slice(1)}
          </span>
        </>
      );
    }

    return (
      <>
        <ThumbsUp size={18} className={isLiked ? 'text-blue-600' : 'text-gray-500'} />
        <span className={`text-sm font-medium ${isLiked ? 'text-blue-600' : 'text-gray-500'}`}>
          Like
        </span>
      </>
    );
  };

  return (
    <div className="border-t border-gray-200">
      {(likeCount > 0 || initialComments > 0 || initialShares > 0) && (
        <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            {likeCount > 0 && (
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <ThumbsUp size={10} className="text-white" />
                  </div>
                  {selectedReaction && selectedReaction.type !== 'like' && (
                    <div className={`w-5 h-5 ${selectedReaction.bg} rounded-full flex items-center justify-center`}>
                      <selectedReaction.icon size={10} className="text-white" />
                    </div>
                  )}
                </div>
                <span>{likeCount}</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {initialComments > 0 && <span>{initialComments} comments</span>}
            {initialShares > 0 && <span>{initialShares} shares</span>}
          </div>
        </div>
      )}

      <div className="px-4 py-2 flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center space-x-1">
          {/* Like with Reaction popup */}
          <div
            className="relative"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
          >
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 ${isLiked || selectedReaction ? 'bg-blue-50' : ''}`}
            >
              {getLikeButtonContent()}
            </button>

            {showReactions && (
              <div className="absolute bottom-full left-0 mb-2 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2 flex items-center space-x-1 z-10">
                {reactions.map((reaction) => {
                  const ReactionIcon = reaction.icon;
                  return (
                    <button
                      key={reaction.type}
                      onClick={() => handleReaction(reaction)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-125"
                      title={reaction.type.charAt(0).toUpperCase() + reaction.type.slice(1)}
                    >
                      <ReactionIcon size={20} className={reaction.color} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Comment Button */}
          <button
            onClick={() => onComment(postId)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">Comment</span>
          </button>

          {/* Share Button */}
          <button
            onClick={() => onShare(postId)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700"
          >
            <Share size={18} />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
