import React from 'react';

function BlogList({ posts }) {
  return (
    <div className='card w-100 p-3'>
      <h2>Blog Posts</h2>
      {posts.map((post, index) => (
        <>
          <div className='card mb-3 p-3'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

          </div>
        </>

      ))}

    </div>
  );
}

export default BlogList;
