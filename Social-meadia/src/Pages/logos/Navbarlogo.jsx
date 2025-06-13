import React from 'react';


export default function Navbarlogo() {
  return (
    <div className="w-12 h-12 relative flex items-center justify-center">
      {/* Diagonal Bar ↘️ */}
      <div className="absolute w-10 h-1.5 bg-gradient-to-r from-pink-500 to-yellow-400 transform rotate-45 rounded-full shadow-md" />

      {/* Diagonal Bar ↙️ */}
      <div className="absolute w-10 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -rotate-45 rounded-full shadow-md" />
    </div>
  );
}
