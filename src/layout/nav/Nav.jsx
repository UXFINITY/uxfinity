import React, { useRef, useState } from 'react'
import './Nav.css'
import { useBodyContext } from '../../helpers/BodyContext'
import USAimg from '../../assets/nav/USA.png'
import Spainimg from '../../assets/nav/Spain.png'
import Germanyimg from '../../assets/nav/Germany.png'
import arrow from '../../assets/nav/ArrowRight.svg'
import menu from "../../assets/icons/List.svg"
function Nav() {
  const { setLanguage, AllData, setBgColor, bgColor } = useBodyContext()
  //destructuring
  const { navData } = AllData
  // envair a un componente
  const [image, setImage] = useState(USAimg)
  const [toggleLanguage, setToggleLanguage] = useState(false)
  const languageRef = useRef(null)

  const handleChangeLanguage = (e) => {
    const { current } = languageRef
    const [, ...LanguageArray] = [...current.children]

    // si es verdadero
    if (toggleLanguage) {
      LanguageArray.forEach((element) => {
        element.style.top = '0px'
      })
      setToggleLanguage(false)
      return
    }
    LanguageArray.forEach((element, index) => {
      element.style.top = `${index * 40 + 40}px`
    })
    setToggleLanguage(true)
    // setLanguage(e.target.value) //'en' or 'es'
  }

  const handleBgColor = () => {
    setBgColor(!bgColor) //true or false
  }

  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        <strong>UX</strong>finiti
      </div>
      <ul className='nav-sections'>
        <li>{navData[0]}</li>
        <li>{navData[1]}</li>
        <li>{navData[2]}</li>
      </ul>
      
      {/* <button className='nav-bg-color'>
        <div
          className={`nav-bg-circle ${bgColor && 'nav-bg-black'}`}
          onClick={handleBgColor}
        ></div>
      </button> */}
      {/* language section */}
      <ul
        className='language-selector'
        ref={languageRef}
        onClick={handleChangeLanguage}
      >
        <li>
          <img src={image} alt='' />
        </li>
        <li
          onClick={() => {
            setImage(USAimg)
            setLanguage('en')
          }}
        >
          <img src={USAimg} alt='' />
        </li>
        <li
          onClick={() => {
            setImage(Spainimg)
            setLanguage('es')
          }}
        >
          <img src={Spainimg} alt='' />
        </li>
        <li
          onClick={() => {
            setImage(Germanyimg)
            setLanguage('en')
          }}
        >
          <img src={Germanyimg} alt='' />
        </li>
      </ul>
      <div className='nav-button-container'>
        <button className='nav-button'>
          {navData[3]}
          <img className='nav-button-arrow' src={arrow} />
        </button>
      </div>
      <div className='nav_mobile'>
        <picture><img src={menu} alt="menu icon" /></picture>
      {false && <ul className='nav_mobile-sections'>
        <li>{navData[0]}</li>
        <li>{navData[1]}</li>
        <li>{navData[2]}</li>
      </ul>}
      </div>
    </nav>
  )
}

export default Nav
