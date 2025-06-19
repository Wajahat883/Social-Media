import React from 'react';
import { MapPin } from 'lucide-react';

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Today's Picks</h2>
    <div className="flex items-center text-blue-600">
      <MapPin className="w-4 h-4 mr-1" />
      <span>Pakistan · 65 km</span>
    </div>
  </div>
);

export default Header;
