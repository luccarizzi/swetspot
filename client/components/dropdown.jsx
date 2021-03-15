import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }

  render() {
    let services;
    let showServices = 'More';
    const { toggle } = this.state;
    if (toggle) {
      showServices = 'Less';
      services =
        <div className='row px-5 py-2 f-style-confortaa'>
          <div className='col-12 col-md-4'>
            <ul className='list-unstyled m-0'>
              <li>- Applications Services</li>
              <li>- Audits & Risk Assessment</li>
              <li>- Automation</li>
              <li>- Business Continuity</li>
              <li>- Cloud, Premise and Hybrid Support Services</li>
              <li>- Consulting and Projects</li>
              <li>- Continuous Diagnostics and Mitigation (CDM) Tools</li>
            </ul>
          </div>
          <div className='col-12 col-md-4'>
            <ul className='list-unstyled m-0'>
              <li>- Cybersecurity</li>
              <li>- Data Backup</li>
              <li>- Email Management & Migration</li>
              <li>- Help Desk</li>
              <li>- Hardware</li>
              <li>- IT Relocation Services</li>
              <li>- Managed IT Services</li>
            </ul>
          </div>
          <div className='col-12 col-md-4'>
            <ul className='list-unstyled m-0'>
              <li>- Mobility Services</li>
              <li>- Outsourced and Supplemental IT Support</li>
              <li>- Server Virtualization & Consolidation</li>
              <li>- Strategic Planning</li>
              <li>- Software Design</li>
              <li>- Remote & Onsite Support</li>
              <li>- Unified Communications & VoIP</li>
            </ul>
          </div>
        </div>;
    }
    return (
      <>
        <div className='col-12 my-lg-4 text-center'>
          <button onClick={this.toggle} className='f-style-confortaa red-2 text-decoration-none h3 button b-red' name='See More'>
            {showServices} Services
          </button>
        </div>
        {services}
      </>
    );
  }
}
