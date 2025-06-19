import React from 'react';
import Navbar from './components/Topbar/Navbar';
import { Outlet } from 'react-router-dom';
import Messages from './components/Sidebar/Allsidebarcomponent/Message/Messages';
import { useMessage } from './Context/Messagecontext';

export default function Layout() {
  const { showMessages } = useMessage();

  return (
    <>
      <Navbar />
      <div >
        <Outlet />

      
        {showMessages && (
          
            <Messages />
          
        )}
      </div>
    </>
  );
}
