import React from 'react';

function Navigation() {
  return (
    <ul className='nav f-style-teko f-size-navigation red-1 f-letter-spacing-1'>
      <li className='nav-item'>
        <a href='#' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Services</a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Blog</a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link active px-2 px-lg-4 py-1 text-reset'>About Us</a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Contact Us</a>
      </li>
      <li className='nav-item'>
        <a target='_blank' className='nav-link active px-2 px-lg-4 py-1 text-reset' href='https://www.tasksuite.com/' rel="noreferrer">CRM</a>
      </li>
      <li className='nav-item'>
        <a target='_blank' className='nav-link active px-2 px-lg-4 py-1 text-reset' href='https://www.taskloan.com/' rel="noreferrer">Leading Software</a>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link active px-2 px-lg-4 py-1 text-reset'>Partners</a>
      </li>
    </ul>
  )
}

export default Navigation;
