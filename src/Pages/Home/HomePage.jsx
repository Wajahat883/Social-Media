// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../../components/Topbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from "../../components/Sidebar/Maincontent/Maincontenet"
import Rightbar from '../../components/Rightbar/rightbar';
import { VideoProvider } from '../../Context/videocontext';
import { UIProvider } from '../../components/Sidebar/sharecontext/Sharecontext';
import { UEProvider } from '../../Context/Videopanelcontext';
import { useUI } from '../../Context/Videopanelcontext';
import VideoPanel from '../../components/Sidebar/Allsidebarcomponent/Videos/Videopanel';

function HomeContent() {
  const { showVideoPanel } = useUI();

  return (
    <div className="flex px-4">
      <Sidebar />
      {showVideoPanel ? <VideoPanel /> : <MainContent />}
      <Rightbar />
    </div>
  );
}

export default function HomePage() {
  return (
    <UEProvider>
      <UIProvider>
        <VideoProvider>
          <Navbar />
          <HomeContent />
        </VideoProvider>
      </UIProvider>
    </UEProvider>

  );
}
