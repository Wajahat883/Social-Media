import React from 'react';
import {
  Rss,
  MessagesSquare,
  Play,
  Users,
  BookMarked,
  CircleHelp,
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
} from 'lucide-react';

import { MoreUsers } from '../../dummydata/dummydata';

import Closefriends from '../closefriend/Closefriends';

const menuItems = [
  { icon: Rss, label: 'Feed' },
  { icon: MessagesSquare, label: 'Messages' },
  { icon: Play, label: 'Videos' },
  { icon: Users, label: 'Groups' },
  { icon: BookMarked, label: 'Bookmarks' },
  { icon: CircleHelp, label: 'Questions' },
  { icon: BriefcaseBusiness, label: 'Jobs' },
  { icon: Calendar, label: 'Events' },
  { icon: GraduationCap, label: 'Courses' },
];



export default function Sidebar() {
  return (
    <div className="basis-1/4 bg-blue-900 p-4 h-[calc(100vh-50px)] text-white overflow-y-auto">
      
    
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </li>
        ))}
      </ul>

      <button className="w-full mt-5 bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded text-sm font-semibold transition">
        Show More
      </button>

      <hr className="my-4 border-blue-700" />

    
      <h3 className="text-xs font-semibold uppercase text-blue-300 mb-2">Friends</h3>
      <ul className="space-y-2">
        {MoreUsers.map((u) => (
          <Closefriends key={u.id} users={u}/>
        ))}
      </ul>
    </div>
  );
}
