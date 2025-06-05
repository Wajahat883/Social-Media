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

export default function Sidebar() {
  return (
    <div className="basis-1/4 bg-blue-900 p-4 h-[calc(100vh-50px)] text-white overflow-y-auto">
      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <Rss className="w-5 h-5" />
          <span className="text-sm font-medium">Feed</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <MessagesSquare className="w-5 h-5" />
          <span className="text-sm font-medium">Messages</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <Play className="w-5 h-5" />
          <span className="text-sm font-medium">Videos</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Groups</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <BookMarked className="w-5 h-5" />
          <span className="text-sm font-medium">Bookmarks</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <CircleHelp className="w-5 h-5" />
          <span className="text-sm font-medium">Questions</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <BriefcaseBusiness className="w-5 h-5" />
          <span className="text-sm font-medium">Jobs</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <Calendar className="w-5 h-5" />
          <span className="text-sm font-medium">Events</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-800 p-2 rounded transition">
          <GraduationCap className="w-5 h-5" />
          <span className="text-sm font-medium">Courses</span>
        </li>
      </ul>
    </div>
  );
}
