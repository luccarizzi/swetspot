import React from 'react';
import cardImage1 from '../../server/public/src/card-1.jpg';

function PostPreview() {
  return (
    <div className='row justify-content-center py-3'>
      <div className='col-8 col-sm-4 col-lg-4 col-xl-2 text-center align-self-center py-2'>
        <img
          className='img-fluid rounded'
          src={cardImage1}
          alt=''></img>
      </div>
      <div className='col-12 col-sm-8 col-lg-8 col-xl-6 py-2 f-style-confortaa'>
        <h4>When Good Employees Leave Bad</h4>
        <p>August 6, 2020</p>
        <p className='text-justify'>
          The rise and fall of a good employee can be tracked pretty easily. Why do great employees leave? They took a few too many hits for the team. Yes, it is that simple, but addressing the problem is not. In this 3 part series...
        </p>
      </div>
    </div>
  );
}

export default PostPreview;
