import React, { memo, useEffect } from 'react';
import gift1 from '../../assets/Pics/gift1.jpg';
import nature7 from '../../assets/Pics/nature7.jpg';
import { MoreUsers } from '../../dummydata/dummydata';
import Onlinefriends from '../online/Onlinefriends';
import ImageCompressor from '../../Imagecompressor/Imagecompressor';

 function Rightbars({ profile }) {

  useEffect(() => {
    const allImages = document.querySelectorAll("img");
    allImages.forEach((img) => ImageCompressor(img));
  }, []);

  const Homerightbar = () => {
    return (
      <>
        <div className="flex items-center space-x-3">
          <img className="w-8 h-8 object-cover" src={gift1} alt="birthday gift" />
          <span className="text-sm text-gray-700">
            <b>pola faster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>

        <img className="w-full h-40 object-cover rounded-lg" src={nature7} alt="Advertisement" />

        <h4 className="text-sm font-semibold text-gray-700">Online Friends</h4>
        <ul className="space-y-3">
          {MoreUsers.map((u) => (
            <Onlinefriends key={u.id} users={u} />
          ))}
        </ul>
      </>
    );
  };

  const Profilerightbar = () => {
    return (
      <>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">User Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between"><span className="font-medium">City:</span><span>New York</span></div>
          <div className="flex justify-between"><span className="font-medium">From:</span><span>Madrid</span></div>
          <div className="flex justify-between"><span className="font-medium">Relationship:</span><span>Single</span></div>
        </div>

        <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">User Friends</h4>
        <div className="grid grid-cols-3 gap-4">
          {MoreUsers.slice(0, 6).map((user) => (
            <div key={user.id} className="text-center">
              <img src={user.profilePicture} alt="" className="w-16 h-16 rounded-full object-cover mx-auto" />
              <span className="text-xs">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-4 space-y-4">
      {profile ? <Profilerightbar /> : <Homerightbar />}
    </div>
  );
}
export default memo(Rightbars)