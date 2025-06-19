import React, { useState } from 'react';
import girlImg from '../../assets/Pics/girl1.jpg';
import {
  Search,
  Home,
  Users,
  Video,
  Store,
  MessageCircle,
  Bell,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import xLogo from '../../assets/Pics/logo.png';
import ProfileDropdown from './profiledropdown/Profiledropdown';
import { useUI } from '../../Context/Videopanelcontext';
import { useMessage } from '../../Context/Messagecontext';
import Notification from './notification/Notification';

export default function Navbar() {
  const { toggleVideoPanel } = useUI();
  const { toggleMessage } = useMessage();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);

  return (
    <div className="w-full sticky top-0 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 h-16 flex items-center justify-between px-4 shadow-md z-50">
      {/* Left - Logo & Search */}
      <div className="flex items-center gap-4 flex-1">
        <Link to="/" className="flex items-center gap-2 text-black font-bold text-xl">
          <img src={xLogo} alt="Logo" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl font-extrabold text-black">SocialX</span>
        </Link>

        <div className="relative ml-4 w-64">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search SocialX"
            className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:bg-white focus:shadow-md transition-all"
          />
        </div>
      </div>

      {/* Center - Navigation Icons */}
      <div className="flex justify-center flex-1 space-x-6">
        <Link to="/" className="flex items-center justify-center w-14 h-12 hover:bg-gray-100 rounded-md">
          <Home className="w-6 h-6 text-gray-600 hover:text-blue-600" />
        </Link>

        <div className="flex items-center justify-center w-14 h-12 hover:bg-gray-100 rounded-md cursor-pointer">
          <Users className="w-6 h-6 text-gray-600 hover:text-blue-600" />
        </div>

        <div className="relative flex items-center justify-center w-14 h-12 hover:bg-gray-100 rounded-md cursor-pointer">
          <Link to="/videopanel" onClick={toggleVideoPanel}>
            <Video className="w-6 h-6 text-gray-600 hover:text-blue-600" />
          </Link>
        </div>

        <Link to="/store" className="flex items-center justify-center w-14 h-12 hover:bg-gray-100 rounded-md">
  <Store className="w-6 h-6 text-gray-600 hover:text-blue-600" />
</Link>
      </div>

      {/* Right - Notifications & Profile */}
      <div className="flex items-center gap-3 flex-1 justify-end">
        {/* 🔔 Notifications */}
        <div className="relative">
          <div
            onClick={toggleNotification}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition cursor-pointer relative"
          >
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              1
            </span>
          </div>

          {isNotificationOpen && (
            <div className="absolute top-12 right-0 z-50">
              <Notification onClose={() => setIsNotificationOpen(false)} />
            </div>
          )}
        </div>

        {/* 💬 Messages */}
        <div className="relative">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition cursor-pointer">
            <Link
              to="/messages"
              onClick={(e) => {
                e.preventDefault();
                toggleMessage();
              }}
            >
              <MessageCircle className="w-5 h-5 text-gray-700" />
            </Link>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              1
            </span>
          </div>
        </div>

        {/* 👤 Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-white transition-all duration-200 focus:outline-none"
          >
            <img src={girlImg} alt="profile" className="w-full h-full rounded-full object-cover" />
          </button>

          <ProfileDropdown
            isOpen={isDropdownOpen}
            onClose={closeDropdown}
            userImage={girlImg}
          />
        </div>
      </div>
    </div>
  );
}
