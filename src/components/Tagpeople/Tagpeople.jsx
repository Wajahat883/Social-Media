import React, { useState, useRef, useEffect } from 'react';
import { Users, X, Search } from 'lucide-react';

export default function TagPeople({ onTagsChange, selectedTags = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPeople, setFilteredPeople] = useState([]);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Mock data - in a real app, this would come from an API
  const mockPeople = [
    { id: 1, name: 'Alice Johnson', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AliceJohnson', mutualFriends: 5 },
    { id: 2, name: 'Bob Smith', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=BobSmith', mutualFriends: 12 },
    { id: 3, name: 'Carol Davis', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=CarolDavis', mutualFriends: 3 },
    { id: 4, name: 'David Wilson', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DavidWilson', mutualFriends: 8 },
    { id: 5, name: 'Emma Brown', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=EmmaBrown', mutualFriends: 15 },
    { id: 6, name: 'Frank Miller', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=FrankMiller', mutualFriends: 2 },
    { id: 7, name: 'Grace Lee', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=GraceLee', mutualFriends: 7 },
    { id: 8, name: 'Henry Taylor', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=HenryTaylor', mutualFriends: 11 },
    { id: 9, name: 'Ivy Chen', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=IvyChen', mutualFriends: 6 },
    { id: 10, name: 'Jack Anderson', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JackAnderson', mutualFriends: 9 }
  ];

  useEffect(() => {
    const filtered = mockPeople.filter(person => 
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedTags.some(tag => tag.id === person.id)
    );
    setFilteredPeople(filtered);
  }, [searchTerm, selectedTags]);

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

  const handleTagPerson = (person) => {
    const newTags = [...selectedTags, person];
    onTagsChange(newTags);
    setSearchTerm('');
  };

  const handleRemoveTag = (personId) => {
    const newTags = selectedTags.filter(tag => tag.id !== personId);
    onTagsChange(newTags);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-600"
      >
        <Users size={20} className="text-blue-500" />
        <span className="text-sm font-medium">
          Tag people {selectedTags.length > 0 && `(${selectedTags.length})`}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search friends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((person) => (
                <div
                  key={person.id}
                  onClick={() => handleTagPerson(person)}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 cursor-pointer"
                >
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{person.name}</div>
                    <div className="text-sm text-gray-500">{person.mutualFriends} mutual friends</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                {searchTerm ? 'No friends found' : 'Start typing to search friends'}
              </div>
            )}
          </div>
        </div>
      )}

      {selectedTags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedTags.map((person) => (
            <div
              key={person.id}
              className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>{person.name}</span>
              <button
                onClick={() => handleRemoveTag(person.id)}
                className="hover:bg-blue-200 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}