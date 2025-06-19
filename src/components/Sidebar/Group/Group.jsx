// components/Sidebar/Group/Group.jsx
import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useGroup } from '../../../Context/Groupcontext';

 function  GroupPage() {
  const { groups } = useGroup();

  return (
    <div className="max-w-4xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-bold text-white mb-6">Discover Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {groups.map((group) => (
          <Link key={group.id} to={`/groups/${group.id}`} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition">
            <div className="flex items-center gap-4">
              <img src={group.avatar} className="w-14 h-14 rounded-full object-cover" alt={group.name} />
              <div>
                <h3 className="text-lg text-white font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-400">{group.members.length} members</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default memo(GroupPage)