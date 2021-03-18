import React from 'react';
import PostPreview from '../components/post-preview';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.renderPostPreview = this.renderPostPreview.bind(this);
  }

  componentDidMount() {
    fetch('/api/blog-page')
      .then(res => res.json())
      .then(data => this.setState({
        data
      }));
  }

  renderPostPreview() {
    const { data } = this.state;
    if (data) {
      return (
        <>
          {
            data.map((data, index) => {
              return (
                <PostPreview key={index} data={data}/>
              );
            })
          }
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
      <div className='container-fluid bg-red text-white py-4'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='f-style-kanit display-4 my-2 my-lg-4 text-shadow'>Tech Cherry</h2>
          </div>
        </div>
        <div className='container-md'>
          { this.renderPostPreview() }
        </div>
      </div>
    );
  }
}
