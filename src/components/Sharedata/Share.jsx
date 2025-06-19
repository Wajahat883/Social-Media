import React, { useState, useRef } from 'react';
import { Camera, Image, Smile, Users, X, Send, Video } from 'lucide-react';
import { usePost } from '../post/postcontext';
import { useNotification } from '../../Context/NotificationContext';

import TagPeople from '../Tagpeople/Tagpeople';
import FeelingActivity from '../Feeling/Feelingactivity';

export default function Share() {
  const [postText, setPostText] = useState('');                                                                  
  const [selectedImages, setSelectedImages] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [taggedPeople, setTaggedPeople] = useState([]);
  const fileInputRef = useRef(null);

  const { addPost } = usePost();
  const { addNotification } = useNotification(); 

  const currentUser = {
    name: "Waji",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Waji",
    id: "user123"
  };

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    files.forEach(file => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = {
            id: Date.now() + Math.random(),
            file: file,
            preview: event.target.result,
            name: file.name
          };
          setSelectedImages(prev => {
            const updated = [...prev, newImage];
            setShowImagePreview(updated.length > 0);
            return updated;
          });
        };
        reader.readAsDataURL(file);
      }
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (imageId) => {
    const updatedImages = selectedImages.filter(img => img.id !== imageId);
    setSelectedImages(updatedImages);
    setShowImagePreview(updatedImages.length > 0);
  };

  const handlePost = async () => {
    if (!postText.trim() && selectedImages.length === 0 && !selectedFeeling) return;
    setIsPosting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newPost = {
        text: postText,
        images: selectedImages.map(img => img.preview),
        tagged: taggedPeople,
        feeling: selectedFeeling,
        user: currentUser,
        timestamp: new Date()
      };

      addPost(newPost);

      // ✅ Notification Logic
      let message = 'posted something.';
      const isVideo = selectedImages.some(img =>
        img.name.toLowerCase().endsWith('.mp4') || img.name.toLowerCase().endsWith('.mov')
      );

      if (selectedImages.length > 0) {
        message = isVideo ? 'uploaded a video.' : 'uploaded a photo.';
      }

      addNotification({
        user: currentUser.name,
        message: message,
        time: 'Just now',
        avatar: currentUser.avatar,
        icon: isVideo ? Video : Camera,
        color: isVideo ? 'text-red-500' : 'text-green-600',
        bgColor: isVideo ? 'bg-red-100' : 'bg-green-100'
      });

      // Reset State
      setPostText('');
      setSelectedImages([]);
      setTaggedPeople([]);
      setSelectedFeeling(null);
      setShowImagePreview(false);
    } catch (error) {
      console.error('Error posting:', error);
    } finally {
      setIsPosting(false);
    }
  };

  const triggerImageSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full object-cover" />
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder={`What's on your mind, ${currentUser.name}?`}
            className="w-full bg-gray-50 rounded-md px-4 py-2 text-gray-700 placeholder-gray-500 border-none outline-none resize-none overflow-hidden min-h-[40px] max-h-32"
            rows="1"
            onInput={(e) => {
              e.target.style.height = '40px';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
          />
        </div>

        {(taggedPeople.length > 0 || selectedFeeling) && (
          <div className="mt-2 text-sm text-gray-600 space-y-1">
            {taggedPeople.length > 0 && (
              <div>
                With{' '}
                {taggedPeople.map((person, index) => (
                  <span key={person.id} className="font-medium text-blue-600">
                    {person.name}
                    {index < taggedPeople.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            )}
            {selectedFeeling && (
              <div>
                Feeling{' '}
                <span className="font-medium text-yellow-600">
                  {selectedFeeling.emoji} {selectedFeeling.name}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {showImagePreview && selectedImages.length > 0 && (
        <div className="px-4 py-3 border-b border-gray-100">
          <div className={`grid gap-2 ${
            selectedImages.length === 1 ? 'grid-cols-1' :
            selectedImages.length === 2 ? 'grid-cols-2' :
            'grid-cols-2 md:grid-cols-3'
          }`}>
            {selectedImages.map((image) => (
              <div key={image.id} className="relative group">
                <img src={image.preview} alt={image.name || "Uploaded preview"} className={`w-full object-cover rounded-lg ${selectedImages.length === 1 ? 'h-64' : 'h-32'}`} />
                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute top-2 right-2 bg-gray-800 bg-opacity-60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-80"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={triggerImageSelect}
              className={`border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-colors ${selectedImages.length === 1 ? 'h-64' : 'h-32'}`}
            >
              <div className="text-center text-gray-500">
                <Camera size={24} className="mx-auto mb-1" />
                <span className="text-sm">Add Photo</span>
              </div>
            </button>
          </div>
        </div>
      )}

      <div className="px-4 py-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center flex-wrap gap-2">
            <button onClick={triggerImageSelect} className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-600">
              <Image size={20} className="text-green-500" />
              <span className="text-sm font-medium">Photo/video</span>
            </button>

            <TagPeople selectedTags={taggedPeople} onTagsChange={setTaggedPeople} />
            <FeelingActivity selectedFeeling={selectedFeeling} onSelectionChange={setSelectedFeeling} />
          </div>

          <button
            onClick={handlePost}
            disabled={(!postText.trim() && selectedImages.length === 0 && !selectedFeeling) || isPosting}
            className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
              (!postText.trim() && selectedImages.length === 0 && !selectedFeeling) || isPosting
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
            }`}
          >
            {isPosting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Posting...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Post</span>
              </>
            )}
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleImageSelect}
        className="hidden"
      />
    </div>
  );
}
