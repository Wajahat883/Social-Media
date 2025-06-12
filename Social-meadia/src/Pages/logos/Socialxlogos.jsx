import React from 'react';
import { Users, MessageCircle, Heart } from 'lucide-react';

const Socialxlogos = () => (
  <div className="relative w-24 h-24 mb-6">
    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-2xl shadow-xl flex items-center justify-center transform rotate-3">
      <div className="flex items-center space-x-1">
        <Users className="w-8 h-8 text-white" />
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <MessageCircle className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
      <Heart className="w-3 h-3 text-white fill-white" />
    </div>
  </div>
);

export default Socialxlogos;