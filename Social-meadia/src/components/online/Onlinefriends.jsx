import React from 'react'

export default function Onlinefriends({users}) {
  return (
     <li className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={users.profilePicture}
              alt="friend"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <span className="text-sm text-gray-800">{users.username}</span>
        </li>
  )
}
