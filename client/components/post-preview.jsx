import React from 'react';

function PostPreview(props) {
  const { data } = props;
  return (
    <a href={`#blog-page/${data.postId}`} className='text-decoration-none text-white'>
      <div className='row justify-content-center py-3 post-link'>
        <div className='col-10 col-lg-4 col-xl-4 text-center align-self-center py-2'>
          <img
            className='img-fluid rounded'
            src={data.image}
            alt=''></img>
        </div>
        <div className='col-12 col-lg-8 col-xl-6 py-2 f-style-confortaa'>
          <h4>{data.title}</h4>
          <p>{data.date}</p>
          <p className='text-justify'>{data.preview}</p>
        </div>
      </div>
    </a>
  );
}

export default PostPreview;
