import React from 'react';
import { ShoppingBag, Bell, Mail, Settings, ChevronRight, Plus, MapPin } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: ShoppingBag, label: 'Browse All', active: true },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Inbox' },
    { icon: Settings, label: 'Marketplace Access' },
    { icon: ShoppingBag, label: 'Buying', hasChevron: true }
  ];

  return (
    <aside className="w-80 p-4 border-r bg-white overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      <nav className="space-y-2">
        {menuItems.map((item, i) => (
          <div key={i} className={`flex justify-between items-center p-2 rounded hover:bg-gray-100 ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}>
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </div>
            {item.hasChevron && <ChevronRight className="w-4 h-4" />}
          </div>
        ))}
      </nav>

      <div className="mt-6">
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create new listing
        </button>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Location</h3>
        <div className="flex items-center text-blue-600">
          <MapPin className="w-4 h-4 mr-1" />
          Wah, Pakistan • 65 km
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
