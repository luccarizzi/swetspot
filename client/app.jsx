import React from 'react';
import Navbar from './components/navbar';
import MainPage from './pages/main-page';
import Footer from './components/footer';
import BlogPage from './pages/blog-page';
import PostPage from './pages/post-page';
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
      if (!this.state.route.path.startsWith('blog-page')) {
        let section = document.getElementById(this.state.route.path);
        section.scrollIntoView()
      }
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path.startsWith('blog-page/')) {
      return <PostPage route={route}/>;
    } else if (route.path.startsWith('blog-page')) {
      return <BlogPage />;
    } else {
      return <MainPage />;
    }
  }

  render() {
    console.log(this.state.route.path)
    return (
      <>
        <Navbar />
        { this.renderPage() }
        <Footer />
      </>
    );
  }
}
