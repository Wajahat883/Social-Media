import React, { useState } from 'react';
import { 
  Image, 
  Video, 
  Smile, 
  MapPin, 
  Users, 
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  Globe,
  Lock,
  Edit,
  Plus
} from 'lucide-react';

export default function ProfileTimeline({ profile, isOwnProfile = true, onUpdateProfile }) {
  const [activeTab, setActiveTab] = useState('posts');
  const [showLifeEvents, setShowLifeEvents] = useState(false);

  const tabs = [
    { id: 'posts', label: 'Posts' },
    { id: 'about', label: 'About' },
    { id: 'friends', label: 'Friends' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: 'check-ins', label: 'Check-ins' },
    { id: 'more', label: 'More' }
  ];

  const lifeEvents = [
    {
      id: 1,
      type: 'work',
      icon: Briefcase,
      title: 'Started working at Tech Corp',
      date: 'January 2023',
      description: 'Software Engineer',
      privacy: 'public'
    },
    {
      id: 2,
      type: 'education',
      icon: GraduationCap,
      title: 'Graduated from University',
      date: 'May 2022',
      description: 'Computer Science Degree',
      privacy: 'public'
    },
    {
      id: 3,
      type: 'relationship',
      icon: Heart,
      title: 'In a relationship',
      date: 'March 2022',
      description: 'With Sarah Johnson',
      privacy: 'friends'
    },
    {
      id: 4,
      type: 'location',
      icon: Home,
      title: 'Moved to San Francisco',
      date: 'August 2021',
      description: 'California, USA',
      privacy: 'public'
    }
  ];

  const aboutSections = [
    {
      title: 'Work and Education',
      icon: Briefcase,
      items: [
        { icon: Briefcase, text: 'Software Engineer at Tech Corp', subtext: '2023 - Present' },
        { icon: GraduationCap, text: 'Studied Computer Science at University', subtext: '2018 - 2022' }
      ]
    },
    {
      title: 'Places lived',
      icon: Home,
      items: [
        { icon: Home, text: 'Lives in San Francisco, California', subtext: 'Current city' },
        { icon: MapPin, text: 'From New York, New York', subtext: 'Hometown' }
      ]
    },
    {
      title: 'Contact and basic info',
      icon: Globe,
      items: [
        { icon: Calendar, text: 'Born January 15, 1995', subtext: '' },
        { icon: Heart, text: 'In a relationship', subtext: '' },
        { icon: Globe, text: 'English, Spanish', subtext: 'Languages' }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-4 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Intro Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intro</h3>
            
            {profile.bio ? (
              <p className="text-gray-600 text-center mb-4">{profile.bio}</p>
            ) : isOwnProfile ? (
              <div className="text-center mb-4">
                <p className="text-gray-500 mb-3">Describe who you are</p>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
                  Add bio
                </button>
              </div>
            ) : null}

            <div className="space-y-3">
              {profile.work && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Briefcase className="w-5 h-5" />
                  <span>{profile.work}</span>
                </div>
              )}
              {profile.education && (
                <div className="flex items-center gap-3 text-gray-600">
                  <GraduationCap className="w-5 h-5" />
                  <span>{profile.education}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Home className="w-5 h-5" />
                  <span>Lives in {profile.location}</span>
                </div>
              )}
              {profile.hometown && (
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>From {profile.hometown}</span>
                </div>
              )}
              {profile.relationship && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Heart className="w-5 h-5" />
                  <span>{profile.relationship}</span>
                </div>
              )}
              {profile.joinDate && (
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Joined {new Date(profile.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
              )}
            </div>

            {isOwnProfile && (
              <button className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
                Edit details
              </button>
            )}
          </div>

          {/* Photos Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Photos</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                See all photos
              </button>
            </div>
            
            {profile.photos && profile.photos.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {profile.photos.slice(0, 9).map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Image className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No photos to show</p>
              </div>
            )}
          </div>

          {/* Friends Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Friends</h3>
                <p className="text-gray-600 text-sm">{profile.friendsCount || 0} friends</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                See all friends
              </button>
            </div>
            
            {profile.friends && profile.friends.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {profile.friends.slice(0, 9).map((friend, index) => (
                  <div key={index} className="text-center">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2">
                      <img 
                        src={friend.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${friend.name}`} 
                        alt={friend.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900 truncate">{friend.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No friends to show</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'posts' && (
            <>
              {/* Create Post */}
              {isOwnProfile && (
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={profile.profilePhoto || `https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 text-left text-gray-500 transition-colors">
                      What's on your mind?
                    </button>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-around">
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Video className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600 font-medium">Live video</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Image className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600 font-medium">Photo/video</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Smile className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-600 font-medium">Feeling/activity</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Life Events */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Life Events</h3>
                  {isOwnProfile && (
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                      <Plus className="w-4 h-4" />
                      Add life event
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  {lifeEvents.map((event) => {
                    const Icon = event.icon;
                    return (
                      <div key={event.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <p className="text-gray-600">{event.description}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <span>{event.date}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              {event.privacy === 'public' ? (
                                <Globe className="w-3 h-3" />
                              ) : (
                                <Lock className="w-3 h-3" />
                              )}
                              <span className="capitalize">{event.privacy}</span>
                            </div>
                          </div>
                        </div>
                        {isOwnProfile && (
                          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                            <Edit className="w-4 h-4 text-gray-500" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              {aboutSections.map((section, index) => {
                const SectionIcon = section.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <SectionIcon className="w-6 h-6 text-gray-600" />
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={itemIndex} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <ItemIcon className="w-5 h-5 text-gray-500" />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{item.text}</p>
                              {item.subtext && (
                                <p className="text-sm text-gray-500">{item.subtext}</p>
                              )}
                            </div>
                            {isOwnProfile && (
                              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                                <Edit className="w-4 h-4 text-gray-500" />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    {isOwnProfile && (
                      <button className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add {section.title.toLowerCase()}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}