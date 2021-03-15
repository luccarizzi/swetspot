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
    // console.log(this.state)
  }

  render() {
    return (
      <div className='my-lg-4'>
        <button onClick={this.toggle} className='f-style-confortaa red-2 text-decoration-none h3 button b-red' name='See More'>More Services</button>
      </div>
    );
  }
}
