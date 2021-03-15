import React from 'react';
import Navbar from './navbar';
import Banner from './banner';
import Services from './services';
import Blog from './blog';
import AboutUs from './about-us';
import ContactUs from './contact-us';
import Partners from './partners';
import Footer from './footer';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='position-relative'>
          <Banner />
          <Services />
          <Blog />
          <AboutUs />
          <ContactUs />
          <Partners />
          <Footer />
        </div>
      </>
    );
  }
}
