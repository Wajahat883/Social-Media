import React from 'react'
import Navbar from '../../components/Topbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/rightbar'

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <div className="flex px-4  ">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    
    </>
  )
}
