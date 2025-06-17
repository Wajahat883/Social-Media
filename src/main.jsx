// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Hooks/Auth/UseAuth.jsx';
import { PostProvider } from './components/post/postcontext.jsx';
import { VideoProvider } from './Context/videocontext.jsx';
import { UIProvider } from './components/Sidebar/sharecontext/Sharecontext.jsx';
import { UEProvider } from './Context/Videopanelcontext.jsx';
<<<<<<< HEAD
import { MessageProvider } from './Context/Messagecontext.jsx';
=======
>>>>>>> ce2b804 (add video plane)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
          <VideoProvider>
<<<<<<< HEAD
            <MessageProvider>
 <UEProvider>
=======
            <UEProvider>
>>>>>>> ce2b804 (add video plane)
            <UIProvider>

            <App />
          </UIProvider>
            </UEProvider>
<<<<<<< HEAD
            </MessageProvider>
           
=======
>>>>>>> ce2b804 (add video plane)
          
          </VideoProvider>         
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
