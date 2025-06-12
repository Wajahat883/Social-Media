import React from 'react';
import girlImg from '../../assets/Pics/girl1.jpg';
import { Search, User, MessageSquareText, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600  h-16 flex items-center justify-between px-6 shadow-md z-50">
      
     
      <Link to="/" className="text-white font-bold text-xl">SocialApp</Link>

   
      <div className="flex items-center bg-white px-3 py-1 rounded-full w-1/3">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search for friend, post or video"
          className="ml-2 outline-none w-full text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        
      
        <div className="hidden md:flex gap-4 text-white font-medium">
         <Link to="/" className="hover:underline cursor-pointer">Homepage</Link>
          <Link to="/profile" className="hover:underline cursor-pointer">Timeline</Link>
        </div>

       
        <div className="flex gap-4 text-white">
          <div className="relative">
            <User className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1">1</span>
          </div>
          <div className="relative">
            <MessageSquareText className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1">1</span>
          </div>
          <div className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1">1</span>
          </div>
        </div>

   
        <img
          src={girlImg}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  );
}
