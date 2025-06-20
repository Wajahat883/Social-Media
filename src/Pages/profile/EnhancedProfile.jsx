import React, { useState } from 'react';
import ProfileCover from '../../components/Profile/ProfileCover';
import ProfileTimeline from '../../components/Profile/ProfileTimeline';

export default function EnhancedProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    bio: 'Software Engineer passionate about creating amazing user experiences. Love to travel and explore new technologies.',
    coverPhoto: null,
    profilePhoto: null,
    work: 'Software Engineer at Tech Corp',
    education: 'Computer Science at Stanford University',
    location: 'San Francisco, California',
    hometown: 'New York, New York',
    relationship: 'In a relationship',
    joinDate: '2020-01-15',
    friendsCount: 1247,
    mutualFriends: 23,
    photos: [
      'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    friends: [
      { name: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SarahJohnson' },
      { name: 'Mike Chen', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=MikeChen' },
      { name: 'Emma Wilson', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=EmmaWilson' },
      { name: 'David Kim', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DavidKim' },
      { name: 'Lisa Rodriguez', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=LisaRodriguez' },
      { name: 'Alex Thompson', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AlexThompson' },
      { name: 'Maria Garcia', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=MariaGarcia' },
      { name: 'James Brown', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JamesBrown' },
      { name: 'Anna Davis', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AnnaDavis' }
    ]
  });

  const updateProfile = (updates) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <ProfileCover 
        profile={profile} 
        isOwnProfile={true} 
        onUpdateProfile={updateProfile} 
      />
      <ProfileTimeline 
        profile={profile} 
        isOwnProfile={true} 
        onUpdateProfile={updateProfile} 
      />
    </div>
  );
}