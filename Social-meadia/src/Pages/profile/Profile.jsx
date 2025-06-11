import React from 'react'
import Navbar from '../../components/Topbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/rightbar'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex px-4 mt-4 space-x-4">
    
        <div className="w-1/4">
          <Sidebar />
        </div>

     
        <div className="flex-1 space-y-4">
        
          <div className="bg-white p-4 rounded-lg shadow-sm text-gray-800 font-semibold">
            Profile Top Section
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
