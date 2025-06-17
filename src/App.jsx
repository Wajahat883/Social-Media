import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginpage from './Pages/loginpage/Loginpage';
import HomePage from './Pages/Home/HomePage';
import Profile from './Pages/profile/Profile';
import Homes from './Pages/Home/Home';
import Signup from './Pages/signup/Signup';
import { useAuth } from './Context/Authcontext';
<<<<<<< HEAD
import VideoPanel from './components/Sidebar/Allsidebarcomponent/Videos/Videopanel';
import Messages from './components/Sidebar/Allsidebarcomponent/Message/Messages';
import Layout from './Layout';
import { Navigate } from 'react-router-dom';

export default function App() {
  const { user } = useAuth();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

     <Routes>
 
  <Route path="/login" element={<Loginpage />} />
  <Route path="/signup" element={<Signup />} />

 
  <Route element={<Layout />}>
    <Route path="/" element={user ? <Homes /> : <Navigate to="/login" />} />
    <Route path="/homepage" element={<HomePage />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/videopanel" element={<VideoPanel />} />
    <Route path="/messages" element={<Messages />} />
  </Route>
</Routes>


    </>
=======

export default function App() {
  const { user  } = useAuth();

  return (
   <>
  <ToastContainer position="top-right" autoClose={4000} />
  
  <Routes>
    <Route path="/" element={user ? <Homes /> : <Loginpage />} />
    <Route path="/homepage" element={<HomePage />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<Loginpage />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
</>

>>>>>>> ce2b804 (add video plane)
  );
}
