import React from 'react';
import ReturnBlogPage from '../components/return-blog-page';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.renderPost = this.renderPost.bind(this);
  }

  componentDidMount() {
    const { path } = this.props.route;
    fetch(`/api/${path}`)
      .then(res => res.json())
      .then(data => this.setState({
        data
      }));
  }

  renderPost() {
    const { data } = this.state;
    if (data) {
      const post = data.post[0];
      const paragraph = data.paragraph;
      return (
        <>
          <ReturnBlogPage />
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 my-1'>
              <img
                className='w-100 rounded'
                src={post.image}
                alt='Post banner image.'></img>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 my-1'>
              <div className='bg-white text-dark f-style-confortaa rounded p-4'>
                <h3>{post.title}</h3>
                <p className=''>{post.date}</p>
                  {
                    paragraph.map(paragraph => {
                      return (
                        <p key={paragraph.paragraphId} className='text-justify'>
                          {paragraph.text}
                        </p>
                      );
                    })
                  }
                <h5 className='text-end pt-4'>{post.author}</h5>
              </div>
            </div>
          </div>
          <ReturnBlogPage />
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
        { this.renderPost() }
      </div>
    );
  }
}
