import React from 'react';
import { Users, Globe, Lock, MoreHorizontal } from 'lucide-react';

export default function GroupCard({ group, onJoin, onLeave, onView, isJoined }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        {group.coverImage ? (
          <img
            src={group.coverImage}
            alt={group.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600" />
        )}
        <div className="absolute top-2 right-2">
          <button className="p-1 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Group Avatar & Name */}
        <div className="flex items-start gap-3 mb-3">
          <img
            src={group.avatar}
            alt={group.name}
            className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{group.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {group.privacy === 'public' ? (
                <Globe className="w-4 h-4" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
              <span className="capitalize">{group.privacy} group</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {group.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{group.members.length} members</span>
          </div>
          <div>
            <span>{group.dailyPosts || 0} posts today</span>
          </div>
        </div>

        {/* Recent Members */}
        {group.members.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {group.members.slice(0, 3).map((member, index) => (
                <img
                  key={index}
                  src={member.avatar}
                  alt={member.name}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {group.members.slice(0, 2).map(m => m.name).join(', ')}
              {group.members.length > 2 && ` and ${group.members.length - 2} others`}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onView}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            View
          </button>
          {isJoined ? (
            <button
              onClick={onLeave}
              className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
            >
              Leave
            </button>
          ) : (
            <button
              onClick={onJoin}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
            >
              Join
            </button>
          )}
        </div>
      </div>
    </div>
  );
}