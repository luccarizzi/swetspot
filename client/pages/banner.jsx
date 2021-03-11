import React from 'react';

function Banner() {
  return (
    <div className='container-fluid banner text-white py-4 my-1'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='f-style-kanit display-1 p-4'>Professional Services</h1>
          <p className='h3 f-style-confortaa fw-lighter p-2'>
            We put the <span className='f-style-lobster f-letter-spacing-1 green-1'>Cherry</span> on top of tech!
          </p>
          <div className='p-2'>
            <a href='#' className=''>
              Quote
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
