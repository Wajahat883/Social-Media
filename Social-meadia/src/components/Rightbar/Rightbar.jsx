import React from 'react'
import gift1 from '../../assets/Pics/gift1.jpg'
import nature7 from '../../assets/Pics/nature7.jpg'
import { MoreUsers } from '../../dummydata/dummydata'
import Onlinefriends from '../online/Onlinefriends'

export default function Rightbars() {
  return (
    <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-4 space-y-4">
      
     
      <div className="flex items-center space-x-3">
        <img
          className="w-8 h-8 object-cover"
          src={gift1}
          alt="birthday gift"
        />
        <span className="text-sm text-gray-700">
          <b>pola faster</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>

     
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={nature7}
        alt="Advertisement"
      />

      
      <h4 className="text-sm font-semibold text-gray-700">Online Friends</h4>

      
      <ul className="space-y-3">
       {MoreUsers.map(u=>(
        <Onlinefriends key={u.id} users={u}/>
       ))}
      </ul>
      
    </div>
  )
}
