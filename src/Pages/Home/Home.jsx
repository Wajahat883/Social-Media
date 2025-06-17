import React from 'react';
import Navbar from '../../components/Topbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Rightbars from '../../components/Rightbar/rightbar';
import './Home.css';
import MainContent from '../../components/Sidebar/Maincontent/Maincontenet';
import { UIProvider } from '../../components/Sidebar/sharecontext/Sharecontext';
import { UEProvider } from '../../Context/Videopanelcontext';
import VideoPanel from '../../components/Sidebar/Allsidebarcomponent/Videos/Videopanel';
import { VideoProvider } from '../../Context/videocontext';
import { useUI } from '../../Context/Videopanelcontext';

function HomeContent() {
  const { showVideoPanel } = useUI();

  return (
    <div className="flex flex-1 overflow-hidden px-4 mt-4 space-x-4">
      <div className="w-1/4 overflow-y-auto hidden lg:block custom-scroll">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scroll">
        {showVideoPanel ? <VideoPanel /> : <MainContent />}
      </div>

      <div className="w-80 overflow-y-auto hidden lg:block custom-scroll">
        <Rightbars />
      </div>
    </div>
  );
}

export default function Home() {
  const dummyUser = { name: 'John Doe', initials: 'JD', status: 'online' };
  const dummyFriends = [
    { id: 1, name: 'Alice', initials: 'A', status: 'online' },
    { id: 2, name: 'Bob', initials: 'B', status: 'offline' },
    { id: 3, name: 'Charlie', initials: 'C', status: 'online' },
    { id: 4, name: 'Daisy', initials: 'D', status: 'online' },
    { id: 5, name: 'Evan', initials: 'E', status: 'offline' },
  ];

  return (
    <div className="h-screen flex flex-col">
      <UEProvider>
        <UIProvider userData={dummyUser} friends={dummyFriends}>
          <VideoProvider>
            <Navbar />
            <HomeContent />
          </VideoProvider>
        </UIProvider>
      </UEProvider>
    </div>
  );
}