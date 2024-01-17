import React, { useRef, useState } from 'react';
import './Nav.css';
import { Link as ButtonScroll } from 'react-scroll';
import { useBodyContext } from '../../helpers/BodyContext';
import MenuMobile from '../../components/MenuMobile';

import USAimg from '../../assets/nav/USA.png';
import Spainimg from '../../assets/nav/Spain.png';
import Germanyimg from '../../assets/nav/Germany.png';
import menu from '../../assets/icons/List.svg';

function Nav() {
  const { setLanguage, AllData, setBgColor, bgColor } = useBodyContext();
  //destructuring
  const { navData, navImg } = AllData;
  // envair a un componente
  const [image, setImage] = useState(USAimg);
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const languageRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChangeLanguage = (e) => {
    const { current } = languageRef;
    const [, ...LanguageArray] = [...current.children];

    // si es verdadero
    if (toggleLanguage) {
      LanguageArray.forEach((element) => {
        element.style.top = '0px';
      });
      setToggleLanguage(false);
      return;
    }
    LanguageArray.forEach((element, index) => {
      element.style.top = `${index * 40 + 40}px`;
    });
    setToggleLanguage(true);
    // setLanguage(e.target.value) //'en' or 'es'
  };

  const handleBgColor = () => {
    setBgColor(!bgColor); //true or false
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <strong>UX</strong>finity
      </div>
      <ul className="nav-sections">
        <ButtonScroll smooth={true} duration={100} to="services">
          {navData[0]}
        </ButtonScroll>
        <ButtonScroll smooth={true} duration={100} to="projects">
          {navData[1]}
        </ButtonScroll>
        <ButtonScroll smooth={true} duration={100} to="about">
          {navData[2]}
        </ButtonScroll>
        <ButtonScroll smooth={true} duration={100} to="contact">
          {navData[3]}
        </ButtonScroll>
      </ul>

      {/* <button className='nav-bg-color'>
        <div
          className={`nav-bg-circle ${bgColor && 'nav-bg-black'}`}
          onClick={handleBgColor}
        ></div>
      </button> */}
      {/* language section */}

      <div className="nav_r_mobile">
        <ul
          className="language-selector"
          ref={languageRef}
          onClick={handleChangeLanguage}
        >
          <li>
            <img src={image} alt="" />
          </li>
          <li
            onClick={() => {
              setImage(USAimg);
              setLanguage('en');
            }}
          >
            <img src={USAimg} alt="" />
          </li>
          <li
            onClick={() => {
              setImage(Spainimg);
              setLanguage('es');
            }}
          >
            <img src={Spainimg} alt="" />
          </li>
          <li
            onClick={() => {
              setImage(Germanyimg);
              setLanguage('en');
            }}
          >
            <img src={Germanyimg} alt="" />
          </li>
        </ul>
        <div className="nav_mobile" onClick={toggleMenu}>
          <picture>
            <img src={menu} alt="menu icon" />
          </picture>
        </div>
      </div>
      {/* <div className="nav-button-container">
        <ButtonScroll
          smooth={true}
          duration={100}
          to="form_mail"
          className="nav-button"
        >
          <img className="nav-button-arrow" src={navImg} />
        </ButtonScroll>
      </div> */}
      {/*  */}
      {menuOpen && <MenuMobile toggleMenu={toggleMenu} navData={navData} />}

      {/*  */}
    </nav>
  );
}

export default Nav;
