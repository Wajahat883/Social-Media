import React from 'react';
import Navbar from '../../components/Topbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../components/Sidebar/Maincontent/Maincontenet';
import Rightbar from '../../components/Rightbar/rightbar';

import { VideoProvider } from '../../Context/videocontext';
import { UIProvider } from '../../components/Sidebar/sharecontext/Sharecontext';
import { UEProvider, useUI } from '../../Context/Videopanelcontext';

import { MessageProvider, useMessage } from '../../Context/Messagecontext';
import Messages from '../../components/Sidebar/Allsidebarcomponent/Message/Messages';
import VideoPanel from '../../components/Sidebar/Allsidebarcomponent/Videos/Videopanel';

// ✅ HomeContent Component
function HomeContent() {
  const { showVideoPanel } = useUI();
  const { showMessages } = useMessage();

  return (
    <div className="flex flex-1 px-4 mt-4 space-x-4">
      {/* Left Sidebar */}
      <div className="w-1/4 hidden lg:block overflow-y-auto custom-scroll">
        <Sidebar />
      </div>

      {/* Center Panel */}
      <div className="flex-1 overflow-y-auto custom-scroll">
        {showMessages ? <Messages /> : showVideoPanel ? <VideoPanel /> : <MainContent />}
      </div>

      {/* Right Sidebar */}
      <div className="w-80 hidden lg:block overflow-y-auto custom-scroll">
        <Rightbar />
      </div>
    </div>
  );
}

// ✅ Main HomePage Component
export default function HomePage() {
  return (
    <UEProvider>
      <UIProvider>
        <VideoProvider>
          <MessageProvider>

            {/* Top Navbar */}
            {/* <Navbar /> */}

            {/* Page Content */}
            <HomeContent />

          </MessageProvider>
        </VideoProvider>
      </UIProvider>
    </UEProvider>
  );
}
