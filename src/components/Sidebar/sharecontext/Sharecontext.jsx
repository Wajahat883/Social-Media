import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('Feed');

  const userData = {
    name: 'M. Wajahat',
    initials: 'MW',
    status: 'online',
  };

  const friends = [
    { id: 1, name: 'Ali', status: 'online' },
    { id: 2, name: 'Sara', status: 'offline' },
    { id: 3, name: 'John', status: 'online' },
    { id: 4, name: 'Zainab', status: 'offline' },
    { id: 5, name: 'Asad', status: 'online' },
  ];

  return (
    <UIContext.Provider value={{ activeSection, setActiveSection, userData, friends }}>
      {children}
    </UIContext.Provider>
  );
};
