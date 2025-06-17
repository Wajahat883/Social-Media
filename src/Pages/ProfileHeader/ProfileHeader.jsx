import React, { useRef } from 'react'
import { Camera, Plus, Edit, MoreHorizontal, User } from 'lucide-react'

export default function ProfileHeader({ userProfile, updateProfile }) {
  const coverPhotoRef = useRef(null)
  const profilePhotoRef = useRef(null)

  const handleCoverPhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        updateProfile({ coverPhoto: e.target.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        updateProfile({ profilePhoto: e.target.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-80 bg-gray-200 rounded-b-lg overflow-hidden relative">
            {userProfile.coverPhoto ? (
              <img
                className="w-full h-full object-cover"
                src={userProfile.coverPhoto}
                alt="cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
                <Camera className="w-16 h-16 text-white opacity-50" />
              </div>
            )}
            
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoUpload}
              ref={coverPhotoRef}
              className="hidden"
            />
            
            <button 
              onClick={() => coverPhotoRef.current?.click()}
              className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md transition-colors"
            >
              <Camera className="w-4 h-4" />
              {userProfile.coverPhoto ? 'Edit cover photo' : 'Add cover photo'}
            </button>
          </div>

          {/* Profile Picture */}
          <div className="absolute -bottom-8 left-8">
            <div className="relative">
              {userProfile.profilePhoto ? (
                <img
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                  src={userProfile.profilePhoto}
                  alt="profile"
                />
              ) : (
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg bg-gray-300 flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-500" />
                </div>
              )}
              
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoUpload}
                ref={profilePhotoRef}
                className="hidden"
              />
              
              <button 
                onClick={() => profilePhotoRef.current?.click()}
                className="absolute bottom-2 right-2 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              >
                <Camera className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-12 pb-4 px-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {userProfile.name || 'Your Name'}
              </h1>
              <p className="text-gray-600 mt-1">
                {userProfile.friendsCount ? `${userProfile.friendsCount} friends` : 'No friends yet'}
              </p>
              
              {userProfile.friends && userProfile.friends.length > 0 && (
                <div className="flex -space-x-2 mt-2">
                  {userProfile.friends.slice(0, 5).map((friend, index) => (
                    <div key={index} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                      {friend.photo ? (
                        <img className="w-full h-full rounded-full object-cover" src={friend.photo} alt={friend.name} />
                      ) : (
                        <User className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors">
                <Plus className="w-4 h-4" />
                Add to story
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors">
                <Edit className="w-4 h-4" />
                Edit profile
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 p-2 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}