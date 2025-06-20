import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { Search, Filter, TrendingUp, Clock, Eye } from 'lucide-react';

export default function VideoFeed() {
  const [videos, setVideos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock video data
  useEffect(() => {
    const mockVideos = [
      {
        id: 1,
        title: "Amazing Nature Documentary - Wildlife in 4K",
        url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        creator: {
          name: "Nature Explorer",
          avatar: "https://api.dicebear.com/7.x/initials/svg?seed=NatureExplorer",
          verified: true
        },
        views: 1250000,
        likes: 45000,
        uploadDate: "2 days ago",
        duration: "15:42",
        thumbnail: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "nature",
        comments: []
      },
      {
        id: 2,
        title: "React Tutorial - Building Modern Web Apps",
        url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
        creator: {
          name: "Code Master",
          avatar: "https://api.dicebear.com/7.x/initials/svg?seed=CodeMaster",
          verified: true
        },
        views: 890000,
        likes: 32000,
        uploadDate: "1 week ago",
        duration: "23:15",
        thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "tech",
        comments: []
      },
      {
        id: 3,
        title: "Cooking Masterclass - Italian Pasta",
        url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        creator: {
          name: "Chef Antonio",
          avatar: "https://api.dicebear.com/7.x/initials/svg?seed=ChefAntonio",
          verified: false
        },
        views: 567000,
        likes: 28000,
        uploadDate: "3 days ago",
        duration: "18:30",
        thumbnail: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "cooking",
        comments: []
      }
    ];
    setVideos(mockVideos);
  }, []);

  const filters = [
    { id: 'all', label: 'All', icon: Eye },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recent', icon: Clock },
    { id: 'tech', label: 'Technology', icon: null },
    { id: 'nature', label: 'Nature', icon: null },
    { id: 'cooking', label: 'Cooking', icon: null }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.creator.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || video.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleLike = (videoId) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? { ...video, likes: video.likes + 1 }
        : video
    ));
  };

  const handleComment = (videoId) => {
    console.log('Comment on video:', videoId);
  };

  const handleShare = (videoId) => {
    console.log('Share video:', videoId);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Videos</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Feed */}
      <div className="space-y-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoPlayer
              key={video.id}
              video={video}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}