import { useState, useEffect, useCallback } from 'react';

export const useVideosData = () => {
  const [videos, setVideos] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState({ newVideos: 0 });
  const [currentVideo, setCurrentVideo] = useState(null);
  const [watchTime, setWatchTime] = useState({});

  useEffect(() => {
    loadVideos();
    loadWatchHistory();
    loadRecommendations();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkForNewVideos();
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const loadWatchHistory = async () => {
    try {
      const history = await fetchWatchHistory();
      setWatchHistory(history);
    } catch (err) {
      console.error('Failed to load watch history:', err);
    }
  };

  const loadRecommendations = async () => {
    try {
      const recs = await fetchRecommendations();
      setRecommendations(recs);
    } catch (err) {
      console.error('Failed to load recommendations:', err);
    }
  };

  const playVideo = useCallback(async (videoId) => {
    try {
      const video = videos.find(v => v.id === videoId);
      if (!video) return;

      setCurrentVideo(video);
      await recordVideoView(videoId);
      
      // Update view count optimistically
      setVideos(prev => prev.map(v => 
        v.id === videoId ? { ...v, views: v.views + 1 } : v
      ));
    } catch (err) {
      setError('Failed to play video');
    }
  }, [videos]);

  const likeVideo = useCallback(async (videoId) => {
    try {
      setVideos(prev => prev.map(video => 
        video.id === videoId 
          ? { 
              ...video, 
              isLiked: !video.isLiked, 
              likes: video.isLiked ? video.likes - 1 : video.likes + 1 
            }
          : video
      ));
      await toggleVideoLike(videoId);
    } catch (err) {
      setError('Failed to like video');
    }
  }, []);

  const saveVideo = useCallback(async (videoId) => {
    try {
      setVideos(prev => prev.map(video => 
        video.id === videoId ? { ...video, isSaved: !video.isSaved } : video
      ));
      await toggleVideoSave(videoId);
    } catch (err) {
      setError('Failed to save video');
    }
  }, []);

  const updateWatchTime = useCallback((videoId, time) => {
    setWatchTime(prev => ({
      ...prev,
      [videoId]: time
    }));
  }, []);

  const checkForNewVideos = async () => {
    try {
      const newVideoCount = await getNewVideoCount();
      setNotifications(prev => ({ ...prev, newVideos: newVideoCount }));
    } catch (err) {
      console.error('Failed to check for new videos:', err);
    }
  };

  return {
    videos,
    watchHistory,
    recommendations,
    loading,
    error,
    notifications,
    currentVideo,
    watchTime,
    playVideo,
    likeVideo,
    saveVideo,
    updateWatchTime,
    refreshData: loadVideos
  };
};

// Mock API functions for Videos
const fetchVideos = async () => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  return [
    {
      id: 1,
      title: "Building a Startup from Scratch",
      creator: {
        id: 301,
        name: "Tech Entrepreneur",
        avatar: "/avatars/tech-guy.jpg",
        verified: true,
        subscribers: 125000
      },
      thumbnail: "/videos/startup-thumb.jpg",
      duration: "15:42",
      views: 2300000,
      uploadDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
      likes: 45000,
      dislikes: 890,
      category: "Business",
      isLiked: false,
      isSaved: false
    }
  ];
};

const fetchWatchHistory = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [];
};

const fetchRecommendations = async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return [];
};

const recordVideoView = async (videoId) => {
  await new Promise(resolve => setTimeout(resolve, 200));
};

const toggleVideoLike = async (videoId) => {
  await new Promise(resolve => setTimeout(resolve, 400));
};

const toggleVideoSave = async (videoId) => {
  await new Promise(resolve => setTimeout(resolve, 300));
};

const getNewVideoCount = async () => {
  return Math.floor(Math.random() * 3);
};
