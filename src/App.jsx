import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginpage from './Pages/loginpage/Loginpage';
import HomePage from './Pages/Home/HomePage';
import Profile from './Pages/profile/Profile';
import EnhancedProfile from './Pages/profile/EnhancedProfile';
import Homes from './Pages/Home/Home';
import Signup from './Pages/signup/Signup';
import { useAuth } from './Context/Authcontext';
import VideoPanel from './components/Sidebar/Allsidebarcomponent/Videos/Videopanel';
import EnhancedVideoPanel from './components/Sidebar/Allsidebarcomponent/Videos/EnhancedVideoPanel';
import Messages from './components/Sidebar/Allsidebarcomponent/Message/Messages';
import Layout from './Layout';
import { Navigate } from 'react-router-dom';
import Marketplace from './components/Topbar/Market/Marketrender';
import GroupsMain from './components/Groups/GroupsMain';

export default function App() {
  const { user } = useAuth();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/*" element={user ? <Homes /> : <Navigate to="/login" />} />
          <Route path="/store" element={<Marketplace />} />
          <Route path="/groups" element={<GroupsMain />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/enhanced-profile" element={<EnhancedProfile />} />
          <Route path="/videopanel" element={<VideoPanel />} />
          <Route path="/enhanced-videos" element={<EnhancedVideoPanel />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
    </>
  );
}