// Videopanelcontext.jsx
import React from 'react';
import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UEProvider = ({ children }) => {
  const [showVideoPanel, setShowVideoPanel] = useState(false);
<<<<<<< HEAD
  const [showMessages, setShowMessages] = useState(false);
=======
>>>>>>> ce2b804 (add video plane)

  const toggleVideoPanel = () => {
    setShowVideoPanel(prev => !prev);
  };

<<<<<<< HEAD
   const toggleMessages = () => {
    setShowMessages(!showMessages); // 👈 ADD THIS
  };
  return (
    <UIContext.Provider value={{ showVideoPanel, toggleVideoPanel,showMessages, toggleMessages }}>
=======
  return (
    <UIContext.Provider value={{ showVideoPanel, toggleVideoPanel }}>
>>>>>>> ce2b804 (add video plane)
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
