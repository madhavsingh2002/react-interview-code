import React, { useState } from 'react';

function BlogForm({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      onAddPost({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className='form mb-3'>
      <h2 className='mb-3'>Add a New Blog Post</h2>
      <form className='' onSubmit={handleSubmit}>
        <div className='mb-3'> 
          <label htmlFor="title" className='form-label'>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            className='form-control'
            onChange={handleTitleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="content" className='form-label'>Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className='form-control'
          />
        </div>
        <button className='btn btn-dark' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogForm;
