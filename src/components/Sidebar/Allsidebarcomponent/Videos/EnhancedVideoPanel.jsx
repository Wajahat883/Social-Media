import React, { useState } from 'react';
import VideoFeed from '../../../Video/VideoFeed';
import { Play, Upload, TrendingUp, Clock, Eye, Filter } from 'lucide-react';

export default function EnhancedVideoPanel() {
  const [activeView, setActiveView] = useState('feed');

  const views = [
    { id: 'feed', label: 'Video Feed', icon: Play },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recent', icon: Clock },
    { id: 'saved', label: 'Saved', icon: Eye }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Videos</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors">
            <Upload className="w-4 h-4" />
            Upload Video
          </button>
        </div>
        
        {/* Navigation */}
        <div className="flex gap-1 mt-4">
          {views.map((view) => {
            const Icon = view.icon;
            return (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeView === view.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {view.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeView === 'feed' && <VideoFeed />}
        {activeView === 'trending' && (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Trending Videos</h3>
            <p className="text-gray-500">Discover what's popular right now</p>
          </div>
        )}
        {activeView === 'recent' && (
          <div className="text-center py-12">
            <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Videos</h3>
            <p className="text-gray-500">Your recently watched videos</p>
          </div>
        )}
        {activeView === 'saved' && (
          <div className="text-center py-12">
            <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Saved Videos</h3>
            <p className="text-gray-500">Videos you've saved for later</p>
          </div>
        )}
      </div>
    </div>
  );
}