import girl1 from '../assets/Pics/girl1.jpg';
import girl2 from '../assets/Pics/girl2.jpg';
import girl3 from '../assets/Pics/girl3.jpg';
import girl5 from '../assets/Pics/girl5.jpg';

import boy1 from '../assets/Pics/boy1.jpg';
import boy2 from '../assets/Pics/boy2.jpg';
import boy4 from '../assets/Pics/boy4.jpg';
import React, { createContext, useContext } from 'react';

const GroupContext = createContext();

export const useGroup = () => useContext(GroupContext);

export  function  GroupProvider({ children }) {
  const dummyGroups = [
    {
      id: 1,
      name: "React Developers",
      avatar: boy1,
      coverImage: girl1,
      description: "All about React!",
      members: [
        { name: "Ali", avatar: boy2 },
        { name: "Sara", avatar: girl2 },
        { name: "Sara", avatar: girl2 },
        { name: "Sara", avatar: girl2 },
        { name: "Sara", avatar: girl2 },
        { name: "Sara", avatar: girl2 },
        { name: "Sara", avatar: girl2 },
      ],
      posts: ["Welcome to the group!", "React 18 features are awesome!"]
    },
    {
      id: 2,
      name: "Ethical Hackers",
      avatar: girl3,
      coverImage: boy4,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    },
    {
      id: 3,
      name: "WebDevelpoer",
      avatar: girl1,
      coverImage: boy1,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    },
    {
      id: 4,
      name: "Ethical Hackers",
      avatar: girl2,
      coverImage: boy2,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    },
    {
      id: 5,
      name: "Backend-Develpoer",
      avatar: girl5,
      coverImage: boy4,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    },
    {
      id: 6,
      name: "Penitration Tester",
      avatar: girl3,
      coverImage: boy4,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    },
    {
      id: 7,
      name: "Bug-Hunter",
      avatar: girl1,
      coverImage: boy4,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
        { name: "Hina", avatar: girl5 },
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    },
    {
      id: 8,
      name: "Software Enginer",
      avatar: girl3,
      coverImage: boy1,
      description: "We talk security here",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 }
      ],
      posts: ["Hack the Planet", "New tools in Kali"]
    }
  ];

  return (
    <GroupContext.Provider value={{ groups: dummyGroups }}>
      {children}
    </GroupContext.Provider>
  );
}