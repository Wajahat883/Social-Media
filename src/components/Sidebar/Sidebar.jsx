import React, { useState, memo } from 'react';
import {
  Rss, Play, Users, BookMarked, CircleHelp,
  BriefcaseBusiness, Calendar, GraduationCap,
  ChevronDown, ChevronRight, Settings, LogOut,
} from 'lucide-react';
import Avatar from './Avatar/Avatar';
import FriendItem from './Friends/Friendsitem';
import { useUI } from './sharecontext/Sharecontext';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: Rss, label: 'Feed', color: 'text-orange-400', path: '/' },
  { icon: Play, label: 'Videos', color: 'text-red-400', path: '/videos' },
  { icon: Users, label: 'Groups', color: 'text-purple-400', path: '/groups' },
  { icon: BookMarked, label: 'Bookmarks', color: 'text-yellow-400', path: '/bookmarks' },
  { icon: CircleHelp, label: 'Questions', color: 'text-blue-400', path: '/questions' },
  { icon: BriefcaseBusiness, label: 'Jobs', color: 'text-emerald-400', path: '/jobs' },
  { icon: Calendar, label: 'Events', color: 'text-pink-400', path: '/events' },
  { icon: GraduationCap, label: 'Courses', color: 'text-indigo-400', path: '/courses' },
];

function Sidebar() {
  const { activeSection, setActiveSection, userData, friends } = useUI();
  const [friendsExpanded, setFriendsExpanded] = useState(true);
  const [showAllFriends, setShowAllFriends] = useState(false);

  const visibleFriends = showAllFriends ? friends : friends.slice(0, 4);
  const onlineFriends = friends.filter((f) => f.status === 'online');

  return (
    <div className="w-72 bg-gray-900 border-r border-gray-800 h-screen flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <Avatar initials={userData.initials} status={userData.status} size="w-12 h-12" />
          <div>
            <h2 className="text-white font-semibold">{userData.name}</h2>
            <p className="text-sm text-gray-400">{userData.status}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item) => {
          const isActive = activeSection === item.label;
          return (
            <Link
              to={item.path}
              key={item.label}
              onClick={() => setActiveSection(item.label)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
              <span className="text-sm font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
              )}
            </Link>
          );
        })}

       
        <div className="pt-6 border-t border-gray-800 mt-6">
          <button
            onClick={() => setFriendsExpanded(!friendsExpanded)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-3"
          >
            {friendsExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span className="text-sm font-semibold uppercase">Online Friends</span>
            <span className="ml-auto text-xs bg-gray-700 px-2 py-1 rounded-full">
              {onlineFriends.length}
            </span>
          </button>

          {friendsExpanded && (
            <>
              <ul className="space-y-1">
                {visibleFriends.map((friend) => (
                  <FriendItem key={friend.id} friend={friend} />
                ))}
              </ul>
              {friends.length > 4 && (
                <button
                  onClick={() => setShowAllFriends(!showAllFriends)}
                  className="text-gray-400 text-sm hover:text-white mt-2"
                >
                  {showAllFriends ? 'Show Less' : `Show ${friends.length - 4} More`}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 p-3 text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-xl">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 text-gray-300 hover:bg-red-500/10 hover:text-red-400 rounded-xl">
          <LogOut size={18} />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default memo(Sidebar);
