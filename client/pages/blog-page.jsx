import React from 'react';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    fetch('/api/blog-page')
      .then(res => res.json())
      .then(data => this.setState({
        data
      }));
  }

  render() {
    return (
      <div className='container-fluid bg-red text-white py-4'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h3 className='f-style-kanit display-4 my-4 text-shadow'>Tech Cherry</h3>
          </div>
        </div>
        <div className='container-md'>

        </div>
      </div>
    )
  }
}
