// src/components/Allsidebarcomponent/Videos/Videos.jsx
import React, { useRef, useState } from 'react';
import { useVideo } from '../../../../Context/videocontext';
import { v4 as uuidv4 } from 'uuid';

export default function Videos() {
  const { videos, addVideo } = useVideo();
  const fileInputRef = useRef();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo({
          id: uuidv4(),
          name: file.name,
          content: reader.result, 
        });
      };
      //ya yah par 64 base video ko convert kar rh ha 
      
      reader.readAsDataURL(file); 
    }
  };

  const handlePostVideo = () => {
    if (selectedVideo) {
      addVideo(selectedVideo);
      setSelectedVideo(null);
      fileInputRef.current.value = '';
    } else {
      alert("Pehle video choose karo!");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-black">Upload a Video</h2>

      <div className="flex space-x-4">
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="text-black"
        />
        <button
          onClick={handlePostVideo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Video
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-gray-200 p-4 rounded-md">
            <h4 className="text-black mb-2">{video.name}</h4>
            <video controls src={video.content} className="w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
