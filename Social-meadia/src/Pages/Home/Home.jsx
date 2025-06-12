import React from 'react';
import Navbar from '../../components/Topbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/rightbar';

export default function Homes() {
  return (
    <>
      <Navbar />
      <div className="flex px-4 mt-4 space-x-4">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="flex-1 flex space-x-4">
          <div className="w-2/3">
            <Feed />
          </div>
          <div className="w-1/3">
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
