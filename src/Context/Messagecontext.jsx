import React from 'react';
import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [showMessages, setShowMessages] = useState(false);

  // ✅ Toggle function
  const toggleMessage = () => setShowMessages(prev => !prev);

  return (
    <MessageContext.Provider value={{ showMessages, setShowMessages, toggleMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);

