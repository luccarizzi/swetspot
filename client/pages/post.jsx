import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    const { path } = this.props.route;
    fetch(`/api/${path}`)
      .then(res => res.json())
      .then(data => this.setState({
        data
      }));
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}
