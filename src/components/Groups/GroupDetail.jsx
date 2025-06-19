import React, { useState } from 'react';
import { ArrowLeft, Users, Globe, Lock, Settings, Share, MoreHorizontal, Plus, Image, Video } from 'lucide-react';

export default function GroupDetail({ group, onBack, onLeave }) {
  const [activeTab, setActiveTab] = useState('discussion');
  const [newPost, setNewPost] = useState('');

  const handleCreatePost = () => {
    if (newPost.trim()) {
      // Handle post creation logic here
      console.log('Creating post:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
          {group.coverImage ? (
            <img
              src={group.coverImage}
              alt={group.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600" />
          )}
          <button
            onClick={onBack}
            className="absolute top-4 left-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Group Info */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <img
              src={group.avatar}
              alt={group.name}
              className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg -mt-10"
            />
            <div className="flex-1 pt-2">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{group.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                {group.privacy === 'public' ? (
                  <Globe className="w-4 h-4" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                <span className="capitalize">{group.privacy} group</span>
                <span>•</span>
                <span>{group.members.length} members</span>
              </div>
              <p className="text-gray-600">{group.description}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Share className="w-4 h-4" />
                Share
              </button>
              <button
                onClick={onLeave}
                className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-colors"
              >
                Leave Group
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex">
            {['discussion', 'members', 'events', 'media'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'discussion' && (
            <>
              {/* Create Post */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex gap-3">
                  <img
                    src="https://api.dicebear.com/7.x/initials/svg?seed=CurrentUser"
                    alt="You"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="Write something to the group..."
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    />
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Image className="w-4 h-4" />
                          Photo
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Video className="w-4 h-4" />
                          Video
                        </button>
                      </div>
                      <button
                        onClick={handleCreatePost}
                        disabled={!newPost.trim()}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {group.posts && group.posts.length > 0 ? (
                  group.posts.map((post, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://api.dicebear.com/7.x/initials/svg?seed=Member"
                          alt="Member"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">Group Member</h4>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-gray-800">{post}</p>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                    <p className="text-gray-500">Be the first to start a discussion!</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'members' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Members ({group.members.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.members.map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-500">Member</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events yet</h3>
              <p className="text-gray-500">Events will appear here when they're created</p>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No media yet</h3>
              <p className="text-gray-500">Photos and videos shared in the group will appear here</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* About */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-600 text-sm mb-3">{group.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                {group.privacy === 'public' ? (
                  <Globe className="w-4 h-4" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
                <span className="capitalize">{group.privacy}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>{group.members.length} members</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">{group.dailyPosts || 0} new posts today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">12 new members this week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}