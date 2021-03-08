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
          <div>
            <div>
              <MediaQuery minDeviceWidth={500}>
                {(matches) =>
                  matches
                    ? <p>You are retina</p>
                    : <p>You are not retina</p>
                }
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
