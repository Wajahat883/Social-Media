import React, { useState } from 'react';
import { useUI } from '../sharecontext/Sharecontext';
import Feed from '../../Feed/Feed';
import Messages from '../Allsidebarcomponent/Message/Messages';
import Videos from '../Allsidebarcomponent/Videos/Videos';
import Share from '../../Sharedata/Share';
import PostList from '../../post/Postlist';

export default function MainContent() {
  const { activeSection } = useUI();
  const [posts, setPosts] = useState([]);

  const handleNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-4 space-y-4">
      {activeSection === 'Feed' && (
        <>
          <Share onPost={handleNewPost} />
          <PostList posts={posts} />
        </>
      )}

      {activeSection === 'Messages' && <Messages />}
      {activeSection === 'Videos' && <Videos />}
      
      {/* Future features (placeholders): */}
      {/* {activeSection === 'Groups' && <GroupsComponent />} */}
      {/* {activeSection === 'Bookmarks' && <BookmarksComponent />} */}
      {/* {activeSection === 'Questions' && <QuestionsComponent />} */}
      {/* {activeSection === 'Jobs' && <JobsComponent />} */}
      {/* {activeSection === 'Events' && <EventsComponent />} */}
      {/* {activeSection === 'Courses' && <CoursesComponent />} */}
    </div>
  );
}
