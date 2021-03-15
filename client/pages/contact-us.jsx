import React from 'react';

function ContactUs() {
  return (
    <div id='contact-us' className='container-fluid bg-red text-white py-4'>
      <div className='row justify-content-center'>
        <div className='col-12 text-center'>
          <h1 className='f-style-kanit display-1 my-4 text-shadow'>Social</h1>
        </div>
        <div className='col-12 text-center'>
          <a href=''>
            <i className='fab fa-facebook display-2 text-white'></i>
          </a>
        </div>
        <div className='col-12 text-center mt-md-5'>
          <h1 className='f-style-kanit display-1 mt-4 mb-2 text-shadow'>Contact Us</h1>
        </div>
        <form className='col-10 col-sm-8 col-md-6 col-lg-4 f-style-confortaa'>
          <p className='text-center f-style-confortaa h6'>Request for Quotation</p>
          <div className='g-2 border-bottom border-white my-4'>
            <label
              htmlFor='name'
              className='col-2 h6 pe-1'>Name:</label>
            <input
              id='name'
              name='name'
              type='text'
              className='col-10 h4 fw-bolder input-box text-white'
              required></input>
          </div>
          <div className='g-2 border-bottom border-white my-4'>
            <label
              htmlFor='email'
              className='col-2 h6 pe-1'>Email:</label>
            <input
              id='email'
              name='email'
              type='email'
              className='col-10 h4 fw-bolder input-box text-white'
              required></input>
          </div>
          <div className='g-2 border-bottom border-white mt-4'>
            <textarea
              name='message'
              type='text'
              className='col-12 h6 fw-bolder input-box text-white lh-base'
              placeholder='Message:'
              rows='4'
              required></textarea>
          </div>
          <div className='g-2 my-4 d-flex'>
            <input
              id='sign-up'
              name='sign-up'
              type='checkbox'
              className='position-relative top-4'></input>
            <label
              htmlFor='sign-up'
              className='ms-2'>Sign up for our email list for updates, promotions, and more.</label>
          </div>
          <div className='g-2 my-4 d-flex justify-content-center'>
            <input
              type='submit'
              className='button b-white h3 text-white'></input>
          </div>
          <div className='col-12 text-center'>
            <p className='text-center f-style-confortaa h6 lh-base fw-light my-4'>
              Let us tailor a service package that meets your needs.
              Tell us a little about your business, and we will get back to you with some suggestions.
            </p>
            <h3 className='mt-4'>Hours</h3>
            <p className='text-center f-style-confortaa h6 lh-base fw-light'>
              Monday - Friday: 9am - 5pm<br></br>
              Saturday - Sunday: Closed
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
