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
import { MessageProvider } from '../../Context/Messagecontext';
import { useMessage } from '../../Context/Messagecontext';
import Messages from '../../components/Sidebar/Allsidebarcomponent/Message/Messages';

function HomeContent() {
  const { showVideoPanel } = useUI();
  const { showMessages } = useMessage();

  return (
    <div className="flex flex-1 overflow-hidden px-4 mt-4 space-x-4 relative">
      <div className="w-1/4 overflow-y-auto hidden lg:block custom-scroll">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scroll">
        {showVideoPanel ? <VideoPanel /> : <MainContent />}
      </div>

      <div className="w-80 overflow-y-auto hidden lg:block custom-scroll">
        <Rightbars />
      </div>

  
      {showMessages && <Messages />}
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
            <MessageProvider>
              {/* <Navbar /> */}
            <HomeContent />
            </MessageProvider>
            
          </VideoProvider>
        </UIProvider>
      </UEProvider>
    </div>
  );
}