import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share,
  ThumbsUp,
  Download,
  Flag
} from 'lucide-react';

export default function VideoPlayer({ video, onLike, onComment, onShare }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    const newTime = (newProgress / 100) * duration;
    
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike && onLike(video.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Video Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={video.creator.avatar}
              alt={video.creator.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{video.creator.name}</h3>
              <p className="text-sm text-gray-500">{video.uploadDate}</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
            {showOptions && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Save video
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                  <Flag className="w-4 h-4" />
                  Report
                </button>
              </div>
            )}
          </div>
        </div>
        <h2 className="mt-2 text-lg font-medium">{video.title}</h2>
      </div>

      {/* Video Player */}
      <div 
        className="relative bg-black group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={video.url}
          className="w-full aspect-video object-cover"
          onClick={togglePlay}
        />
        
        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <button
              onClick={togglePlay}
              className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
            >
              <Play className="w-8 h-8 text-gray-900 ml-1" />
            </button>
          </div>
        )}

        {/* Video Controls */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            {/* Progress Bar */}
            <div 
              className="w-full h-1 bg-white bg-opacity-30 rounded-full cursor-pointer mb-3"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="hover:text-blue-400">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button onClick={toggleMute} className="hover:text-blue-400">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <button className="hover:text-blue-400">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Video Stats */}
      <div className="px-4 py-2 border-b">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span>{video.views?.toLocaleString()} views</span>
            <span>{video.likes?.toLocaleString()} likes</span>
          </div>
          <span>{video.comments?.length || 0} comments</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-3 border-b">
        <div className="flex items-center justify-around">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isLiked ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>Like</span>
          </button>
          <button
            onClick={() => onComment && onComment(video.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button
            onClick={() => onShare && onShare(video.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=CurrentUser"
            alt="You"
            className="w-8 h-8 rounded-full"
          />
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sample Comments */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=User1"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg px-3 py-2">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-sm">Great video! Really helpful content.</p>
              </div>
              <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                <button className="hover:text-blue-600">Like</button>
                <button className="hover:text-blue-600">Reply</button>
                <span>2h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}