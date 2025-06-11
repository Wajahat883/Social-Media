import React, { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { MoreUsers } from '../../dummydata/dummydata'
import heart1 from '../../assets/Pics/heart1.jpg'
import thumb1 from '../../assets/Pics/thumb1.jpg'

export default function Posts({post}) {
    const [like,setlike]=useState(post.like)
    const [isliked,setisliked]=useState(false)

    const likehandler = ()=>{
        setlike(isliked ? like-1:like+1)
        setisliked(!isliked)
    }
     const user = MoreUsers.find(u => u.id === post.userId);
  return (
    <div className="w-full m-5 max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mb-6">
     
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
              src={user?.profilePicture}
            alt="profile"
          />
          <div className="flex flex-col text-sm">
            <span className="font-semibold">{user?.username}</span>
            <span className="text-gray-500 text-xs">{post.date}</span>
          </div>
        </div>
        <MoreVert className="text-gray-600 cursor-pointer" />
      </div>

     
      <div className="mb-4">
        <p className="text-sm mb-2">hey! it's my first post :)</p>
        <img
          className="w-full rounded-lg object-cover"
          src={post.photo}
          alt="Post"
        />
      </div>

      
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <img 
          onClick={likehandler}
            className="w-10 h-10 cursor-pointer"
            src={thumb1}
            alt="Like"
          />
          <img
           onClick={likehandler}
            className="w-10 h-10 cursor-pointer"
            src={heart1}
            alt="Heart"
          />
          <span>{like} people liked it</span>
        </div>
        <span className="cursor-pointer hover:underline">{post.comment} comments </span>
      </div>
    </div>
  )
}
