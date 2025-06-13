import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginpage from './Pages/loginpage/Loginpage';
import HomePage from './Pages/Home/HomePage';
import Profile from './Pages/profile/Profile';
import Homes from './Pages/Home/Home';
import Signup from './Pages/signup/Signup';
// import { useAuth } from './Hooks/Auth/UseAuth';

export default function App() {
  // const { currentUser } = useAuth();

  return (
    <>
    
      <ToastContainer position="top-right" autoClose={2000} />

    
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/login' element={<Loginpage />} /> */}
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='/homepage' element={<HomePage />} />
      </Routes>
    </>
  );
}
