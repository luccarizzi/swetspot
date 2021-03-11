import React from 'react';
import logo from '../../server/public/src/logo.png';
import MediaQuery from 'react-responsive';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
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
          <div className='col-9 col-md-10 col-lg-11 d-flex justify-content-end'>
            <div>
              <MediaQuery minDeviceWidth={768}>
                {(matches) =>
                  matches
                    ? <nav></nav>
                    : <i className="fas fa-bars"></i>
                }
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
