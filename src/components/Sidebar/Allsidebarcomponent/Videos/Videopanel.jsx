import React, { memo } from 'react';
import { useVideo } from '../../../../Context/videocontext';

 function VideoPanel() {
  const { videos } = useVideo();

  return (
    <div className="flex-1 px-4 py-4">
      <h2 className="text-xl font-bold mb-4 text-black">Your Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="bg-white p-3 rounded shadow">
              <h4 className="text-sm font-medium mb-2 text-black">{video.name}</h4>
              <video
                src={video.content}
                controls
                className="w-full rounded"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No videos available.</p>
        )}
      </div>
    </div>
  );
}
export default memo(VideoPanel)