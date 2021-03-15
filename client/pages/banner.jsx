import React from 'react';

function Banner() {
  return (
    <div className='container-fluid bg-red text-white py-4 my-1'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='f-style-kanit display-1 my-4 text-shadow'>Professional Services</h1>
          <p className='h3 f-style-confortaa fw-lighter my-4'>
            We put the <span className='f-style-lobster f-letter-spacing-1 green-1'>Cherry</span> on top of tech!
          </p>
          <div className='my-4'>
            <a href='#contact-us' className='f-style-confortaa text-white text-decoration-none h3'>
              <div className='button b-white'>
                Get Quote
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
