import React from 'react';

function Nav() {
  return (
    <ul className='nav f-style-teko f-size-nav f-letter-spacing-1 red-1'>
      <li className='nav-item'>
        <a href='#services' onClick={() => } className='nav-link active px-2 px-lg-4 py-1 text-reset'>Services</a>
      </li>
      <li className='nav-item'>
        <a href='#blog' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Blog</a>
      </li>
      <li className='nav-item'>
        <a href='#about-us' className='nav-link active px-2 px-lg-4 py-1 text-reset'>About Us</a>
      </li>
      <li className='nav-item'>
        <a href='#contact-us' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Contact Us</a>
      </li>
      <li className='nav-item'>
        <a target='_blank' href='https://www.tasksuite.com/' rel='noreferrer' className='nav-link active px-2 px-lg-4 py-1 text-reset'>CRM</a>
      </li>
      <li className='nav-item'>
        <a target='_blank' href='https://www.taskloan.com/' rel='noreferrer' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Leading Software</a>
      </li>
      <li className='nav-item'>
        <a href='#partners' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Partners</a>
      </li>
    </ul>
  );
}

export default Nav;
