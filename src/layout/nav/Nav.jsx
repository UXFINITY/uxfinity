import React from 'react'

import './Nav.css'

function Nav() {
  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        <strong>UX</strong>finiti
      </div>
      <ul className='nav-sections'>
        <li>Showcase</li>
        <li>What we do</li>
        <li>Testimonial</li>
      </ul>
      <button className='nav-button'>Lets make it happen</button>
    </nav>
  )
}

export default Nav
