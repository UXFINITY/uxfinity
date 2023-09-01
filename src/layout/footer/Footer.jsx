import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className='foot_container'>
      <section className='foot_f_section'>
        <div><h3>Get In Touch</h3>
        <ul className='foot_f_list'>
          <li><img src="" alt="" /></li>
          <li><img src="" alt="" /></li>
          <li><img src="" alt="" /></li>
        </ul>
        </div>
        <div><h3>Company info</h3>
        <ul>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
          </ul></div>
        <div><h3>Features</h3>
        <ul>
          <li>User experience</li>
          <li>User Interface</li>
          <li>Code</li>
          <li>Support</li>
          </ul></div>
      </section>
      <section className='foot_s_section'>
        Made With Love By UXFinity All Right Reserved
      </section>
    </footer>
  )
}

export default Footer