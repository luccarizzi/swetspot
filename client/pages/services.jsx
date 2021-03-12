import React from 'react';
import cardImage1 from '../../server/public/src/card-1.jpg';
import cardImage2 from '../../server/public/src/card-2.jpg';
import cardImage3 from '../../server/public/src/card-3.jpg';

function Services() {
  return (
    <div className='container-xxl py-2'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='f-style-kanit display-1 my-4 red-2 text-shadow'>Services</h1>
        </div>
      </div>
      <div className='row justify-content-center justify-content-xl-evenly f-style-confortaa'>
        <div className='col-12 col-md-6 my-2 mw-400'>
          <div className='card'>
            <img
              className='card-img-top card-image'
              src={cardImage1}
              alt=''></img>
            <div className='card-body'>
              <h4 className='card-title f-style-kanit'>IT Support</h4>
              <p className='card-text text-justify'>
                Our IT company is available to consult with you or your staff when problems arise with your information technology software.
                These professional services can be either remote or on-site assistance.
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 my-2 mw-400'>
          <div className='card'>
            <img
              className='card-img-top card-image'
              src={cardImage2}
              alt=''></img>
            <div className='card-body'>
              <h4 className='card-title f-style-kanit'>Network Support & Maintenance</h4>
              <p className='card-text text-justify'>
                We can set up and maintain your business&apos;s network or help troubleshoot and maintain your existing system and provide professional services in all areas,
                from hardware to information technology software.
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 my-2 mw-400'>
          <div className='card'>
            <img
              className='card-img-top card-image'
              src={cardImage3}
              alt=''></img>
            <div className='card-body'>
              <h4 className='card-title f-style-kanit'>Cloud Services & Data Management</h4>
              <p className='card-text text-justify'>
                Our professional services team will work with you to establish the appropriate cloud size and available resources for your business.
                We are a one-stop-shop IT company that offers custom information technology software.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row text-center'>
        <div className='my-lg-4'>
          <a href='#' className='f-style-confortaa red-2 text-decoration-none h3'>
            <div className='button b-red'>
              More Services
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
