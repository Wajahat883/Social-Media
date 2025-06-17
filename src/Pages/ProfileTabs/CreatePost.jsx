import React from 'react'
import { Video, Image, Smile, User } from 'lucide-react'

 function CreatePost({ userProfile }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {userProfile.profilePhoto ? (
            <img src={userProfile.profilePhoto} alt="profile" className="w-full h-full object-cover" />
          ) : (
            <User className="w-5 h-5 text-gray-500" />
          )}
        </div>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 text-left text-gray-500 transition-colors">
          {userProfile.name ? `What's on your mind, ${userProfile.name}?` : "What's on your mind?"}
        </button>
      </div>
      
      <div className="border-t pt-3">
        <div className="flex justify-around">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-600 font-medium">Live video</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Image className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-600 font-medium">Photo/video</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <Smile className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-600 font-medium">Feeling/activity</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default CreatePost