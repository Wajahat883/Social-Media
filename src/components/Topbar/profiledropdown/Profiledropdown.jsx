import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Settings, 
  Moon, 
  Sun, 
  Eye, 
  HelpCircle, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../../Context/Authcontext';

export default function ProfileDropdown({ isOpen, onClose, userImage }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
const { logout } = useAuth();


  // Close dropdown when clicking outside
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.profile-dropdown')) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically update your app's theme context or state
    console.log('Dark mode toggled:', !isDarkMode);
  };

  const handleLogout = () => {
    logout(); // firebase sign out
    onClose(); // close dropdown
  };

  if (!isOpen) return null;

  return (
    <div className="profile-dropdown absolute right-0 top-12 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-100">
          <Link 
            to="/profile" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            <img 
              src={userImage} 
              alt="Profile" 
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-sm text-gray-500">View your profile</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {/* Settings */}
          <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            onClick={() => {
              console.log('Settings clicked');
              onClose();
            }}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Settings & Privacy</p>
              <p className="text-sm text-gray-500">Manage your account settings</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            onClick={toggleDarkMode}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </p>
              <p className="text-sm text-gray-500">
                {isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              </p>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${
              isDarkMode ? 'bg-blue-500' : 'bg-gray-300'
            } relative`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </div>
          </button>

          {/* Accessibility */}
          <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            onClick={() => {
              console.log('Accessibility clicked');
              onClose();
            }}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Accessibility</p>
              <p className="text-sm text-gray-500">Manage accessibility settings</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>

          {/* Help & Support */}
          <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            onClick={() => {
              console.log('Help & Support clicked');
              onClose();
            }}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Help & Support</p>
              <p className="text-sm text-gray-500">Get help and contact support</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Logout Section */}
        <div className="border-t border-gray-100 py-2">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left group"
            onClick={handleLogout}
          >
            <div className="w-10 h-10 bg-red-100 group-hover:bg-red-200 rounded-full flex items-center justify-center transition-colors">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-red-600">Log Out</p>
              <p className="text-sm text-red-400">Sign out of your account</p>
            </div>
          </button>
        </div>
      </div>
    
  );
}