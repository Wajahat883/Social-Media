import React, { useState, useRef, useEffect } from 'react';
import { 
  MoreHorizontal, 
  Pin, 
  Bookmark, 
  BellOff, 
  Code, 
  UserMinus,
  Edit3,
  Trash2,
  Flag,
  EyeOff
} from 'lucide-react';

export default function PostDropdownMenu({ postId, isOwnPost = false, onAction }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleMenuAction = (action, label) => {
    setIsOpen(false);
    onAction && onAction(action, postId, label);
  };

  const menuItems = [
    ...(isOwnPost ? [
      { action: 'pin', label: 'Pin Post', icon: Pin, color: 'text-gray-700' },
      { action: 'edit', label: 'Edit Post', icon: Edit3, color: 'text-gray-700' },
      { action: 'delete', label: 'Delete Post', icon: Trash2, color: 'text-red-600' },
    ] : []),
    { action: 'save', label: 'Save Post', icon: Bookmark, color: 'text-gray-700' },
    { action: 'notifications', label: 'Turn Off Notifications for This Post', icon: BellOff, color: 'text-gray-700' },
    { action: 'embed', label: 'Embed', icon: Code, color: 'text-gray-700' },
    ...(!isOwnPost ? [
      { action: 'removeTag', label: 'Remove Tag', icon: UserMinus, color: 'text-gray-700' },
      { action: 'hide', label: 'Hide Post', icon: EyeOff, color: 'text-gray-700' },
      { action: 'report', label: 'Report Post', icon: Flag, color: 'text-red-600' },
    ] : [])
  ];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700"
        aria-label="Post options"
      >
        <MoreHorizontal size={20} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" />

          {/* Dropdown Menu */}
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 max-h-96 overflow-y-auto"
          >
            {menuItems.map((item, index) => (
              <button
                key={item.action}
                onClick={() => handleMenuAction(item.action, item.label)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <item.icon size={18} className={`mr-3 ${item.color}`} />
                <span className={`text-sm font-medium ${item.color}`}>{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
