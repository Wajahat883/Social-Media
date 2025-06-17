// Videopanelcontext.jsx
import React from 'react';
import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UEProvider = ({ children }) => {
  const [showVideoPanel, setShowVideoPanel] = useState(false);

  const toggleVideoPanel = () => {
    setShowVideoPanel(prev => !prev);
  };

  return (
    <UIContext.Provider value={{ showVideoPanel, toggleVideoPanel }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
