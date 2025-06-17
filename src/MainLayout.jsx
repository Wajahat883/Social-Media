// src/Layout/MainLayout.jsx
import React from 'react';
import Navbar from './components/Topbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Rightbars from './components/Rightbar/rightbar';
import VideoPanel from './components/Sidebar/Allsidebarcomponent/Videos/Videopanel';
import MainContent from './components/Sidebar/Maincontent/Maincontenet';
import { useUI } from './Context/Videopanelcontext';

export default function MainLayout() {
  const { showVideoPanel } = useUI();

  return (
    <>
      <Navbar />
      <div className="flex px-4">
        <Sidebar />
        {showVideoPanel ? <VideoPanel /> : <MainContent />}
        <Rightbars />
      </div>
    </>
  );
}
