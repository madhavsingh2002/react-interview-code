import { useState } from 'react'

import './App.css'
import BlogForm from './BlogForm.jsx';
import BlogList from './BlogList.jsx';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className='App d-flex card shadow p-3 mb-5 bg-body rounded'>
    <h1>Blog App</h1>
    
    <BlogForm onAddPost={addPost} />
    <BlogList posts={posts} />
  </div>
  )
}

export default App
