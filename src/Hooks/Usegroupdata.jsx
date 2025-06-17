import { useState, useEffect, useCallback } from 'react';

export const useGroupsData = () => {
  const [myGroups, setMyGroups] = useState([]);
  const [discoverGroups, setDiscoverGroups] = useState([]);
  const [groupPosts, setGroupPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState({ groupActivity: 0 });

  useEffect(() => {
    loadMyGroups();
    loadDiscoverGroups();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkGroupActivity();
    }, 45000); // Check every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const loadMyGroups = async () => {
    try {
      setLoading(true);
      const data = await fetchMyGroups();
      setMyGroups(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const loadDiscoverGroups = async () => {
    try {
      const data = await fetchDiscoverGroups();
      setDiscoverGroups(data);
    } catch (err) {
      console.error('Failed to load discover groups:', err);
    }
  };

  const joinGroup = useCallback(async (groupId) => {
    try {
      await joinGroupAPI(groupId);
      
      // Move from discover to my groups
      const group = discoverGroups.find(g => g.id === groupId);
      if (group) {
        setMyGroups(prev => [...prev, { ...group, isJoined: true, role: 'member' }]);
        setDiscoverGroups(prev => prev.filter(g => g.id !== groupId));
      }
    } catch (err) {
      setError('Failed to join group');
    }
  }, [discoverGroups]);

  const leaveGroup = useCallback(async (groupId) => {
    try {
      await leaveGroupAPI(groupId);
      setMyGroups(prev => prev.filter(g => g.id !== groupId));
    } catch (err) {
      setError('Failed to leave group');
    }
  }, []);

  const loadGroupPosts = useCallback(async (groupId) => {
    try {
      if (!groupPosts[groupId]) {
        const posts = await fetchGroupPosts(groupId);
        setGroupPosts(prev => ({
          ...prev,
          [groupId]: posts
        }));
      }
    } catch (err) {
      setError('Failed to load group posts');
    }
  }, [groupPosts]);

  const createGroupPost = useCallback(async (groupId, postData) => {
    try {
      const newPost = await createGroupPostAPI(groupId, postData);
      setGroupPosts(prev => ({
        ...prev,
        [groupId]: [newPost, ...(prev[groupId] || [])]
      }));
      return newPost;
    } catch (err) {
      setError('Failed to create group post');
      throw err;
    }
  }, []);

  const checkGroupActivity = async () => {
    try {
      const activityCount = await getGroupActivityCount();
      setNotifications(prev => ({ ...prev, groupActivity: activityCount }));
    } catch (err) {
      console.error('Failed to check group activity:', err);
    }
  };

  return {
    myGroups,
    discoverGroups,
    groupPosts,
    loading,
    error,
    notifications,
    joinGroup,
    leaveGroup,
    loadGroupPosts,
    createGroupPost,
    refreshData: loadMyGroups
  };
};

// Mock API functions for Groups
const fetchMyGroups = async () => {
  await new Promise(resolve => setTimeout(resolve, 900));
  return [
    {
      id: 1,
      name: "React Developers Community",
      description: "A place for React developers to share knowledge",
      coverImage: "/groups/react-cover.jpg",
      profileImage: "/groups/react-logo.jpg",
      memberCount: 45230,
      dailyPosts: 45,
      category: "Technology",
      privacy: "public",
      role: "member",
      isJoined: true,
      joinDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
      recentActivity: {
        postsToday: 45,
        newMembers: 12,
        lastActive: new Date(Date.now() - 5 * 60 * 1000)
      }
    }
  ];
};

const fetchDiscoverGroups = async () => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return [
    {
      id: 2,
      name: "Photography Enthusiasts",
      description: "Share your best shots and learn from fellow photographers",
      coverImage: "/groups/photo-cover.jpg",
      profileImage: "/groups/camera-logo.jpg",
      memberCount: 32800,
      dailyPosts: 23,
      category: "Art & Photography",
      privacy: "public",
      role: null,
      isJoined: false
    }
  ];
};

const fetchGroupPosts = async (groupId) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [];
};

const joinGroupAPI = async (groupId) => {
  await new Promise(resolve => setTimeout(resolve, 600));
};

const leaveGroupAPI = async (groupId) => {
  await new Promise(resolve => setTimeout(resolve, 500));
};

const createGroupPostAPI = async (groupId, postData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: Date.now(),
    ...postData,
    timestamp: new Date(),
    likes: 0,
    comments: 0
  };
};

const getGroupActivityCount = async () => {
  return Math.floor(Math.random() * 8);
};