import React, { useState } from 'react';

function BlogForm({ onAddPost }) {
  // Don't forget to add bootstrap...
  // let's create the BlogList for Displaying the blog
const [title,setTitle]=useState('')
const [content,setContent]=useState('')
const handleSubmit=(e)=>{
  e.preventDefault()
  if(title.trim()!=='' && content.trim()!==''){
    onAddPost({title,content})
    setTitle('')
    setContent('')
  }
}
  return (
    <div className='form mb-3'>
      <h2 className='mb-3'>Add a New Blog Post</h2>
      <form onSubmit={handleSubmit} className='form mb-3'>
        <div className="mb-3">
        <label htmlFor='title' className='form-label'>Title</label>
        <input type="text" placeholder='Enter your title' className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        
        <div className="mb-3">
        <label htmlFor="content" className='form-label'>Content:</label>
        <textarea name="" id="content" className='form-control' value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        </div>
        
        <button  className='btn btn-dark' type='submit'>submit</button>
      </form>
    </div>
  );
}

export default BlogForm;
