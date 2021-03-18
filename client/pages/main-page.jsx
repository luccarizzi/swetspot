import React from 'react';
import Banner from '../components/banner';
import Services from '../components/services';
import Blog from '../components/blog';
import AboutUs from '../components/about-us';
import ContactUs from '../components/contact-us';
import Partners from '../components/partners';

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Services />
        <Blog />
        <AboutUs />
        <ContactUs />
        <Partners />
      </>
    );
  }
}
