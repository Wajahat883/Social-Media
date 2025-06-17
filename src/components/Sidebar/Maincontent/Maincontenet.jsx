import React, { useState } from 'react';
import { useUI } from '../sharecontext/Sharecontext';
<<<<<<< HEAD
// import Feed from '../../Feed/Feed';
// import Messages from '../Allsidebarcomponent/Message/Messages';
=======
import Feed from '../../Feed/Feed';
import Messages from '../Allsidebarcomponent/Message/Messages';
>>>>>>> ce2b804 (add video plane)
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
<<<<<<< HEAD
      {/* {activeSection === 'Messages' && <Messages />} */}
=======
      {activeSection === 'Messages' && <Messages />}
>>>>>>> ce2b804 (add video plane)
      {activeSection === 'Videos' &&  <Videos/>}
      {/* {activeSection === 'Groups' && }
      {activeSection === 'Bookmarks' && }
      {activeSection === 'Questions' && }
      {activeSection === 'Jobs' && }
      {activeSection === 'Events' && }
      {activeSection === 'Courses' && } */}
    </div>
  );
}
