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
import { MessageProvider } from '../../Context/Messagecontext';
import { useMessage } from '../../Context/Messagecontext';
import Messages from '../../components/Sidebar/Allsidebarcomponent/Message/Messages';

function HomeContent() {
  const { showVideoPanel } = useUI();
  const {showMessages}=useMessage

  return (
    <div className="flex px-4">
       <Sidebar />
      {showMessages ? (
        <Messages />
      ) : showVideoPanel ? (
        <VideoPanel />
      ) : (
        <MainContent />
      )}
      <Rightbar />
    </div>
  );
}

export default function HomePage() {
  return (
    <UEProvider>
      <UIProvider>
        <VideoProvider>
          <MessageProvider>
            {/* <Navbar /> */}
          <HomeContent />
          </MessageProvider>
        
        </VideoProvider>
      </UIProvider>
    </UEProvider>

  );
}
