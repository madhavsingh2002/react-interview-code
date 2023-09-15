import React from 'react';

function BlogList({ posts }) {
  // this is Blog list for display blog
  return (
    <div className='card w-100 p-3'>
      <h2>Blog Posts</h2>
      {
        posts.map((blog, index) => (
          <>
            <div className='card mb-3 p-3'>
              <h2>{blog.title} </h2>
              <p>{blog.content} </p>
            </div>

          </>
        ))
      }

    </div>
  );
}

export default BlogList;
