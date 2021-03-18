import React from 'react';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => this.setState({
        data
      }));
  }

  renderBlogPostPreview() {
    const { data } = this.state;
    if (data) {
      return (
        <>

        </>
      );
    } else {
      return (
        <div className="loader">Loading...</div>
      );
    }
  }

  render() {
    return (
      <div id='blog' className='container-fluid bg-red text-white py-4'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='f-style-kanit display-1 my-4 text-shadow'>Tech Cherry</h1>
          </div>
        </div>
        <div>

        </div>
        <div className='row text-center'>
          <div className='col-12 my-lg-4'>
            <a href='#blog-page' className='f-style-confortaa text-white text-decoration-none h3'>
              <div className='button b-white'>
                See All
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
