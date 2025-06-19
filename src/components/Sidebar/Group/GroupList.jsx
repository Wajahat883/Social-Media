import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useGroup } from '../../../Context/Groupcontext';

 function GroupDetail() {
  const { id } = useParams();
  const { groups } = useGroup();

  const group = groups.find(g => g.id.toString() === id);

  if (!group) {
    return <div className="text-red-500 text-center mt-10">Group Not Found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="h-40 bg-gray-200">
        <img src={group.coverImage} className="object-cover w-full h-full" alt="Cover" />
      </div>

      <div className="flex items-center px-4 -mt-8">
        <img src={group.avatar} className="w-16 h-16 rounded-full border-4 border-white" alt="Group" />
        <div className="ml-4 flex-1">
          <h2 className="text-lg font-bold">{group.name}</h2>
          <p className="text-sm text-gray-500">{group.members.length} members</p>
        </div>
      </div>

      <div className="mt-4 px-4">
        <p className="text-sm text-gray-600 mb-4">{group.description}</p>

        <h3 className="text-md font-semibold mb-2">Posts</h3>
        <ul className="space-y-2 text-sm mb-4">
          {group.posts.map((post, i) => (
            <li key={i} className="bg-gray-100 p-2 rounded">{post}</li>
          ))}
        </ul>

        <h3 className="text-md font-semibold mb-2">Members</h3>
        <ul className="grid grid-cols-2 gap-2">
          {group.members.map((m, i) => (
            <li key={i} className="flex items-center gap-2">
              <img src={m.avatar} className="w-6 h-6 rounded-full" alt="member" />
              {m.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default memo(GroupDetail)
