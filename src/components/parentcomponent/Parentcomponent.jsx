// ParentComponent.jsx
import React, { useState } from 'react';
import Sidebar from '../Sidebar'

export default function ParentComponent() {
  const [activeSection, setActiveSection] = useState('Feed');

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setActiveSection(section); // ✅ sirf tab state update jab zarurat ho
    }
  };

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      {/* Baaki ka layout ya section yahan render karo */}
      <div className="flex-1 p-6 text-white">
        <h1 className="text-2xl font-bold">{activeSection}</h1>
        {/* Display content based on activeSection */}
      </div>
    </div>
  );
}
