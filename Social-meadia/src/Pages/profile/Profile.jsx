import React from 'react'
import Navbar from '../../components/Topbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/rightbar'
import nature7 from '../../assets/Pics/nature7.jpg'
import boy4 from '../../assets/Pics/boy4.jpg'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex px-4 mt-4 space-x-4">
       
        <div className="w-1/4">
          <Sidebar />
        </div>

     
        <div className="flex-1 space-y-4">
       
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-60">
           
           <img
              className="w-full object-cover max-h-[305px] mx-auto"
             src={nature7}
             alt="cover"
                />

             
              <img
                className="w-28 h-28 rounded-full object-cover border-4 border-white absolute left-1/2 -translate-x-1/2 -bottom-14 shadow-md"
                src={boy4}
                alt="profile"
              />
            </div>

           
            <div className="mt-16 text-center p-4">
              <h4 className="text-xl font-bold text-gray-800">Waji</h4>
              <span className="text-gray-600 text-sm">Web Developer | UI Designer</span>
            </div>
          </div>

         
          <div className="flex space-x-4">
            <div className="w-2/3">
              <Feed />
            </div>
            <div className="w-1/3">
              <Rightbar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
