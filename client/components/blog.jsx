import React from 'react';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.renderBlogPostPreview = this.renderBlogPostPreview.bind(this);
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

        data.map(data => {
          return (
            <div key={data.postId} className='col-12 col-md-6 my-2 mw-400'>
              <div className='card'>
                <img
                  className='card-img-top w-100 card-image'
                  src={data.image}
                  alt=''></img>
                <div className='card-body text-body f-style-confortaa text-center'>
                  <p>{data.date}</p>
                  <h4 className='card-title h-60'>{data.title}</h4>
                  <a href={`#blog-page/${data.postId}`}>See Post</a>
                </div>
              </div>
            </div>
          );
        })
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
        <div className='container-xxl'>
          <div className='row justify-content-center justify-content-xl-evenly'>
            {this.renderBlogPostPreview()}
          </div>
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
