import React from 'react';
import logo from '../../server/public/src/logo.png';

function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3 col-md-2 col-lg-1'>
          <a href='#'>
            <img
              className='img-fluid'
              src={logo}
              alt='swētSPOT logo.'></img>
          </a>
        </div>
        {/* <div className='col-6'>
          <ul>
            <li>Services</li>
            <li></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
