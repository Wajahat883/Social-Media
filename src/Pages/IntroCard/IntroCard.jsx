import React, { useState } from 'react'
import { MapPin, Heart, Calendar, Edit2, Save, X } from 'lucide-react'

export default function IntroCard({ userProfile, updateProfile }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    bio: userProfile.bio || '',
    location: userProfile.location || '',
    hometown: userProfile.hometown || '',
    relationship: userProfile.relationship || '',
    joinDate: userProfile.joinDate || ''
  })

  const handleSave = () => {
    updateProfile(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      bio: userProfile.bio || '',
      location: userProfile.location || '',
      hometown: userProfile.hometown || '',
      relationship: userProfile.relationship || '',
      joinDate: userProfile.joinDate || ''
    })
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Intro</h3>
      
      <div className="space-y-4">
        {/* Bio Section */}
        <div className="text-center">
          {isEditing ? (
            <textarea
              value={editData.bio}
              onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
              placeholder="Write a bio..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          ) : (
            <p className="text-gray-600 mb-3">
              {userProfile.bio || 'No bio added yet'}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              {userProfile.bio ? 'Edit bio' : 'Add bio'}
            </button>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-3 pt-4 border-t">
          {isEditing ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={editData.location}
                  onChange={(e) => setEditData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Current city"
                  className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={editData.hometown}
                  onChange={(e) => setEditData(prev => ({ ...prev, hometown: e.target.value }))}
                  placeholder="Hometown"
                  className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-gray-500" />
                <select
                  value={editData.relationship}
                  onChange={(e) => setEditData(prev => ({ ...prev, relationship: e.target.value }))}
                  className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Relationship status</option>
                  <option value="Single">Single</option>
                  <option value="In a relationship">In a relationship</option>
                  <option value="Married">Married</option>
                  <option value="It's complicated">It's complicated</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <input
                  type="date"
                  value={editData.joinDate}
                  onChange={(e) => setEditData(prev => ({ ...prev, joinDate: e.target.value }))}
                  className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {userProfile.location && (
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Lives in {userProfile.location}</span>
                </div>
              )}
              {userProfile.hometown && (
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>From {userProfile.hometown}</span>
                </div>
              )}
              {userProfile.relationship && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Heart className="w-5 h-5" />
                  <span>{userProfile.relationship}</span>
                </div>
              )}
              {userProfile.joinDate && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Joined {new Date(userProfile.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit details
          </button>
        )}
      </div>
    </div>
  )
}