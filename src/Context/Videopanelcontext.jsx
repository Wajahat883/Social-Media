// Videopanelcontext.jsx
import React from 'react';
import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UEProvider = ({ children }) => {
  const [showVideoPanel, setShowVideoPanel] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const toggleVideoPanel = () => {
    setShowVideoPanel(prev => !prev);
  };

   const toggleMessages = () => {
    setShowMessages(!showMessages); // 👈 ADD THIS
  };
  return (
    <UIContext.Provider value={{ showVideoPanel, toggleVideoPanel,showMessages, toggleMessages }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
