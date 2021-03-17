import React from 'react';

function Blog() {
  return (
    <div id='blog' className='container-fluid bg-red text-white py-4'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='f-style-kanit display-1 my-4 text-shadow'>Tech Cherry</h1>
        </div>
      </div>
      <div className='row text-center'>
        <div className='my-lg-4'>
          <a href='#blog-page' className='f-style-confortaa text-white text-decoration-none h3'>
            <div className='button b-white'>
              See All
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
