import React, { useState, useRef, useEffect } from 'react';
import { Smile, Search, X } from 'lucide-react';

export default function FeelingActivity({ onSelectionChange, selectedFeeling = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('feelings');
  const [filteredItems, setFilteredItems] = useState([]);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const feelings = [
    { id: 1, name: 'happy', emoji: '😊', category: 'positive' },
    { id: 2, name: 'excited', emoji: '🤩', category: 'positive' },
    { id: 3, name: 'grateful', emoji: '🙏', category: 'positive' },
    { id: 4, name: 'loved', emoji: '🥰', category: 'positive' },
    { id: 5, name: 'blessed', emoji: '✨', category: 'positive' },
    { id: 6, name: 'proud', emoji: '😤', category: 'positive' },
    { id: 7, name: 'relaxed', emoji: '😌', category: 'positive' },
    { id: 8, name: 'motivated', emoji: '💪', category: 'positive' },
    { id: 9, name: 'sad', emoji: '😢', category: 'negative' },
    { id: 10, name: 'tired', emoji: '😴', category: 'negative' },
    { id: 11, name: 'stressed', emoji: '😰', category: 'negative' },
    { id: 12, name: 'confused', emoji: '😕', category: 'negative' },
    { id: 13, name: 'annoyed', emoji: '😤', category: 'negative' },
    { id: 14, name: 'nostalgic', emoji: '🥺', category: 'neutral' },
    { id: 15, name: 'curious', emoji: '🤔', category: 'neutral' },
    { id: 16, name: 'peaceful', emoji: '☮️', category: 'neutral' }
  ];

  const activities = [
    { id: 101, name: 'eating', emoji: '🍽️', category: 'food' },
    { id: 102, name: 'cooking', emoji: '👨‍🍳', category: 'food' },
    { id: 103, name: 'drinking coffee', emoji: '☕', category: 'food' },
    { id: 104, name: 'working out', emoji: '🏋️', category: 'fitness' },
    { id: 105, name: 'running', emoji: '🏃', category: 'fitness' },
    { id: 106, name: 'yoga', emoji: '🧘', category: 'fitness' },
    { id: 107, name: 'reading', emoji: '📚', category: 'leisure' },
    { id: 108, name: 'watching movies', emoji: '🎬', category: 'leisure' },
    { id: 109, name: 'listening to music', emoji: '🎵', category: 'leisure' },
    { id: 110, name: 'gaming', emoji: '🎮', category: 'leisure' },
    { id: 111, name: 'traveling', emoji: '✈️', category: 'adventure' },
    { id: 112, name: 'hiking', emoji: '🥾', category: 'adventure' },
    { id: 113, name: 'swimming', emoji: '🏊', category: 'adventure' },
    { id: 114, name: 'working', emoji: '💼', category: 'work' },
    { id: 115, name: 'studying', emoji: '📖', category: 'work' },
    { id: 116, name: 'celebrating', emoji: '🎉', category: 'social' },
    { id: 117, name: 'hanging out', emoji: '👫', category: 'social' },
    { id: 118, name: 'shopping', emoji: '🛍️', category: 'social' }
  ];

  useEffect(() => {
    const sourceItems = activeTab === 'feelings' ? feelings : activities;
    const filtered = sourceItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, activeTab]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelection = (item) => {
    onSelectionChange(item);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleRemoveSelection = () => {
    onSelectionChange(null);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-yellow-600"
      >
        <Smile size={20} className="text-yellow-500" />
        <span className="text-sm font-medium">
          {selectedFeeling ? `${selectedFeeling.emoji} ${selectedFeeling.name}` : 'Feeling/activity'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-3 border-b border-gray-100">
            <div className="flex space-x-1 mb-3">
              <button
                onClick={() => setActiveTab('feelings')}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'feelings'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                😊 Feelings
              </button>
              <button
                onClick={() => setActiveTab('activities')}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'activities'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🎯 Activities
              </button>
            </div>

            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {Object.keys(groupedItems).length > 0 ? (
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="p-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1 mb-1">
                    {category}
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelection(item)}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="text-lg">{item.emoji}</span>
                        <span className="text-sm font-medium text-gray-900 capitalize">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No {activeTab} found
              </div>
            )}
          </div>
        </div>
      )}

      {selectedFeeling && (
        <div className="mt-2">
          <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm w-fit">
            <span>{selectedFeeling.emoji}</span>
            <span className="capitalize">{selectedFeeling.name}</span>
            <button
              onClick={handleRemoveSelection}
              className="hover:bg-yellow-200 rounded-full p-0.5"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
