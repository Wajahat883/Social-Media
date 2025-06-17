import React from 'react'
import { Users, User } from 'lucide-react'

function FriendsCard({ friends = [], friendsCount = 0 }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Friends</h3>
          <p className="text-gray-600 text-sm">
            {friendsCount > 0 ? `${friendsCount} friends` : 'No friends yet'}
          </p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          See all friends
        </button>
      </div>

      {friends.length === 0 ? (
        <div className="text-center py-8">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No friends to show</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {friends.slice(0, 9).map((friend, index) => (
            <div key={index} className="text-center">
              <div className="w-full aspect-square bg-gray-200 rounded-lg mb-2 overflow-hidden">
                {friend.photo ? (
                  <img src={friend.photo} alt={friend.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
              <p className="text-sm font-medium text-gray-900 truncate">
                {friend.name || 'Unknown'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default FriendsCard