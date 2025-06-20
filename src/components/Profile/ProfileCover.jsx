import React, { useState, useRef } from 'react';
import { Camera, Edit, MoreHorizontal, Plus, MessageCircle, UserPlus, Settings } from 'lucide-react';

export default function ProfileCover({ profile, isOwnProfile = true, onUpdateProfile }) {
  const [showCoverOptions, setShowCoverOptions] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpdateProfile({ coverPhoto: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpdateProfile({ profilePhoto: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Cover Photo Section */}
        <div className="relative">
          <div className="h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden rounded-b-xl">
            {profile.coverPhoto ? (
              <img
                src={profile.coverPhoto}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-70" />
                  <p className="text-lg font-medium">Add a cover photo</p>
                </div>
              </div>
            )}
            
            {/* Cover Photo Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            
            {/* Cover Photo Actions */}
            {isOwnProfile && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="relative">
                  <button
                    onClick={() => setShowCoverOptions(!showCoverOptions)}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all shadow-lg"
                  >
                    <Camera className="w-4 h-4" />
                    Edit cover photo
                  </button>
                  
                  {showCoverOptions && (
                    <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-xl border overflow-hidden">
                      <button
                        onClick={() => {
                          coverInputRef.current?.click();
                          setShowCoverOptions(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <Camera className="w-4 h-4" />
                        Upload photo
                      </button>
                      <button className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3">
                        <Edit className="w-4 h-4" />
                        Reposition
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Profile Photo */}
          <div className="absolute -bottom-8 left-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                {profile.profilePhoto ? (
                  <img
                    src={profile.profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                    <span className="text-4xl font-bold text-white">
                      {profile.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Profile Photo Edit Button */}
              {isOwnProfile && (
                <div className="absolute bottom-2 right-2">
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileOptions(!showProfileOptions)}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors shadow-lg"
                    >
                      <Camera className="w-5 h-5 text-gray-600" />
                    </button>
                    
                    {showProfileOptions && (
                      <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-xl border overflow-hidden">
                        <button
                          onClick={() => {
                            profileInputRef.current?.click();
                            setShowProfileOptions(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
                        >
                          <Camera className="w-4 h-4" />
                          Upload photo
                        </button>
                        <button className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="pt-12 pb-6 px-8">
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {profile.name || 'Your Name'}
              </h1>
              
              {profile.bio && (
                <p className="text-lg text-gray-600 mb-3 max-w-2xl">
                  {profile.bio}
                </p>
              )}
              
              <div className="flex items-center gap-6 text-gray-600">
                <span className="font-medium">
                  {profile.friendsCount || 0} friends
                </span>
                <span>
                  {profile.mutualFriends || 0} mutual friends
                </span>
              </div>
              
              {/* Friend Avatars */}
              {profile.friends && profile.friends.length > 0 && (
                <div className="flex -space-x-2 mt-3">
                  {profile.friends.slice(0, 8).map((friend, index) => (
                    <img
                      key={index}
                      src={friend.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${friend.name}`}
                      alt={friend.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                  {profile.friends.length > 8 && (
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        +{profile.friends.length - 8}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              {isOwnProfile ? (
                <>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg">
                    <Plus className="w-5 h-5" />
                    Add to story
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
                    <Edit className="w-5 h-5" />
                    Edit profile
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 p-3 rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg">
                    <UserPlus className="w-5 h-5" />
                    Add friend
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Message
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 p-3 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden File Inputs */}
      <input
        type="file"
        accept="image/*"
        onChange={handleCoverUpload}
        ref={coverInputRef}
        className="hidden"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleProfileUpload}
        ref={profileInputRef}
        className="hidden"
      />
    </div>
  );
}