import girl1 from '../assets/Pics/girl1.jpg';
import girl2 from '../assets/Pics/girl2.jpg';
import girl3 from '../assets/Pics/girl3.jpg';
import girl5 from '../assets/Pics/girl5.jpg';
import boy1 from '../assets/Pics/boy1.jpg';
import boy2 from '../assets/Pics/boy2.jpg';
import boy4 from '../assets/Pics/boy4.jpg';
import React, { createContext, useContext, useState } from 'react';

const GroupContext = createContext();

export const useGroup = () => useContext(GroupContext);

export function GroupProvider({ children }) {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "React Developers",
      avatar: boy1,
      coverImage: girl1,
      description: "A community for React developers to share knowledge, tips, and best practices. Join us to learn and grow together!",
      privacy: "public",
      category: "technology",
      members: [
        { name: "Ali", avatar: boy2 },
        { name: "Sara", avatar: girl2 },
        { name: "Ahmed", avatar: boy1 },
        { name: "Fatima", avatar: girl3 },
        { name: "Hassan", avatar: boy4 },
        { name: "Aisha", avatar: girl5 },
      ],
      posts: ["Welcome to the group!", "React 18 features are awesome!", "Check out this new hook pattern!"],
      dailyPosts: 12,
      createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      name: "Ethical Hackers",
      avatar: girl3,
      coverImage: boy4,
      description: "Cybersecurity professionals and ethical hackers sharing knowledge about penetration testing, security tools, and best practices.",
      privacy: "private",
      category: "technology",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Omar", avatar: boy2 },
        { name: "Zara", avatar: girl2 },
      ],
      posts: ["Hack the Planet", "New tools in Kali", "OWASP Top 10 discussion"],
      dailyPosts: 8,
      createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      name: "Web Developers",
      avatar: girl1,
      coverImage: boy1,
      description: "Full-stack web developers sharing resources, tutorials, and discussing the latest web technologies.",
      privacy: "public",
      category: "technology",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Bilal", avatar: boy4 },
        { name: "Maryam", avatar: girl3 },
        { name: "Usman", avatar: boy2 },
      ],
      posts: ["New CSS Grid tutorial", "JavaScript ES2024 features", "Best practices for responsive design"],
      dailyPosts: 15,
      createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000)
    },
    {
      id: 4,
      name: "Photography Club",
      avatar: girl2,
      coverImage: boy2,
      description: "Photography enthusiasts sharing their work, techniques, and discussing camera equipment.",
      privacy: "public",
      category: "art",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Kamran", avatar: boy4 },
        { name: "Ayesha", avatar: girl1 },
      ],
      posts: ["Golden hour shots", "Portrait photography tips", "Best camera settings for landscapes"],
      dailyPosts: 6,
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    },
    {
      id: 5,
      name: "Backend Developers",
      avatar: girl5,
      coverImage: boy4,
      description: "Backend developers discussing server-side technologies, databases, APIs, and system architecture.",
      privacy: "public",
      category: "technology",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Tariq", avatar: boy2 },
        { name: "Sana", avatar: girl3 },
        { name: "Fahad", avatar: boy4 },
        { name: "Nadia", avatar: girl2 },
        { name: "Asad", avatar: boy1 },
        { name: "Rabia", avatar: girl1 },
      ],
      posts: ["Microservices architecture", "Database optimization tips", "API security best practices"],
      dailyPosts: 10,
      createdAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000)
    },
    {
      id: 6,
      name: "Penetration Testers",
      avatar: girl3,
      coverImage: boy4,
      description: "Professional penetration testers sharing methodologies, tools, and security research findings.",
      privacy: "private",
      category: "technology",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Shahid", avatar: boy4 },
        { name: "Kiran", avatar: girl2 },
        { name: "Adnan", avatar: boy2 },
        { name: "Farah", avatar: girl3 },
        { name: "Imran", avatar: boy1 },
      ],
      posts: ["OSCP preparation guide", "Web application testing methodology", "Network penetration testing tools"],
      dailyPosts: 5,
      createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000)
    },
    {
      id: 7,
      name: "Bug Hunters",
      avatar: girl1,
      coverImage: boy4,
      description: "Bug bounty hunters and security researchers sharing findings, techniques, and platform discussions.",
      privacy: "public",
      category: "technology",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 },
        { name: "Waqas", avatar: boy2 },
        { name: "Samina", avatar: girl3 },
        { name: "Rizwan", avatar: boy4 },
        { name: "Bushra", avatar: girl2 },
        { name: "Kashif", avatar: boy1 },
        { name: "Rubina", avatar: girl1 },
        { name: "Naveed", avatar: boy2 },
      ],
      posts: ["HackerOne vs Bugcrowd comparison", "XSS payload collection", "Mobile app security testing"],
      dailyPosts: 18,
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000)
    },
    {
      id: 8,
      name: "Software Engineers",
      avatar: girl3,
      coverImage: boy1,
      description: "Software engineers discussing coding practices, career advice, and industry trends.",
      privacy: "public",
      category: "technology",
      members: [
        { name: "Zain", avatar: boy1 },
        { name: "Hina", avatar: girl5 }
      ],
      posts: ["Clean code principles", "System design interviews", "Career growth in tech"],
      dailyPosts: 7,
      createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000)
    }
  ]);

  const [myGroups, setMyGroups] = useState([
    {
      id: 1,
      name: "React Developers",
      avatar: boy1,
      coverImage: girl1,
      description: "A community for React developers to share knowledge, tips, and best practices.",
      privacy: "public",
      category: "technology",
      members: [
        { name: "Ali", avatar: boy2 },
        { name: "Sara", avatar: girl2 },
        { name: "Ahmed", avatar: boy1 },
        { name: "Fatima", avatar: girl3 },
      ],
      posts: ["Welcome to the group!", "React 18 features are awesome!"],
      dailyPosts: 12,
      role: "member",
      joinDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    }
  ]);

  const joinGroup = (groupId) => {
    const group = groups.find(g => g.id === groupId);
    if (group && !myGroups.find(g => g.id === groupId)) {
      setMyGroups(prev => [...prev, { ...group, role: "member", joinDate: new Date() }]);
      // Remove from discover groups
      setGroups(prev => prev.filter(g => g.id !== groupId));
    }
  };

  const leaveGroup = (groupId) => {
    const group = myGroups.find(g => g.id === groupId);
    if (group) {
      setMyGroups(prev => prev.filter(g => g.id !== groupId));
      // Add back to discover groups
      setGroups(prev => [...prev, group]);
    }
  };

  const createGroup = (groupData) => {
    const newGroup = {
      ...groupData,
      id: Date.now(),
      members: [],
      posts: [],
      dailyPosts: 0
    };
    setMyGroups(prev => [...prev, { ...newGroup, role: "admin", joinDate: new Date() }]);
  };

  return (
    <GroupContext.Provider value={{ 
      groups, 
      myGroups, 
      joinGroup, 
      leaveGroup, 
      createGroup 
    }}>
      {children}
    </GroupContext.Provider>
  );
}