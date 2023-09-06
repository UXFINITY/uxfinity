import React from 'react'
import './Footer.css'
import face from '../../assets/icons/facebook.svg'
import inst from '../../assets/icons/instagram.svg'
import twit from '../../assets/icons/twitter.svg'

function Footer() {
  return (
    <footer className='foot_container'>
      <section className='foot_f_section'>
        <div className='foot_ff_colum'>
          <h3>Get In Touch</h3>
          <ul className='foot_f_list'>
            <a href='#' target='_blank'>
              <img src={face} alt='' />
            </a>
            <a href='#' target='_blank'>
              <img src={inst} alt='' />
            </a>
            <a href='#' target='_blank'>
              <img src={twit} alt='' />
            </a>
          </ul>
        </div>
        <div className='foot_fs_colum'>
          <h3>Company info</h3>
          <ul>
            <a href='#'>About Us</a>
            <a href='#'>Carrier</a>
            <a href='#'>We are hiring</a>
            <a href='#'>Blog</a>
          </ul>
        </div>
        <div className='foot_ft_colum'>
          <h3>Features</h3>
          <ul>
            <a href='#'>User experience</a>
            <a href='#'>User Interface</a>
            <a href='#'>Code</a>
            <a href='#'>Support</a>
          </ul>
        </div>
      </section>
      <section className='foot_s_section'>
        Made With Love By UXFinity All Right Reserved
      </section>
    </footer>
  )
}

export default Footer
