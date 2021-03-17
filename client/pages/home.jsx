import React from 'react';
import Banner from './banner';
import Services from './services';
import Blog from './blog';
import AboutUs from './about-us';
import ContactUs from './contact-us';
import Partners from './partners';

export default class Home extends React.Component {
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
