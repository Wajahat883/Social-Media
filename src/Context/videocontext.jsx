// src/Context/videocontext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { openDB } from 'idb';

const VideoContext = createContext();
export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const db = await openDB('VideoDB', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('videos')) {
            db.createObjectStore('videos', { keyPath: 'id' });
          }
        },
      });

      const allVideos = await db.getAll('videos');
      setVideos(allVideos);
    };

    loadVideos();
  }, []);

  const addVideo = async (videoObj) => {
    const db = await openDB('VideoDB', 1);
    await db.add('videos', videoObj);
    const allVideos = await db.getAll('videos');
    setVideos(allVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
