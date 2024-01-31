import React from 'react';
import './MenuMobile.css';
import exit from '../assets/icons/exit.svg';
import { Link as LiScroll } from 'react-scroll';
function MenuMobile({ toggleMenu, navData }) {
  //toggleMenu is a funtcion
  return (
    <div className='tm_container'>
      <section className='tm_f_section'>
        {/* <div className='nav-logo nav-logo-w'>
          <strong>UX</strong>Finity
        </div> */}
        <picture onClick={toggleMenu}>
          <img src={exit} alt='exit uxfinity' />
        </picture>
      </section>
      <section className='tm_s_section'>
        <LiScroll to='services' onClick={toggleMenu}>{navData[0]}</LiScroll>
        <LiScroll to='projects' onClick={toggleMenu}>{navData[1]}</LiScroll>
        <LiScroll to='about' onClick={toggleMenu}>{navData[2]}</LiScroll>
        <LiScroll to='contact' onClick={toggleMenu}>{navData[3]}</LiScroll>
      </section>
    </div>
  );
}

export default MenuMobile;
