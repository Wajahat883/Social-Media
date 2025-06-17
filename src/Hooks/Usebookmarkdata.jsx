import { useState, useEffect, useCallback } from 'react';

export const useBookmarksData = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState({});

  useEffect(() => {
    loadBookmarks();
    loadCollections();
  }, []);

  const loadBookmarks = async () => {
    try {
      setLoading(true);
      const data = await fetchBookmarks();
      setBookmarks(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const loadCollections = async () => {
    try {
      const data = await fetchCollections();
      setCollections(data);
    } catch (err) {
      console.error('Failed to load collections:', err);
    }
  };

  const addBookmark = useCallback(async (item) => {
    try {
      const bookmark = await addBookmarkAPI(item);
      setBookmarks(prev => [bookmark, ...prev]);
      return bookmark;
    } catch (err) {
      setError('Failed to add bookmark');
      throw err;
    }
  }, []);

  const removeBookmark = useCallback(async (bookmarkId) => {
    try {
      await removeBookmarkAPI(bookmarkId);
      setBookmarks(prev => prev.filter(b => b.id !== bookmarkId));
    } catch (err) {
      setError('Failed to remove bookmark');
    }
  }, []);

  const createCollection = useCallback(async (name, description) => {
    try {
      const collection = await createCollectionAPI(name, description);
      setCollections(prev => [...prev, collection]);
      return collection;
    } catch (err) {
      setError('Failed to create collection');
      throw err;
    }
  }, []);

  const addToCollection = useCallback(async (bookmarkId, collectionId) => {
    try {
      await addToCollectionAPI(bookmarkId, collectionId);
      setBookmarks(prev => prev.map(bookmark => 
        bookmark.id === bookmarkId 
          ? { ...bookmark, collections: [...(bookmark.collections || []), collectionId] }
          : bookmark
      ));
    } catch (err) {
      setError('Failed to add to collection');
    }
  }, []);

  return {
    bookmarks,
    collections,
    loading,
    error,
    notifications,
    addBookmark,
    removeBookmark,
    createCollection,
    addToCollection,
    refreshData: loadBookmarks
  };
};

// Mock API functions for Bookmarks
const fetchBookmarks = async () => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return [
    {
      id: 1,
      type: "article",
      title: "Advanced React Patterns and Best Practices",
      url: "https://medium.com/react-patterns",
      source: "Medium",
      author: "React Expert",
      savedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      thumbnail: "/bookmarks/react-article.jpg",
      description: "Learn advanced patterns for React development",
      tags: ["react", "javascript", "programming"],
      readTime: "12 min read",
      isRead: false,
      collections: []
    }
  ];
};

const fetchCollections = async () => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return [
    {
      id: 1,
      name: "React Resources",
      description: "Best React learning materials",
      itemCount: 15,
      createdDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    }
  ];
};

const addBookmarkAPI = async (item) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    id: Date.now(),
    ...item,
    savedDate: new Date(),
    isRead: false,
    collections: []
  };
};

const removeBookmarkAPI = async (bookmarkId) => {
  await new Promise(resolve => setTimeout(resolve, 300));
};

const createCollectionAPI = async (name, description) => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return {
    id: Date.now(),
    name,
    description,
    itemCount: 0,
    createdDate: new Date()
  };
};

const addToCollectionAPI = async (bookmarkId, collectionId) => {
  await new Promise(resolve => setTimeout(resolve, 300));
};
