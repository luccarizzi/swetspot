import React from 'react';
import logo from '../../server/public/src/logo.png';
import MediaQuery from 'react-responsive';
import Burger from '../components/burger';
import Nav from '../components/nav';

function Navbar() {
  return (
    <div className='container-fluid mb-1'>
      <div className='row'>
        <div className='col-3 col-md-2 col-lg-1 p-0'>
          <a href='#'>
            <img
              className='img-fluid'
              src={logo}
              alt='swētSPOT logo.'></img>
          </a>
        </div>
        <div className='col-9 col-md-10 col-lg-11 d-flex justify-content-end align-items-center'>
            <MediaQuery minDeviceWidth={768}>
              {matches =>
                matches
                  ? <Nav />
                  : <Burger />
              }
            </MediaQuery>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
