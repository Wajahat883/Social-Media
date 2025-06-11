import React from 'react'

export default function Closefriends({users}) {
  return (
   <li className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={users.profilePicture}
              alt="friend"
              className="w-10 h-10 rounded-full object-cover"
            />
           
          </div>
          <span className="text-sm text-white">{users.username}</span>
        </li>
  )
}
