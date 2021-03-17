import React from 'react';

function Partners() {
  return (
    <div id='partners' className='container-xxl py-2'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1 className='f-style-kanit display-1 my-4 red-2 text-shadow'> Swēt Partners</h1>
        </div>
        <div className='col-12 col-md-4 f-style-confortaa text-center my-4'>
          <h3>Veteran-Owned:</h3>
          <a target='_blank' href='http://www.talarai.com/' rel='noreferrer'>
            <img
              className='img-fluid'
              src='src/partners/partner1.jpg'
              alt=''></img>
          </a>
        </div>
        <div className='col-12 col-md-4 f-style-confortaa text-center my-4'>
          <h3>CRM:</h3>
          <a target='_blank' href='https://www.tasksuite.com/' rel='noreferrer'>
            <img
              className='img-fluid'
              src='src/partners/partner2.jpg'
              alt=''></img>
          </a>
        </div>
        <div className='col-12 col-md-4 f-style-confortaa text-center my-4'>
          <h3>Business Intelligence:</h3>
          <a target='_blank' href='http://www.valuelabs.com/' rel='noreferrer'>
            <img
              className='img-fluid'
              src='src/partners/partner3.jpg'
              alt=''></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
