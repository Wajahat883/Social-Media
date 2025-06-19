import React, { memo } from 'react';
import Navbar from '../../components/Topbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Rightbars from '../../components/Rightbar/Rightbar';
import './Home.css';
import { Routes, Route } from 'react-router-dom';
import MainContent from '../../components/Sidebar/Maincontent/Maincontenet';
import { UIProvider } from '../../components/Sidebar/sharecontext/Sharecontext';
import { UEProvider } from '../../Context/Videopanelcontext';
import VideoPanel from '../../components/Sidebar/Allsidebarcomponent/Videos/Videopanel';
import { VideoProvider } from '../../Context/videocontext';
import { useUI } from '../../Context/Videopanelcontext';
import GroupDetail from '../../components/Sidebar/Group/GroupList';
import GroupPage from '../../components/Sidebar/Group/Group';
import { useLocation } from 'react-router-dom';
import { GroupProvider } from '../../Context/Groupcontext';
import { ProductProvider } from '../../Context/Productcontext';

import { MessageProvider, useMessage } from '../../Context/Messagecontext';
import Messages from '../../components/Sidebar/Allsidebarcomponent/Message/Messages';



function HomeContent() {
  const { showVideoPanel } = useUI();
  const { showMessages } = useMessage();
  const location = useLocation();

  return (
    <div className="flex flex-1 px-4 space-x-4 overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 hidden lg:block overflow-y-auto custom-scroll">
        <Sidebar />
      </div>

      {/* Center Content */}
      <div className="flex-1 overflow-y-auto custom-scroll">
        {showMessages ? (
          <Messages />
        ) : location.pathname.startsWith('/groups') ? (
          location.pathname === '/groups' ? <GroupPage /> : <GroupDetail />
        ) : showVideoPanel ? (
          <VideoPanel />
        ) : (
          <MainContent />
        )}
      </div>

      {/* Rightbar */}
      <div className="w-80 hidden lg:block overflow-y-auto custom-scroll">
        <Rightbars />
      </div>
    </div>
  );

}

function Home() {
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
          <GroupProvider>
            <VideoProvider>
              <MessageProvider>
                <HomeContent />
              </MessageProvider>
            </VideoProvider>
          </GroupProvider>

        </UIProvider>
      </UEProvider>
    </div>
  );
}
export default memo(Home)