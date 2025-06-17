import React, { useRef } from 'react'
import { Plus, Image as ImageIcon } from 'lucide-react'

export default function PhotosCard({ photos = [], updateProfile }) {
  const photoInputRef = useRef(null)

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files)
    
    Promise.all(
      files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = (e) => resolve(e.target.result)
          reader.readAsDataURL(file)
        })
      })
    ).then((newPhotos) => {
      updateProfile({ photos: [...photos, ...newPhotos] })
    })
  }

  const removePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index)
    updateProfile({ photos: updatedPhotos })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Photos</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          See all photos
        </button>
      </div>

      {photos.length === 0 ? (
        <div className="text-center py-8">
          <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 mb-4">No photos to show</p>
          <button
            onClick={() => photoInputRef.current?.click()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
          >
            <Plus className="w-4 h-4" />
            Add photos
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {photos.slice(0, 9).map((photo, index) => (
              <div key={index} className="relative group aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={photo} 
                  alt={`photo-${index}`} 
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" 
                />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-1 right-1 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm font-bold"
                >
                  ×
                </button>
              </div>
            ))}
            
            {photos.length < 9 && (
              <button
                onClick={() => photoInputRef.current?.click()}
                className="aspect-square bg-gray-100 hover:bg-gray-200 rounded-lg flex flex-col items-center justify-center transition-colors border-2 border-dashed border-gray-300"
              >
                <Plus className="w-6 h-6 text-gray-500 mb-1" />
                <span className="text-xs text-gray-500">Add photo</span>
              </button>
            )}
          </div>

          {photos.length >= 9 && (
            <button
              onClick={() => photoInputRef.current?.click()}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add more photos
            </button>
          )}
        </>
      )}

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoUpload}
        ref={photoInputRef}
        className="hidden"
      />
    </div>
  )
}