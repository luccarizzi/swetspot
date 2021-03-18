import React from 'react';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Footer from './pages/footer';
import BlogPage from './pages/blog-page';
import Post from './pages/post';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const newRoute = parseRoute(window.location.hash);
      this.setState({
        route: newRoute
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path.startsWith('blog-page/')) {
      return <Post route={route}/>;
    } else if (route.path.startsWith('blog-page')) {
      return <BlogPage />;
    } else {
      return <Home />;
    }
  }

  render() {
    return (
      <>
        <Navbar />
        { this.renderPage() }
        <Footer />
      </>
    );
  }
}
