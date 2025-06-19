import React, { useState } from 'react';
import { Search, Plus, Users, Globe, Lock, Settings, MoreHorizontal } from 'lucide-react';
import { useGroup } from '../../Context/Groupcontext';
import CreateGroupModal from './CreateGroupModal';
import GroupCard from './GroupCard';
import GroupDetail from './GroupDetail';

export default function GroupsMain() {
  const { groups, myGroups, joinGroup, leaveGroup } = useGroup();
  const [activeTab, setActiveTab] = useState('discover');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMyGroups = myGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedGroup) {
    return (
      <GroupDetail 
        group={selectedGroup} 
        onBack={() => setSelectedGroup(null)}
        onLeave={leaveGroup}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Groups</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Group
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search groups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('discover')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'discover'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Discover
        </button>
        <button
          onClick={() => setActiveTab('mygroups')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'mygroups'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          My Groups ({myGroups.length})
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'discover' ? (
          filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                onJoin={() => joinGroup(group.id)}
                onView={() => setSelectedGroup(group)}
                isJoined={false}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No groups found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )
        ) : (
          filteredMyGroups.length > 0 ? (
            filteredMyGroups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                onLeave={() => leaveGroup(group.id)}
                onView={() => setSelectedGroup(group)}
                isJoined={true}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">You haven't joined any groups yet</h3>
              <p className="text-gray-500 mb-4">Discover groups that match your interests</p>
              <button
                onClick={() => setActiveTab('discover')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Discover Groups
              </button>
            </div>
          )
        )}
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <CreateGroupModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}