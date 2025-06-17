import React, { useState } from 'react';
import Navbar from '../../components/Topbar/Navbar';
import Feed from '../../components/Feed/Feed';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileTabs from '../ProfileTabs/ProfileTabs';
import IntroCard from '../IntroCard/IntroCard';
import PhotosCard from '../PhotosCard/PhotosCard';
import FriendsCard from '../ProfileTabs/FriendsCard';
import CreatePost from '../ProfileTabs/CreatePost';
import { usePost } from '../../components/post/postcontext';// 👈 import context

export default function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [userProfile, setUserProfile] = useState({
    name: '',
    bio: '',
    coverPhoto: null,
    profilePhoto: null,
    location: '',
    hometown: '',
    relationship: '',
    joinDate: '',
    photos: [],
    friends: [],
    friendsCount: 0
  });

  const { posts } = usePost(); // 👈 fetch global posts

  const updateProfile = (updates) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <ProfileHeader 
          userProfile={userProfile} 
          updateProfile={updateProfile} 
        />

        <div className="bg-white">
          <div className="max-w-5xl mx-auto">
            <ProfileTabs 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex gap-4 items-start">
            {/* Left Section */}
            <div className="w-2/5 space-y-4 h-full">
              <IntroCard 
                userProfile={userProfile} 
                updateProfile={updateProfile} 
              />
              <PhotosCard 
                photos={userProfile.photos} 
                updateProfile={updateProfile} 
              />
              <FriendsCard 
                friends={userProfile.friends} 
                friendsCount={userProfile.friendsCount} 
              />
            </div>

            {/* Right Section */}
            <div className="flex-1 space-y-4 h-full">
              <CreatePost userProfile={userProfile} />
              <div className="h-full">
                <Feed posts={posts} /> {/* 👈 pass posts to Feed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
