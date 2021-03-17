import React from 'react';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    fetch('/api/blog-page')
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <>
        test
      </>
    )
  }
}
