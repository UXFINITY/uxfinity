import React from 'react'
import './MenuMobile.css'
import exit from '../assets/icons/exit.svg'
import { Link as LiScroll } from 'react-scroll'
function MenuMobile({ toggleMenu, navData }) {
  //toggleMenu is a funtcion
  return (
    <div className='tm_container'>
      <section className='tm_f_section'>
        <div className='nav-logo nav-logo-w'>
          <strong>UX</strong>Finity
        </div>
        <picture onClick={toggleMenu}>
          <img src={exit} alt='exit uxfinity' />
        </picture>
      </section>
      <section className='tm_s_section'>
        
          <LiScroll to='methodology'>{navData[0]}</LiScroll>
          <LiScroll to='whatwedo'>{navData[1]}</LiScroll><LiScroll to='testimonial'>{navData[2]}</LiScroll><LiScroll to='form_mail'>{navData[3]}</LiScroll>
        
      </section>
    </div>
  )
}

export default MenuMobile
